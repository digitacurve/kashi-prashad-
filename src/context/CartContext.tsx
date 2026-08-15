"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant } from "@/data/products";

export interface CartItem {
  slug: string;
  title: string;
  variantId: string;
  variantName: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
}

interface CheckoutData {
  isDirect: boolean;
  productName: string;
  selectedVariant: string;
  price: number;
  originalPrice: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  checkoutData: CheckoutData | null;
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (slug: string, variantId: string) => void;
  updateQuantity: (slug: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  originalSubtotal: number;
  triggerCheckout: (productName?: string, selectedVariant?: string, price?: number, originalPrice?: number) => void;
  triggerCartCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("kashi_prasad_cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        setTimeout(() => {
          setCartItems(parsed);
        }, 0);
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);

  // Save cart to localStorage when it changes
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    try {
      localStorage.setItem("kashi_prasad_cart", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  };

  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.slug === product.slug && item.variantId === variant.id
    );

    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
    } else {
      updated = [
        ...cartItems,
        {
          slug: product.slug,
          title: product.title,
          variantId: variant.id,
          variantName: variant.name,
          price: variant.price ?? 0,
          originalPrice: variant.originalPrice ?? 0,
          image: product.images[0]?.src || "/images/hero_puja_kit.png",
          quantity,
        },
      ];
    }
    saveCart(updated);
    setIsCartOpen(true); // Open the cart drawer automatically on add
  };

  const removeFromCart = (slug: string, variantId: string) => {
    const updated = cartItems.filter(
      (item) => !(item.slug === slug && item.variantId === variantId)
    );
    saveCart(updated);
  };

  const updateQuantity = (slug: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug, variantId);
      return;
    }
    const updated = cartItems.map((item) =>
      item.slug === slug && item.variantId === variantId
        ? { ...item, quantity }
        : item
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const triggerCheckout = (productName?: string, selectedVariant?: string, price?: number, originalPrice?: number) => {
    if (productName && price && originalPrice) {
      setCheckoutData({
        isDirect: true,
        productName,
        selectedVariant: selectedVariant || "",
        price,
        originalPrice,
      });
    } else {
      setCheckoutData(null);
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const triggerCartCheckout = () => {
    setCheckoutData({
      isDirect: false,
      productName: "Cart Items",
      selectedVariant: "",
      price: subtotal,
      originalPrice: originalSubtotal,
    });
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalSubtotal = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        checkoutData,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        originalSubtotal,
        triggerCheckout,
        triggerCartCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
