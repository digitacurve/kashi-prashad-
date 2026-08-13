import React from "react";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static pages for all kits at build time (performance & SEO optimization)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for search engines
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.seoTitle,
    description: product.metaDescription,
    keywords: product.tags,
    openGraph: {
      title: product.seoTitle,
      description: product.metaDescription,
      images: [
        {
          url: product.images[0]?.src || "/images/hero_puja_kit.png",
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductRoutePage({ params }: PageProps) {
  const { slug } = await params;

  // Find product by slug
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  return (
    <ProductPageClient
      product={product}
      allProducts={products}
    />
  );
}
