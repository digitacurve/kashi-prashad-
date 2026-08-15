export interface ProductImage {
  src: string;
  alt: string;
}

export interface DetailedItem {
  name: string;
  quantity: string;
  category: "Murtis, Photos & Books" | "Sacred Ingredients & Herbs" | "Ritual Cloths & Aasans" | "Sacred Metalware & Vessels" | "Aroma & Lamps" | "Packaging & Organization";
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number | null;
  originalPrice: number | null;
  badge: string;
  suitableFor: string;
  description: string;
  keyIncludes: string[]; // High-level highlights
  detailedItems: DetailedItem[]; // Checklist contents
}

export interface SpecGroup {
  groupName: string;
  specs: { label: string; value: string }[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  seoTitle: string;
  metaDescription: string;
  rating: number | null;
  reviewsCount: number | null;
  images: ProductImage[];
  badge: string;
  shortDescription: string;
  longDescription: string[];
  variants: ProductVariant[];
  specifications: SpecGroup[];
  faqs: FAQItem[];
  shippingTitle: string;
  shippingText: string;
}

const satyanarayanFaqs: FAQItem[] = [
  {
    q: "Is everything in the Satyanarayan Pooja Kit authentic?",
    a: "Yes. Every single item in the kit—from the Gangajal sourced from the mid-stream of the Ganges to the organic Kumkum and Roli—is selected under the direct supervision of temple priests in Varanasi. They are energized and packed with devotion."
  },
  {
    q: "Does this kit contain any perishable items that can spoil?",
    a: "No. Kashi Prasad adheres to a strict shipping guideline: we never include fresh fruits, bananas, milk, curd, honey, fresh flowers, mango leaves, or fresh coconuts. All contents are non-perishable (such as dry whole coconut, vacuum-sealed cardamom, cloves, mishri, and pure metal vessels) and are guaranteed to arrive in perfect condition."
  },
  {
    q: "What is the difference between the Basic, Standard, and Premium variants?",
    a: "The Basic kit contains all the essential samagri and photos for the ritual, using steel/clay vessels. The Standard kit adds premium brass vessels, a pooja thali, an aasan, extra samagri quantities, and organizer pouches. The Premium kit is our luxury offering, featuring a larger brass Kalash and Diya, a sacred conch (Shankh), copper vessels, pure saffron (Kesar), natural fragrance oil (Ittar), and a reusable wooden storage box."
  },
  {
    q: "Can I store the remaining items for future Pujas?",
    a: "Absolutely. Items like the brass/copper vessels, Shankh, bells, wooden box, and book will last a lifetime. The organic herbs, dhoop, camphor, and dry materials are sealed in air-tight pouches and have a shelf life of up to 12 months."
  },
  {
    q: "How fast is the shipping from Kashi?",
    a: "We package and dispatch your kit from Varanasi within 24 hours of confirmation. Delivery takes 3–5 business days across India. Tracking information is shared immediately on WhatsApp."
  }
];

const grihaPraveshFaqs: FAQItem[] = [
  {
    q: "Does the Griha Pravesh Kit include Havan Samagri?",
    a: "Yes. All variants of the Griha Pravesh Kit include dry Havan Samidha wood, 250g of premium Havan Samagri, camphor, and a custom wooden havan spoon, providing everything required for the housewarming fire ritual."
  },
  {
    q: "Is the Vastu Yantra included and authentic?",
    a: "Yes. The Standard kit includes an energized brass-plated Vastu Yantra, and the Premium kit upgrades this to a heavy premium copper-etched Vastu Yantra alongside a copper Swastik. Both are energized in Varanasi temples by priests."
  },
  {
    q: "Are perishable leaves or fresh coconut included?",
    a: "No. Under Kashi Prasad's shipping policy, we never include perishable fresh items like mango leaves, betel leaves, fresh coconuts, fresh flowers, or dairy. Instead, we provide dried whole coconut, organic turmeric, and dry ingredients, which have long shelf lives and won't spoil during transit."
  },
  {
    q: "How do I use the Swastik stickers and Raksha thread?",
    a: "The Swastik stickers are designed for the main entrance of your new home to attract positive energy. The Vastu Raksha thread is tied around the main door frame or kalash to protect the threshold from negative vibrations. Detailed steps are printed on our included Instruction Card."
  }
];

const rudrabhishekFaqs: FAQItem[] = [
  {
    q: "Does this kit include Panchamrit ingredients?",
    a: "No. Adhering to Kashi Prasad's strict e-commerce shipping policy, we never include perishable materials like fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide premium dry offerings, organic chandan, and sealed holy water, which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "What kind of Rudraksha is included in the kits?",
    a: "The Basic kit contains an authentic Varanasi-energized Rudraksha bead. The Standard kit includes a hand-knotted Rudraksha Japa Mala (108 beads). The Premium kit features a large, selected Nepal Panchmukhi Rudraksha bead along with a premium hand-knotted Rudraksha Japa Mala for daily meditation."
  },
  {
    q: "How is the Ganges water collected and stored?",
    a: "The Gangajal is collected mid-stream from the Ganges in Varanasi during the early morning hours to guarantee the highest spiritual vibrations. It is stored in food-grade, leak-proof sealed containers to retain its purity during transit."
  },
  {
    q: "Is there a Shiva Yantra included?",
    a: "Yes. The Standard kit includes an energized brass-plated Shiva Yantra. The Premium kit features a heavy copper-etched Shiva Yantra that represents the absolute geometry of cosmic energies for home altars."
  }
];

const lakshmiFaqs: FAQItem[] = [
  {
    q: "Are the Gomti Chakras and Cowrie shells real?",
    a: "Yes. Every single Gomti Chakra and white Cowrie shell in our Lakshmi Pooja Kit is naturally sourced, selected for structural integrity, and energized in Kashi under temple priest guidance to invite wealth and positive energy."
  },
  {
    q: "Does this kit contain Panchamrit or fresh milk products?",
    a: "No. Kashi Prasad guarantees 100% non-perishable samagri. We strictly exclude perishables like fresh flowers, mango leaves, betel leaves, milk, curd, or fresh coconuts. In their place, we provide mature dry whole coconuts, premium vacuum-packed dry fruits, organic camphor, and sweet offerings which have long shelf lives."
  },
  {
    q: "What is the difference between standard and premium Yantras?",
    a: "The Standard kit includes brass-plated Lakshmi and Kuber Yantras. The Premium kit upgrades these to heavy premium copper-etched Lakshmi and Kuber Yantras, which are mathematically accurate geometric plates energized at Varanasi temples for long-term home altar use."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic kit contains 11 clay diyas (auspicious for invoking wealth). The Standard kit includes 2 brass diyas and 11 clay diyas. The Premium kit offers the ultimate set: 2 large brass diyas and 21 clay diyas to illuminate your entire house threshold."
  }
];

const navgrahaFaqs: FAQItem[] = [
  {
    q: "What is Navdhanya and why is it included?",
    a: "Navdhanya represents the nine grains associated with the nine planetary deities (Navgrahas). Sourced from fertile plains around Varanasi, they are offered during the puja to appease cosmic influences and balance astrological transits in your chart."
  },
  {
    q: "Are the Yantras included in this kit authentic?",
    a: "Yes. The Standard kit includes an energized brass-plated Navgraha Yantra, and the Premium kit upgrades this to a premium heavy copper-etched Navgraha Yantra. Both are ritually purified and energized in Varanasi temples by Vedic scholars."
  },
  {
    q: "Does this kit contain any fresh leaves or perishable foods?",
    a: "No. Under Kashi Prasad's shipping guidelines, we never ship perishable items like fresh banana leaves, mango leaves, fresh flowers, milk, or curd. We provide dried whole coconut, organic herbs, vacuum-sealed grains, and natural sweet offerings that are guaranteed to stay fresh for months."
  },
  {
    q: "How many diyas are included in the Navgraha variants?",
    a: "The Basic kit includes 9 clay diyas (one for each planetary deity). The Standard kit adds 1 brass diya and 9 clay diyas. The Premium kit features a large brass diya along with 18 clay diyas to perform full planetary alignment aarti."
  }
];

const havanFaqs: FAQItem[] = [
  {
    q: "What herbs are included in the Havan Samagri?",
    a: "Our Havan Samagri is a premium blend of 51 traditional Vedic herbs, including dry rose petals, sandalwood flakes, guggal, loban, camphor, gaur, musk root (jatamansi), and natural sweet offerings. Sourced around Varanasi, it produces a highly purifying smoke."
  },
  {
    q: "Are the cow dung cakes and wood sticks dry and ready to burn?",
    a: "Yes. All cow dung cakes and mango wood (Samidha) sticks are sun-dried and moisture-controlled before being vacuum-sealed in Varanasi, ensuring they ignite easily and burn cleanly with minimum smoke."
  },
  {
    q: "Is cow ghee included in the kits?",
    a: "Our Standard and Premium kits include pure cow ghee prepared traditionally. The Basic kit does not include liquid ghee due to basic container limits, but does include solid dry ingredients, mixing sticks, and spoon."
  },
  {
    q: "Does this kit contain Havan Kund?",
    a: "No. This kit contains the complete set of samagri, wood, dung cakes, spoon, and vessels. Havan Kund is not included in the basic/standard/premium list of items. We recommend using a standard copper Havan Kund or clay altar base."
  }
];

const ganeshFaqs: FAQItem[] = [
  {
    q: "Does this kit contain modaks or fresh sweets?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk sweets like modak or peda. Instead, we provide sealed high-quality dry sweets (batasha and mishri) and dry fruits (panchmewa) in airtight packages which represent the sweet offerings for Ganesha and have long shelf lives."
  },
  {
    q: "What is the Durva Grass Symbolic Card?",
    a: "Durva grass is highly sacred to Lord Ganesha but dries out and decays quickly during transit. To ensure your ritual is complete without sending rotten organic waste, we include a beautifully printed, priest-energized Durva Grass Symbolic Card representing this sacred green herb on your altar."
  },
  {
    q: "What is the difference between standard and premium Ganesh Yantras?",
    a: "The Standard kit contains a brass-plated Ganesh Yantra. The Premium kit features a heavy copper-etched Ganesh Yantra. Both are mathematically aligned geometric plates energized in Kashi temples to clear obstacles and bring intellect."
  },
  {
    q: "Are the clay diyas and wicks sufficient for a complete Chaturthi Pooja?",
    a: "Yes. The Basic kit contains 11 clay diyas. The Standard kit adds 1 brass diya and 11 clay diyas. The Premium kit includes a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for multi-day Ganesh Chaturthi prayers."
  }
];

const durgaFaqs: FAQItem[] = [
  {
    q: "Is a Red Chunari included in the Durga Pooja Kit?",
    a: "Yes. The Basic kit includes a high-quality red Chunari with simple golden borders to drape over Maa Durga's photo. The Standard and Premium kits upgrade this to a premium luxury Red Chunari decorated with elaborate gold zari and hand-embroidered lace borders."
  },
  {
    q: "Are the Yantras included in this kit authentic?",
    a: "Yes. The Standard kit includes an energized brass-plated Durga Yantra, and the Premium kit upgrades this to a premium copper-etched Durga Yantra. Both are ritually purified and energized in Varanasi temples by priests."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Navratri prayers."
  }
];

const mahamrityunjayaFaqs: FAQItem[] = [
  {
    q: "What Rudraksha items are included in this kit?",
    a: "The Basic kit includes an authentic, Varanasi-energized Rudraksha bead. The Standard kit includes a hand-knotted Rudraksha Japa Mala (108 beads). The Premium kit upgrades this to a premium hand-knotted Rudraksha Japa Mala alongside a large, selected Nepal Panchmukhi Rudraksha bead for altar worship."
  },
  {
    q: "Are the Yantras included energized?",
    a: "Yes. The Standard kit features an energized brass-plated Mahamrityunjaya Yantra, and the Premium kit upgrades this to a premium copper-etched Mahamrityunjaya Yantra. Both are purified and energized in Varanasi temples by priests."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Shiva prayers."
  }
];

const sundarkandFaqs: FAQItem[] = [
  {
    q: "Is orange Sindoor included for Hanuman worship?",
    a: "Yes. Basic, Standard, and Premium kits all include pure Hanuman Sindoor (20g) to perform chola offerings to the Bajrangbali photo."
  },
  {
    q: "Are the Hanuman Yantras included energized?",
    a: "Yes. The Standard kit features an energized brass-plated Hanuman Yantra, and the Premium kit upgrades this to a premium copper-etched Hanuman Yantra. Both are purified and energized in Hanuman temples in Varanasi by priests."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Hanuman prayers."
  }
];

const hanumanFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Hanuman Yantras?",
    a: "The Standard kit features an energized brass-plated Hanuman Yantra, and the Premium kit upgrades this to a premium copper-etched Hanuman Yantra. Both are purified and energized in Sankat Mochan and other Hanuman temples in Varanasi by priests."
  },
  {
    q: "Is orange Sindoor included for Hanuman worship?",
    a: "Yes. Basic, Standard, and Premium kits all include pure Hanuman Sindoor (20g) to perform chola offerings to the Bajrangbali photo."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Hanuman prayers."
  }
];

const vishnuFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Vishnu Yantras?",
    a: "The Standard kit features an energized brass-plated Vishnu Yantra, and the Premium kit upgrades this to a premium copper-etched Vishnu Yantra. Both are purified and energized in Vishnu temples in Varanasi by priests."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Vishnu prayers."
  }
];

const saraswatiFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Saraswati Yantras?",
    a: "The Standard kit features an energized brass-plated Saraswati Yantra, and the Premium kit upgrades this to a premium copper-etched Saraswati Yantra. Both are purified and energized in Saraswati temples in Varanasi by priests to bring intellect and wisdom."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Saraswati prayers."
  }
];

const shaniFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Shani Yantras?",
    a: "The Standard kit features an energized brass-plated Shani Yantra, and the Premium kit upgrades this to a premium copper-etched Shani Yantra. Both are purified and energized in Shani Dev temples in Varanasi by priests to invoke protection and ward off malefic planetary effects."
  },
  {
    q: "Does this kit contain mustard oil or sesame oil?",
    a: "No. In accordance with Kashi Prasad's non-perishable and leakage-free e-commerce guidelines, we do not ship mustard oil, sesame oil, fresh flowers, or fresh leaves. Instead, we provide black sesame seeds (kala til), dry coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Shani Dev prayers."
  }
];

const suryaFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Surya Yantras?",
    a: "The Standard kit features an energized brass-plated Surya Yantra, and the Premium kit upgrades this to a premium copper-etched Surya Yantra. Both are purified and energized in Surya temples in Varanasi by priests to bring health, vitality, and career success."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Surya Dev prayers."
  }
];

const saiFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Sai Baba Yantras?",
    a: "The Standard kit features an energized brass-plated Sai Baba Yantra, and the Premium kit upgrades this to a premium copper-etched Sai Baba Yantra. Both are purified and energized in Sai Baba temples in Varanasi by priests to bring peace, devotion, and healing."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Sai Baba prayers."
  }
];

const kaliFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Kali Yantras?",
    a: "The Standard kit features an energized brass-plated Kali Yantra, and the Premium kit upgrades this to a premium copper-etched Kali Yantra. Both are purified and energized in Kali temples in Varanasi by priests to bring protection, courage, and spiritual strength."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Maa Kali prayers."
  }
];

const vishwakarmaFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Vishwakarma Yantras?",
    a: "The Standard kit features an energized brass-plated Vishwakarma Yantra, and the Premium kit upgrades this to a premium copper-etched Vishwakarma Yantra. Both are purified and energized in Vishwakarma temples in Varanasi by priests to bring architectural skill, machine/tool prosperity, and workshop success."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Lord Vishwakarma prayers."
  }
];

const vehicleFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Vehicle Protection Yantras?",
    a: "The Standard kit features an energized brass-plated Vehicle Protection Yantra, and the Premium kit upgrades this to a premium copper-etched Vehicle Protection Yantra. Both are purified and energized in Ganesha temples in Varanasi by priests to bring safety, protection, and smooth travels."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 6 clay diyas (custom sized for quick automobile blessings). The Premium kit features a large brass diya alongside 12 clay diyas and 175 cotton wicks, providing abundant light for Lord Ganesha prayers."
  }
];

const officeFaqs: FAQItem[] = [
  {
    q: "What is the difference between standard and premium Lakshmi & Ganesh Yantras?",
    a: "The Standard kit features energized brass-plated Lakshmi & Ganesh Yantras, and the Premium kit upgrades both to premium copper-etched Lakshmi & Ganesh Yantras. These are purified and energized in Ganesha & Lakshmi temples in Varanasi by priests to bring wealth, fortune, business growth, and removal of obstacles."
  },
  {
    q: "Does this kit contain Panchamrit ingredients?",
    a: "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
  },
  {
    q: "How many clay diyas are included in the variants?",
    a: "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for your auspicious office inauguration prayers."
  }
];

const initialProducts: Product[] = [
  {
    slug: "satyanarayan-pooja-kit",
    title: "Satyanarayan Pooja Kit",
    tagline: "Complete Vedic Katha Samagri Set",
    category: "Pooja Kits",
    tags: ["Satyanarayan Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Sacred Puja Samagri", "Home Pooja Kit", "Spiritual Gift"],
    seoTitle: "Satyanarayan Pooja Kit Sourced from Varanasi | Kashi Prasad",
    metaDescription: "Perform Sri Satyanarayan Vrat Katha with our authentic, premium Pooja Kit. Curated under priest supervision in Kashi, featuring 100% non-perishable materials. Free COD.",
    rating: 4.9,
    reviewsCount: 342,
    images: [
      { src: "/images/satyanarayan_pooja_kit.png", alt: "Satyanarayan Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sealed Gangajal and Sacred Prasad details" }
    ],
    badge: "Most Popular",
    shortDescription: "A premium, hand-curated collection of authentic, non-perishable ritual items sourced directly from Kashi. Designed to invite harmony, prosperity, and Lord Satyanarayan's divine blessings into your home.",
    longDescription: [
      "Perform your auspicious Sri Satyanarayan Vrat Katha with absolute peace of mind and complete ritual purity. The Kashi Prasad Satyanarayan Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from the spiritual heart of India, Varanasi. Curated under the expert supervision of veteran Kashi temple priests, this kit preserves the ancient Vedic traditions, making it easy for you to invite harmony, abundance, and the blessings of Lord Satyanarayan into your home.",
      "At Kashi Prasad, we understand the sanctity of your home altar. That is why we guarantee a 100% non-perishable samagri set. We strictly exclude any elements that can spoil during shipping, such as fresh fruits, bananas, fresh flowers, or leaves. Instead, we provide dried whole coconut, vacuum-sealed cardamom, cloves, mishri, and top-tier dry fruits. This ensures that every item arrives fresh, pure, and ready for your ritual, regardless of transit time.",
      "Each variant is crafted to cater to your specific congregation size. Whether it's the Basic kit for a quiet family ritual, the Standard kit with upgraded brass vessels and custom organization pouches, or the Premium collection that includes a sacred blowing conch (Shankh), copper lota, natural fragrance oil (Ittar), and a beautiful reusable wooden storage box, Kashi Prasad guarantees absolute devotion and excellence in every package."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1899,
        originalPrice: 3799,
        badge: "Essential Devotion",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable samagri, sacred photos, and Katha book needed for a simple and authentic family Satyanarayan Pooja.",
        keyIncludes: [
          "Core deities photos & Katha book",
          "Traditional roli, haldi & kumkum",
          "Akshat rice (100g) & premium dry coconut",
          "Janeu, Mauli thread & Supari (11 pcs)",
          "Gangajal (100ml) & sweet batasha/mishri offerings",
          "Steel Kalash, clay diyas & essential pooja cloths"
        ],
        detailedItems: [
          // Murtis, Photos & Books (3)
          { name: "Shri Satyanarayan Bhagwan Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shri Ganesh Ji Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Satyanarayan Vrat Katha Book", quantity: "×1", category: "Murtis, Photos & Books" },
          // Sacred Ingredients & Herbs (10)
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          // Ritual Cloths & Aasans (4)
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          // Sacred Metalware & Vessels (2)
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          // Aroma & Lamps (5)
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×4", category: "Aroma & Lamps" },
          // Packaging & Organization (2)
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2999,
        originalPrice: 5999,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Upgrades your experience with high-quality brass vessels, steel pooja thali, additional samagri, and zip pouches for perfect layout organization.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya",
          "Steel Pooja Thali, Bowls & Bell",
          "Pooja Aasan & organic cotton wicks (75 pcs)",
          "Instruction card & zip organizers",
          "Premium gift-box packaging"
        ],
        detailedItems: [
          // Murtis, Photos & Books (4)
          { name: "Shri Satyanarayan Bhagwan Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shri Ganesh Ji Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Satyanarayan Vrat Katha Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Satyanarayan Katha Book", quantity: "×1", category: "Murtis, Photos & Books" },
          // Sacred Ingredients & Herbs (12)
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          // Ritual Cloths & Aasans (5)
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          // Sacred Metalware & Vessels (8)
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          // Aroma & Lamps (5)
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×4", category: "Aroma & Lamps" },
          // Packaging & Organization (12)
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box Packaging", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4899,
        originalPrice: 9799,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate spiritual collection. Features double the quantity of key offerings, premium brassware, conch shankh, copper vessels, natural Kesar, organic Pooja Ittar, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya",
          "Authentic blowing Shankh (Conch)",
          "Copper Lota & Copper Spoon",
          "Pure Kesar (2g) & luxurious Pooja Ittar",
          "Premium wooden storage box & checklist card"
        ],
        detailedItems: [
          // Murtis, Photos & Books (4)
          { name: "Shri Satyanarayan Bhagwan Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shri Ganesh Ji Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Satyanarayan Vrat Katha Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Satyanarayan Katha Book", quantity: "×1", category: "Murtis, Photos & Books" },
          // Sacred Ingredients & Herbs (15)
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Pooja Ittar (Perfume)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          // Ritual Cloths & Aasans (7)
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          // Sacred Metalware & Vessels (14)
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Vedic Dakshinavarti Shankh (Conch)", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          // Aroma & Lamps (6)
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×14", category: "Aroma & Lamps" },
          // Packaging & Organization (9)
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Pooja Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Material Purity",
        specs: [
          { label: "Brass Vessels", value: "Grade-A Solid Cast Brass, polished" },
          { label: "Copper Vessels", value: "99.2% Pure Copper lota & spoon" },
          { label: "Altar Cloths", value: "Premium soft silk with gilded gold borders" },
          { label: "Puja Samagri Herbs", value: "100% Organic, additive-free local roots" }
        ]
      },
      {
        groupName: "Origin & Longevity",
        specs: [
          { label: "Origin Region", value: "Directly compiled & ritually blessed in Varanasi" },
          { label: "Non-Perishable Promise", value: "100% guaranteed free of fresh fruits/flowers/dairy" },
          { label: "Shelf Life", value: "12 Months (camphor, incense, herbs) / Lifetime (metals)" },
          { label: "Weight", value: "Basic: ~1.2kg | Standard: ~2.4kg | Premium: ~4.1kg" }
        ]
      }
    ],
    faqs: satyanarayanFaqs,
    shippingTitle: "Directly Dispatched From Holy Dashashwamedh, Varanasi",
    shippingText: "We handle your sacred consignment with pure devotion. Once you place the order, the items are gathered, checked for structural integrity, packed securely in multi-layered bubble wrap, and dispatched via our premium courier partners. Cash on Delivery is 100% free with zero hidden handling charges."
  },
  {
    slug: "kashi-divine-puja-kit",
    title: "Kashi Divine Puja Kit",
    tagline: "Sacred Altar Souvenirs of Varanasi",
    category: "Pooja Kits",
    tags: ["Kashi Puja Kit", "Varanasi Sourced", "Kashi Vishwanath Prasad", "Rudraksha Mala", "Chandan Mala", "Spiritual Kit"],
    seoTitle: "Kashi Divine Puja Kit | Varanasi Blessings in a Box",
    metaDescription: "Bring Varanasi to your home altar. The Kashi Divine Puja Kit features Nepal Rudraksha, sandalwood scented malas, Kaal Bhairav Raksha threads, and authentic Ganges water.",
    rating: 4.9,
    reviewsCount: 1248,
    images: [
      { src: "/images/hero_puja_kit.png", alt: "Kashi Divine Puja Kit Luxurious Gift Box" },
      { src: "/images/puja_kit_packaging.png", alt: "Embroidery Detail Altar Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sanctified Prasad Sweet Box Details" }
    ],
    badge: "Signature Kit",
    shortDescription: "Bring the direct blessings of Kashi Vishwanath and Mahadev to your home. Curated under priestly guidance and packed inside a beautiful custom wood-embossed box.",
    longDescription: [
      "Transform your daily spiritual practice and bring the sanctified vibrations of holy Varanasi to your altar. Hand-compiled and blessed under temple priest supervision, the Kashi Divine Puja Kit brings Mahadev's direct blessings into your household.",
      "This collection contains 10 highly sacred items sourced directly from Kashi and Prayagraj. Sourced early morning during the sacred Aarti, this kit brings purity, harmony, and protection against negative forces. Packaged inside a luxury wood-embossed container to keep the items secure and clean."
    ],
    variants: [
      {
        id: "standard",
        name: "Standard Kit",
        price: 1499,
        originalPrice: 2999,
        badge: "Complete Sacred Box",
        suitableFor: "Family Altar",
        description: "The complete collection of 10 holy objects sourced from Kashi and Prayagraj.",
        keyIncludes: [
          "Nepal Panchmukhi Rudraksha Mala (108+1)",
          "2 Scented Sandalwood Chandan Malas",
          "Sanctified Kashi Vishwanath Temple Prasad",
          "Kaal Bhairav Prasad & Raksha Sutra",
          "Ebony Wood Karungali Mala for concentration",
          "Mid-stream holy Ganga water (Gangajal)",
          "Prayagraj Sangam water & blowing conch Shankh",
          "Embroidered silk Chunri & organic Puja Gamcha"
        ],
        detailedItems: [
          { name: "Nepal Panchmukhi Rudraksha Mala (108+1 beads)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Scented Sandalwood Chandan Malas", quantity: "×2", category: "Aroma & Lamps" },
          { name: "Sanctified Kashi Vishwanath Temple Prasad Box", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Kaal Bhairav Prasad & Raksha Sutra (Black Thread)", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Ebony Wood Karungali Mala (Highly Energized)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sealed Ganga Water from Mid-Stream Collection", quantity: "1 Container", category: "Sacred Metalware & Vessels" },
          { name: "Triveni Sangam Gangajal (Prayagraj Confluence)", quantity: "1 Container", category: "Sacred Metalware & Vessels" },
          { name: "Vedic Dakshinavarti Shankh (Blowing Conch Shell)", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Embroidered Silk Chunri (Gilded Zari Border)", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pure Cotton Puja Gamcha (Organic Saffron dye)", quantity: "×1", category: "Ritual Cloths & Aasans" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Bead & Thread Quality",
        specs: [
          { label: "Rudraksha Seeds", value: "Authentic Panchmukhi seeds from Nepal (uniform grooves)" },
          { label: "Sandalwood Malas", value: "Premium scented wood beads hand-knotted" },
          { label: "Ebony Wood Mala", value: "Genuine dense black Karungali core wood" }
        ]
      },
      {
        groupName: "Water & Food Standards",
        specs: [
          { label: "Ganges Sourcing", value: "Collected from mid-river Ganga (high velocity purity)" },
          { label: "Prasad Sweetness", value: "Prepared in traditional pure ghee by temple chefs" },
          { label: "Conch Purity", value: "Naturally harvested marine conch checked for acoustic resonance" }
        ]
      }
    ],
    faqs: [
      {
        q: "How are the items energized?",
        a: "Every Puja Kit undergoes a purification ritual in Varanasi under the guidance of Sanskrit scholars and temple priests before dispatch, charging them with high-vibration chants."
      },
      {
        q: "What is the shelf life of the Temple Prasad?",
        a: "The Kashi Vishwanath Saffron Prasad Peda/dry fruit laddoos are sterile-packed in airtight food-grade copper containers, giving them a shelf life of up to 45 days without refrigeration."
      }
    ],
    shippingTitle: "Sanctified Shipping Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "griha-pravesh-pooja-kit",
    title: "Griha Pravesh Pooja Kit",
    tagline: "Complete Housewarming Ceremony Samagri",
    category: "Pooja Kits",
    tags: ["Griha Pravesh", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Housewarming Ceremony", "Vastu Shanti"],
    seoTitle: "Griha Pravesh Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform your Griha Pravesh and Vastu Shanti Puja with our premium, priest-blessed Pooja Kit. Direct from Varanasi, 100% non-perishable materials. Free COD.",
    rating: 4.9,
    reviewsCount: 287,
    images: [
      { src: "/images/griha_pravesh_pooja_kit.png", alt: "Griha Pravesh Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sealed Gangajal and Sacred Prasad details" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium, complete collection of sacred, non-perishable samagri and vessels sourced from Varanasi. Ideal for Griha Pravesh, Vastu Shanti, and new home entry blessings.",
    longDescription: [
      "Enter your new home with abundance, harmony, and peace. The Kashi Prasad Griha Pravesh Pooja Kit is a luxurious, comprehensively curated set of authentic ritual materials compiled under the guidance of Varanasi temple priests. Designed to clean and sanctify your home threshold, it ensures your housewarming and Vastu Shanti ceremonies are performed in strict accordance with Vedic protocols.",
      "Adhering to our strict non-perishable shipping policy, this kit is guaranteed 100% free of perishables like fresh mango leaves, fresh flowers, or fresh coconuts. We replace fresh coconuts with mature dry whole coconuts and include sealed dry samagri packs, enabling long shelf lives and pristine delivery to your door.",
      "Choose from our three premium variants. The Basic kit contains all essential samagri, havan wood, and instruction manuals. The Standard kit adds brass vessels, a pooja thali, a bell, vastu stickers, and a brass-plated Vastu Yantra. The Premium kit offers the ultimate altar collection with heavy copper lota/spoon, conch Shankh, pure Kesar, and a reusable wooden pooja box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 2199,
        originalPrice: 4399,
        badge: "Essential Entry",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable samagri, havan wood, Vastu thread, and katha guide books for a quiet family Griha Pravesh ceremony.",
        keyIncludes: [
          "Shri Ganesh Ji photo & Pooja Vidhi book",
          "Havan Samagri (250g), samidha wood & wooden spoon",
          "Navdhanya grain pack (9 grains) & Vastu Raksha thread",
          "Supari (11 pcs), Mauli threads & Janeu threads",
          "Steel Kalash, clay diyas & essential pooja cloths",
          "Camphor (50g), incense sticks & dhoop cones"
        ],
        detailedItems: [
          { name: "Shri Ganesh Ji Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Griha Pravesh Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Navdhanya Pack (Nine Grains)", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Vastu Raksha Thread", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samidha Wood", quantity: "1 Pack", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samagri Pack", quantity: "250g", category: "Sacred Ingredients & Herbs" },
          { name: "Wooden Havan Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 3299,
        originalPrice: 6599,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Upgrades your experience with high-quality brass vessels, steel pooja thali, Vastu Yantra, Swastik stickers, and custom organization pouches.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya",
          "Steel Pooja Thali, Bowls & Bell",
          "Vastu Yantra, Swastik stickers & Shubh Labh set",
          "Pooja Aasan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Shri Ganesh Ji Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Griha Pravesh Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Navdhanya Pack (Nine Grains)", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Vastu Raksha Thread", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samidha Wood", quantity: "1 Pack", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samagri Pack", quantity: "250g", category: "Sacred Ingredients & Herbs" },
          { name: "Wooden Havan Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Vastu Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Swastik Stickers", quantity: "×2", category: "Packaging & Organization" },
          { name: "Shubh Labh Sticker Set", quantity: "×1", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 5299,
        originalPrice: 10599,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Vastu Shanti collection. Contains large brass vessels, conch Shankh, copper lota/spoon, natural Kesar, pure Pooja Ittar, copper Swastik plate, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya",
          "Authentic blowing Shankh (Conch)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium copper-etched Vastu Yantra & Copper Swastik",
          "Kesar (2g), Pooja Ittar & wooden box"
        ],
        detailedItems: [
          { name: "Shri Ganesh Ji Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Griha Pravesh Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Navdhanya Pack (Nine Grains)", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Vastu Raksha Thread", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Vedic Dakshinavarti Shankh (Conch)", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×16", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samidha Wood", quantity: "1 Pack", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samagri Pack", quantity: "250g", category: "Sacred Ingredients & Herbs" },
          { name: "Wooden Havan Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Vastu Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Copper Swastik", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Swastik Stickers", quantity: "×2", category: "Packaging & Organization" },
          { name: "Shubh Labh Sticker Set", quantity: "×1", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Vastu & Metal Purity",
        specs: [
          { label: "Yantra Metal", value: "Premium etched Copper Swastik & Vastu plate" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & diya" },
          { label: "Havan Utensils", value: "Eco-friendly natural Neem wood spoon" },
          { label: "Altar Cloths", value: "Aura silk with hand-woven zari embroidery" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priestly oversight" },
          { label: "Sourcing Assurance", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/dairy/perishables" },
          { label: "Net Weight", value: "Basic: ~1.5kg | Standard: ~2.9kg | Premium: ~4.8kg" }
        ]
      }
    ],
    faqs: grihaPraveshFaqs,
    shippingTitle: "Sacred Threshold Delivery Sourced from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "rudrabhishek-pooja-kit",
    title: "Rudrabhishek Pooja Kit",
    tagline: "Sacred Vedic Shiva Abhishekam Samagri",
    category: "Pooja Kits",
    tags: ["Rudrabhishek", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Shiva Puja", "Mahadev Blessings"],
    seoTitle: "Rudrabhishek Pooja Kit Sourced from Varanasi | Kashi Prasad",
    metaDescription: "Perform authentic Shiva Rudrabhishek at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri and brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 412,
    images: [
      { src: "/images/rudrabhishek_pooja_kit.png", alt: "Rudrabhishek Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Shiva Abhishekam items sourced from Varanasi. Blessed under priest supervision, ideal for daily or Shravan prayers.",
    longDescription: [
      "Bring the supreme blessings of Mahadev into your household. The Kashi Prasad Rudrabhishek Pooja Kit is a luxurious, hand-compiled collection of authentic Shiva Abhishekam materials sourced directly from the holy ghats of Varanasi. Curated under the strict supervision of veteran Kashi temple priests, this kit ensures your daily prayers, Shravan Mondays, or major family Rudrabhishek rituals are performed with absolute scriptural correctness.",
      "In line with our strict non-perishable e-commerce shipping guidelines, this kit is guaranteed 100% free of perishables like fresh flowers, banana leaves, milk, curd, or fresh coconut. We replace fresh items with durable dry whole coconuts, natural chandan powder, organic dhoop, and premium camphor. All food-grade sweets (like batasha and mishri) are sealed in air-tight pouches to ensure long shelf lives.",
      "Available in three tailored configurations. The Basic kit contains all essential herbs, Gangajal, photos, and guide books. The Standard kit adds brass vessels, a pooja thali, Bhasma (vibhuti), and a Rudraksha Japa Mala. The Premium kit features a large Nepal Panchmukhi Rudraksha, copper lota/spoon, heavy brassware, pure Kesar, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1999,
        originalPrice: 3999,
        badge: "Essential Devotion",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable abhishekam samagri, guide books, Gangajal, a symbolic Bel Patra card, and an energized Rudraksha bead.",
        keyIncludes: [
          "Lord Shiva & Ganesh photos & Pooja Vidhi book",
          "Varanasi-blessed Rudraksha bead & symbolic Bel Patra card",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas & essential pooja cloths",
          "Havan Samagri (250g), Mauli thread & Janeu wicks"
        ],
        detailedItems: [
          { name: "Lord Shiva Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesh Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Rudrabhishek Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Bel Patra Symbolic Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Authentic Rudraksha Bead", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samagri", quantity: "250g", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2999,
        originalPrice: 5999,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass altar vessels, steel pooja thali, a sacred Rudraksha Japa Mala, Shiva Yantra, Shiva tilak pack, and vibhuti bhasma.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya",
          "Steel Pooja Thali, Bowls & Bell",
          "Rudraksha Japa Mala (108 beads) & Shiva Yantra",
          "Bhasma Vibhuti (20g) & Shiva Tilak pack",
          "Pooja Aasan, Red Pouch, organization bags & Gift Box"
        ],
        detailedItems: [
          { name: "Lord Shiva Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesh Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Rudrabhishek Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Bel Patra Symbolic Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shiva Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Rudraksha Japa Mala (108 beads)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Bhasma / Vibhuti (Sacred Ash)", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Shiva Tilak Pack", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samagri", quantity: "250g", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4999,
        originalPrice: 9999,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Shiva Abhishekam collection. Features heavy copper lota/spoon, premium brassware, conch Shankh, copper Shiva Yantra, natural Kesar, pure Pooja Ittar, a large Nepal Panchmukhi Rudraksha, and a reusable wooden pooja box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya",
          "Authentic blowing Shankh (Conch)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium copper-etched Shiva Yantra",
          "Nepal Panchmukhi Rudraksha & premium Japa Mala",
          "Kesar (2g), Pooja Ittar & wooden storage box"
        ],
        detailedItems: [
          { name: "Lord Shiva Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesh Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Rudrabhishek Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Bel Patra Symbolic Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Shiva Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Large Nepal Panchmukhi Rudraksha", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Rudraksha Japa Mala (108 beads)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Bhasma / Vibhuti (Sacred Ash)", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Shiva Tilak Pack", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Havan Samagri", quantity: "250g", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Vedic Dakshinavarti Shankh (Conch)", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×16", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Shiva Ritual & Metal Purity",
        specs: [
          { label: "Rudraksha Authenticity", value: "Genuine Nepal Panchmukhi Rudraksha bead & Japa Mala" },
          { label: "Ash Purity", value: "Pure organic Bhasma Vibhuti blessed at Varanasi" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & abhishekam diya" },
          { label: "Copper lota", value: "99.2% Pure copper lota & spoon for gangajal" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Directly compiled & ritually blessed in Kashi/Varanasi" },
          { label: "Non-Perishable Promise", value: "100% guaranteed free of fresh fruits/flowers/milk/curd" },
          { label: "Shelf Life", value: "12 Months (camphor, incense, bhasma) / Lifetime (metals/beads)" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.7kg | Premium: ~4.5kg" }
        ]
      }
    ],
    faqs: rudrabhishekFaqs,
    shippingTitle: "Divine Shiva Abhishekam Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "lakshmi-pooja-kit",
    title: "Lakshmi Pooja Kit",
    tagline: "Complete Wealth & Prosperity Altar Samagri",
    category: "Pooja Kits",
    tags: ["Lakshmi Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Diwali Puja Kit", "Wealth & Prosperity"],
    seoTitle: "Lakshmi Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Lakshmi Puja and Diwali Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 524,
    images: [
      { src: "/images/lakshmi_pooja_kit.png", alt: "Lakshmi Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Lakshmi and Kuber Puja items sourced from Varanasi. Blessed under priest supervision, ideal for Diwali, Varalakshmi, or daily altars.",
    longDescription: [
      "Invite wealth, wisdom, and auspicious vibrations into your household. The Kashi Prasad Lakshmi Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your daily prayers, Varalakshmi Vratam, or grand Diwali Laxmi-Ganesh Puja are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, natural Gomti Chakras, white Cowrie shells, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum longevity.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 Gomti Chakras, and 11 Cowrie shells. The Standard kit adds brass vessels, a pooja thali, a bell, brass-plated Lakshmi and Kuber Yantras, and 2 brass diyas. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 Gomti Chakras/Cowries, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1899,
        originalPrice: 3799,
        badge: "Essential Altar Set",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable samagri, Lakshmi/Ganesh photos, 11 Gomti Chakras, 11 Cowries, guide books, and clay diyas for basic family prayers.",
        keyIncludes: [
          "Goddess Lakshmi & Ganesh photos & Aarti Card",
          "Lakshmi Pooja Vidhi Book & Gangajal (100ml)",
          "Gomti Chakras (11 pcs) & Cowrie Shells (11 pcs)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Gomti Chakras", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cowrie Shells", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2999,
        originalPrice: 5999,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass-plated Lakshmi and Kuber Yantras, 2 brass diyas, bell, aasan, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diyas (×2)",
          "Steel Pooja Thali, Bowls & Bell",
          "Lakshmi Yantra & Kuber Yantra (Brass-plated)",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kuber Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Gomti Chakras", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cowrie Shells", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4899,
        originalPrice: 9799,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate abundance collection. Features heavy copper lota/spoon, premium brassware, copper-etched Lakshmi and Kuber Yantras, pure Kesar, natural Pooja Ittar, 21 Gomti Chakras/Cowries, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diyas (×2)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Lakshmi Yantra & Kuber Yantra",
          "Gomti Chakras (21) & Cowrie Shells (21)",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box"
        ],
        detailedItems: [
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Lakshmi Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Kuber Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Gomti Chakras", quantity: "×21", category: "Sacred Ingredients & Herbs" },
          { name: "Cowrie Shells", quantity: "×21", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×32", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Abundance & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Lakshmi & Kuber Yantras" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & abundance diyas" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Altar Cloths", value: "Luxury soft silk with gilded gold zari embroidery" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & blessed in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: lakshmiFaqs,
    shippingTitle: "Prosperity Dispatch Sourced from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "navgraha-pooja-kit",
    title: "Navgraha Pooja Kit",
    tagline: "Complete Planetary Alignment & Peace Samagri",
    category: "Pooja Kits",
    tags: ["Navgraha Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Planetary Peace", "Grah Shanti"],
    seoTitle: "Navgraha Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Balance planetary transits with our authentic Navgraha Pooja Kit. Sourced from Varanasi under priest supervision, featuring yantras & non-perishable samagri. Free COD.",
    rating: 4.9,
    reviewsCount: 318,
    images: [
      { src: "/images/navgraha_pooja_kit.png", alt: "Navgraha Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Navgraha Shanti Puja items sourced from Varanasi. Blessed under priest supervision, ideal for planetary pacification and peace.",
    longDescription: [
      "Attain cosmic harmony and neutralize planetary afflictions. The Kashi Prasad Navgraha Pooja Kit is a luxurious, comprehensively compiled collection of authentic Vedic samagri sourced directly from holy Varanasi. Curated under the strict supervision of veteran Kashi temple priests, this kit ensures your Grah Shanti prayers, planetary pacification rituals, or astrological remedies are performed with absolute scriptural correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, or fresh coconuts. In their place, we provide mature dry whole coconuts, natural Navdhanya grains, organic herbs, pure chandan powder, and sweet batasha. All contents are sealed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Available in three custom configurations. The Basic kit contains all essential herbs, guide books, Ganga water, a Navdhanya grain pack, and 9 clay diyas. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Navgraha Yantra, and a Navgraha Raksha Thread. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 18 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1799,
        originalPrice: 3599,
        badge: "Essential Astrological Set",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable samagri, Navgraha and Ganesh photos, Navdhanya grains, guide books, and 9 clay diyas for planetary peace.",
        keyIncludes: [
          "Navgraha & Ganesh photos & Mantra Card",
          "Navgraha Pooja Vidhi Book & Gangajal (100ml)",
          "Navdhanya Grain Pack & Navgraha Symbol Card",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (9 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Navgraha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Symbol Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Navdhanya Pack", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×9", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2799,
        originalPrice: 5599,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass-plated Navgraha Yantra, 1 brass diya, bell, aasan, Navgraha Raksha Thread, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls & Bell",
          "Navgraha Yantra (Brass-plated) & Navgraha Raksha Thread",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Navgraha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Symbol Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Navdhanya Pack", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Navgraha Raksha Thread", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×9", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4699,
        originalPrice: 9399,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate cosmic pacification collection. Features heavy copper lota/spoon, premium brassware, copper-etched Navgraha Yantra, pure Kesar, natural Pooja Ittar, 18 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Navgraha Yantra",
          "Kesar (2g), Pooja Ittar, 18 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Navgraha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Navgraha Symbol Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Navgraha Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Navdhanya Pack", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Navgraha Raksha Thread", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×27", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Planetary Peace & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Navgraha Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Grains Origin", value: "Naturally harvested Navdhanya grains from Varanasi" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: navgrahaFaqs,
    shippingTitle: "Planetary Harmony Dispatch Sourced from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "havan-samagri-kit",
    title: "Havan Samagri Kit",
    tagline: "Authentic Aromatic Fire Sacrifice Samagri",
    category: "Havan Kits",
    tags: ["Havan Samagri", "Havan Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Fire Sacrifice", "Yajna Samagri"],
    seoTitle: "Havan Samagri Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic home havan/yajna with our premium Havan Samagri Kit. Sourced from Varanasi with pure non-perishable samagri, samidha wood & diyas. Free COD.",
    rating: 4.9,
    reviewsCount: 254,
    images: [
      { src: "/images/havan_samagri_kit.png", alt: "Havan Samagri Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable havan samagri, mango wood (samidha), cow dung cakes, and vessels sourced from Varanasi. Ideal for home havan and yajnas.",
    longDescription: [
      "Purify your home environment and invoke planetary peace. The Kashi Prasad Havan Samagri Kit is a luxurious, hand-compiled set of authentic fire sacrifice materials compiled under the guidance of Varanasi temple priests. Designed for home peace, griha pravesh, or daily yajnas, it ensures your fire ritual is performed with pure ingredients in strict accordance with Vedic scriptures.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, or fresh coconuts. We replace fresh ingredients with durable dry whole coconuts, natural wood wands, pure sun-dried cow dung cakes, premium vacuum-packed herbs, and sweet drops. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Available in three custom configurations. The Basic kit contains all essential herbs, guide books, Gangajal, 10 cow dung cakes, 500g havan samagri, and 6 clay diyas. The Standard kit adds brass vessels, a pooja thali, a bell, 1kg havan samagri, 20 cow dung cakes, and a brass diya. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 40 cow dung cakes, 2kg havan samagri, 12 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1499,
        originalPrice: 2999,
        badge: "Essential Fire Altar",
        suitableFor: "Small Home Havan",
        description: "Contains core non-perishable samagri, mango wood sticks, 10 dry cow dung cakes, guide books, and 6 clay diyas for a quiet home fire ritual.",
        keyIncludes: [
          "Havan Samagri (500g) & Mango Wood Sticks (1 Pack)",
          "Dry Cow Dung Cakes (10 pcs) & Havan Vidhi Book",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (6 pcs) & Red/Yellow cloths",
          "Wooden Havan Spoon, Mixing Stick & Gangajal (100ml)"
        ],
        detailedItems: [
          { name: "Havan Samagri", quantity: "500g", category: "Sacred Ingredients & Herbs" },
          { name: "Mango Wood Sticks (Samidha)", quantity: "1 Pack", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Cow Dung Cakes", quantity: "×10", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Wooden Havan Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Wooden Mixing Stick", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Havan Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Havan Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Camphor (Kapoor)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2499,
        originalPrice: 4999,
        badge: "Best Seller • Recommended",
        suitableFor: "Medium Havan",
        description: "Adds brass kalash, steel thali, brass diya, 20 dung cakes, 1kg havan samagri, bell, aasan, and custom organization pouches.",
        keyIncludes: [
          "Everything in Basic included",
          "Premium Havan Samagri (1kg) & Mango Wood (2 Packs)",
          "Dry Cow Dung Cakes (20 pcs) & Brass Kalash",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Pooja Aasan, Brass Diya (×1) & Premium Chandan",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Premium Havan Samagri", quantity: "1kg", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Samidha Wood Sticks", quantity: "2 Packs", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Cow Dung Cakes", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Wooden Havan Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Wooden Mixing Stick", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Havan Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Havan Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 3999,
        originalPrice: 7999,
        badge: "Luxury Altar Collection",
        suitableFor: "Large Havan & Yajna",
        description: "The ultimate yajna collection. Features 2kg premium samagri, 40 dung cakes, copper lota/spoon, heavy brassware, pure Kesar, natural Pooja Ittar, 12 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Premium Havan Samagri (2kg) & Mango Wood (3 Packs)",
          "Dry Cow Dung Cakes (40 pcs) & Large Brass Kalash",
          "Copper Lota & Copper Pooja Spoon",
          "Kesar (2g), Pooja Ittar, 12 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Premium Havan Samagri", quantity: "2kg", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Samidha Wood Sticks", quantity: "3 Packs", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Cow Dung Cakes", quantity: "×40", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Wooden Havan Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Wooden Mixing Stick", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Havan Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Havan Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×18", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Havan Ritual & Material Purity",
        specs: [
          { label: "Samagri Blend", value: "Premium aromatic mix of 51 traditional Vedic herbs" },
          { label: "Wood Quality", value: "Vacuum-sealed sun-dried mango wood wands (Samidha)" },
          { label: "Dung Cakes Purity", value: "100% Organic sun-dried cow dung cakes" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & compiled in Varanasi" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd" },
          { label: "Net Weight", value: "Basic: ~1.8kg | Standard: ~3.4kg | Premium: ~5.8kg" }
        ]
      }
    ],
    faqs: havanFaqs,
    shippingTitle: "Sacred Fire Sacrifice Dispatch Sourced from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "ganesh-pooja-kit",
    title: "Ganesh Pooja Kit",
    tagline: "Complete Obstacle Removal & Wisdom Samagri",
    category: "Pooja Kits",
    tags: ["Ganesh Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Ganesh Chaturthi", "Obstacle Removal"],
    seoTitle: "Ganesh Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Ganesh Puja and Ganesh Chaturthi at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 362,
    images: [
      { src: "/images/ganesh_pooja_kit.png", alt: "Ganesh Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Ganesh Puja items sourced from Varanasi. Blessed under priest supervision, ideal for Ganesh Chaturthi, home entry, or daily altar prayers.",
    longDescription: [
      "Remove all obstacles and invite wisdom, prosperity, and peace into your home. The Kashi Prasad Ganesh Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your daily prayers, Ganesh Chaturthi celebrations, or housewarming Ganesha pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, mango leaves, betel leaves, fresh milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, a priest-energized symbolic Durva Grass card, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and the symbolic Durva Grass card. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Ganesh Yantra, and a Ganesh Raksha Thread. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Obstacle Removal",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable samagri, Ganesh photo, symbolic Durva Grass card, guide books, and clay diyas for basic family prayers.",
        keyIncludes: [
          "Lord Ganesha Photo & Aarti Card",
          "Ganesh Pooja Vidhi Book & Gangajal (100ml)",
          "Durva Grass Symbolic Card & Akshat Rice (100g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durva Grass Symbolic Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass-plated Ganesh Yantra, 1 brass diya, bell, aasan, Ganesh Raksha Thread, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Ganesh Yantra (Brass-plated) & Ganesh Raksha Thread",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durva Grass Symbolic Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Ganesh Raksha Thread", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate obstacle-removal collection. Features heavy copper lota/spoon, premium brassware, copper-etched Ganesh Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Ganesh Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durva Grass Symbolic Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Ganesh Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Ganesh Raksha Thread", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Wisdom & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Ganesh Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Altar Cloths", value: "Aura silk with hand-woven zari embroidery" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: ganeshFaqs,
    shippingTitle: "Sacred Ganesha Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "durga-pooja-kit",
    title: "Durga Pooja Kit",
    tagline: "Complete Divine Mother Protection & Victory Samagri",
    category: "Pooja Kits",
    tags: ["Durga Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Navratri Puja Kit", "Divine Victory"],
    seoTitle: "Durga Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Durga Puja and Navratri Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 348,
    images: [
      { src: "/images/durga_pooja_kit.png", alt: "Durga Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Durga and Navratri Puja items sourced from Varanasi. Blessed under priest supervision, ideal for Navratri, Durga Puja, or daily altar prayers.",
    longDescription: [
      "Awaken the supreme feminine power of Maa Durga in your home. The Kashi Prasad Durga Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your daily prayers, Navratri Vratam, or grand Durga Puja are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, a red silk Chunari, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and a red Chunari. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Durga Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, a luxury hand-embroidered red Chunari, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1799,
        originalPrice: 3599,
        badge: "Essential Mother Protection",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable samagri, Maa Durga photo, red Chunari, Durga Chalisa, guide books, and clay diyas for basic Navratri prayers.",
        keyIncludes: [
          "Maa Durga & Ganesh photos & Aarti Card & Chalisa",
          "Durga Pooja Vidhi Book & Gangajal (100ml)",
          "Red Chunari & Akshat Rice (100g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Maa Durga Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Red Chunari", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2799,
        originalPrice: 5599,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, 11 clay diyas, bell, aasan, brass-plated Durga Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Durga Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Maa Durga Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Red Chunari", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Durga Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Navratri collection. Features heavy copper lota/spoon, premium brassware, copper-etched Durga Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, luxury hand-embroidered Red Chunari, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Durga Yantra",
          "Luxury Gilded Red Chunari & pure Kesar (2g)",
          "Pooja Ittar, 21 Clay Diyas, wooden box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Maa Durga Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Durga Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Red Chunari", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Premium Durga Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Victory & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Durga Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Altar Cloths", value: "Luxury Red Chunari with hand-woven zari embroidery" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: durgaFaqs,
    shippingTitle: "Sacred Durga Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "mahamrityunjaya-jaap-kit",
    title: "Mahamrityunjaya Jaap Kit",
    tagline: "Sacred Vedic Shiva Life-Force Samagri",
    category: "Pooja Kits",
    tags: ["Mahamrityunjaya Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Shiva Puja", "Health & Longevity"],
    seoTitle: "Mahamrityunjaya Jaap Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Shiva Mahamrityunjaya Jaap at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 294,
    images: [
      { src: "/images/mahamrityunjaya_jaap_kit.png", alt: "Mahamrityunjaya Jaap Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Shiva Mahamrityunjaya Jaap items sourced from Varanasi. Blessed under priest supervision, ideal for health, longevity, and peace.",
    longDescription: [
      "Awaken the ultimate life-protecting and healing vibrations of Lord Shiva in your home. The Kashi Prasad Mahamrityunjaya Jaap Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your health, longevity, and peaceful prayers are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, sweet batasha, and dry fruits. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, an energized Rudraksha bead, and sacred Bhasma. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Mahamrityunjaya Yantra, and a hand-knotted Rudraksha Japa Mala. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, a premium hand-knotted Japa Mala, a large Nepal Panchmukhi Rudraksha, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1899,
        originalPrice: 3799,
        badge: "Essential Shiva Life-Force",
        suitableFor: "2–4 People",
        description: "Contains all core non-perishable samagri, Lord Shiva photo, Mahamrityunjaya mantra card, guide books, clay diyas, and Bhasma for basic prayers.",
        keyIncludes: [
          "Lord Shiva & Ganesh photos & Aarti Card",
          "Mahamrityunjaya Jaap Vidhi Book & Gangajal (100ml)",
          "Rudraksha Bead & Bhasma (20g) & Akshat Rice",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/White cloths"
        ],
        detailedItems: [
          { name: "Lord Shiva Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Jaap Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Rudraksha Bead", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Bhasma", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2999,
        originalPrice: 5999,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, 11 clay diyas, bell, aasan, brass-plated Mahamrityunjaya Yantra, Rudraksha Japa Mala, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Mahamrityunjaya Yantra & Rudraksha Japa Mala (108 beads)",
          "Pooja Aasan, Premium Chandan & Premium Bhasma (50g)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Shiva Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Jaap Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Rudraksha Bead", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Rudraksha Japa Mala (108 beads)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Bhasma", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Bhasma", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4999,
        originalPrice: 9999,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Shiva Life-Force collection. Features heavy copper lota/spoon, premium brassware, copper-etched Mahamrityunjaya Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, large Nepal Panchmukhi Rudraksha, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Mahamrityunjaya Yantra",
          "Large Nepal Panchmukhi Rudraksha & premium Japa Mala",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box"
        ],
        detailedItems: [
          { name: "Lord Shiva Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Jaap Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Mahamrityunjaya Mantra Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Large Nepal Panchmukhi Rudraksha", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Mahamrityunjaya Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Rudraksha Japa Mala (108 beads)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Bhasma", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Bhasma", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Life-Force & Metal Purity",
        specs: [
          { label: "Rudraksha Authenticity", value: "Genuine Nepal Panchmukhi Rudraksha bead & Japa Mala" },
          { label: "Yantras Metal", value: "Premium etched Copper Mahamrityunjaya Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: mahamrityunjayaFaqs,
    shippingTitle: "Sacred Shiva Life-Force Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "sundarkand-path-kit",
    title: "Sundarkand Path Kit",
    tagline: "Sacred Vedic Hanuman Devotion & Victory Samagri",
    category: "Pooja Kits",
    tags: ["Sundarkand Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Hanuman Puja", "Victory & Protection"],
    seoTitle: "Sundarkand Path Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Sundarkand Path at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 318,
    images: [
      { src: "/images/sundarkand_path_kit.png", alt: "Sundarkand Path Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Hanuman Sundarkand Path items sourced from Varanasi. Blessed under priest supervision, ideal for devotion, victory, and protection.",
    longDescription: [
      "Invite the supreme, obstacle-destroying power of Lord Hanuman and the grace of Shri Ram into your home. The Kashi Prasad Sundarkand Path Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Hanuman Jayanti celebrations, or weekly Sundarkand recitations are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, orange sindoor, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and orange sindoor. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Hanuman Yantra, a Ram Naam Booklet, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Hanuman Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Lord Hanuman and Ram Darbar photos, Sundarkand and Hanuman Chalisa books, clay diyas, and orange Sindoor for basic prayers.",
        keyIncludes: [
          "Hanuman & Ram Darbar photos & Aarti Card & Chalisa",
          "Sundarkand Book & Gangajal (100ml) & Sindoor (20g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Shri Ram Darbar Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sundarkand Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Hanuman Yantra, Ram Naam Booklet, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Hanuman Yantra & Ram Naam Booklet",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Shri Ram Darbar Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sundarkand Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ram Naam Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Hanuman Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Hanuman Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Hanuman Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Shri Ram Darbar Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sundarkand Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Hanuman Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ram Naam Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Hanuman Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Saffron and Red silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: sundarkandFaqs,
    shippingTitle: "Sacred Hanuman Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "hanuman-pooja-kit",
    title: "Hanuman Pooja Kit",
    tagline: "Sacred Vedic Hanuman Devotion & Strength Samagri",
    category: "Pooja Kits",
    tags: ["Hanuman Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Hanuman Puja", "Strength & Protection"],
    seoTitle: "Hanuman Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Hanuman Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 324,
    images: [
      { src: "/images/hanuman_pooja_kit.png", alt: "Hanuman Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Lord Hanuman Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for devotion, strength, and protection.",
    longDescription: [
      "Invite the supreme, obstacle-destroying power of Lord Hanuman and the grace of Shri Ram into your home. The Kashi Prasad Hanuman Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Hanuman Jayanti celebrations, or weekly Hanuman recitations are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, orange sindoor, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and orange sindoor. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Hanuman Yantra, a Ram Raksha Stotra Booklet, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Hanuman Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Lord Hanuman and Ram Darbar photos, Hanuman Chalisa and Bajrang Baan books, clay diyas, and orange Sindoor for basic prayers.",
        keyIncludes: [
          "Hanuman & Ram Darbar photos & Aarti Card & Chalisa",
          "Bajrang Baan Book & Gangajal (100ml) & Sindoor (20g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shri Ram Darbar Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Chalisa Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Bajrang Baan Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Hanuman Yantra, Ram Raksha Stotra Booklet, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Hanuman Yantra & Ram Raksha Stotra Booklet",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shri Ram Darbar Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Chalisa Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Bajrang Baan Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ram Raksha Stotra Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Hanuman Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Hanuman Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Hanuman Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shri Ram Darbar Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Chalisa Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Hanuman Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Bajrang Baan Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Hanuman Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ram Raksha Stotra Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sindoor", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Hanuman Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Saffron and Red silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: hanumanFaqs,
    shippingTitle: "Sacred Hanuman Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "vishnu-pooja-kit",
    title: "Vishnu Pooja Kit",
    tagline: "Sacred Vedic Vishnu Devotion & Wealth Samagri",
    category: "Pooja Kits",
    tags: ["Vishnu Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Vishnu Puja", "Wealth & Protection"],
    seoTitle: "Vishnu Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Vishnu Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 284,
    images: [
      { src: "/images/vishnu_pooja_kit.png", alt: "Vishnu Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Lord Vishnu Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for devotion, wealth, and protection.",
    longDescription: [
      "Invite the supreme, preserving power of Lord Vishnu and the prosperity of Goddess Lakshmi into your home. The Kashi Prasad Vishnu Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Vishnu Sahasranama recitations, or daily home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Vishnu Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Vishnu Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Lord Vishnu and Goddess Lakshmi photos, Vishnu Sahasranama book, clay diyas, and cloths for basic prayers.",
        keyIncludes: [
          "Vishnu & Lakshmi photos & Aarti Card",
          "Vishnu Sahasranama & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Vishnu Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Sahasranama Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Vishnu Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Vishnu Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Vishnu Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Sahasranama Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Vishnu Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Vishnu Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Vishnu Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Vishnu Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Sahasranama Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishnu Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Vishnu Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Vishnu Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Yellow and Red silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: vishnuFaqs,
    shippingTitle: "Sacred Vishnu Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "saraswati-pooja-kit",
    title: "Saraswati Pooja Kit",
    tagline: "Sacred Vedic Saraswati Devotion & Wisdom Samagri",
    category: "Pooja Kits",
    tags: ["Saraswati Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Goddess Saraswati Puja", "Wisdom & Intellect"],
    seoTitle: "Saraswati Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Saraswati Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 318,
    images: [
      { src: "/images/saraswati_pooja_kit.png", alt: "Saraswati Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Goddess Saraswati Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for Basant Panchami, students, or home altar prayers.",
    longDescription: [
      "Invite the supreme, preserving power of Goddess Saraswati and the intellect of Lord Ganesha into your home. The Kashi Prasad Saraswati Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Saraswati Vandana recitations, or Basant Panchami home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Saraswati Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Saraswati Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Goddess Saraswati and Lord Ganesha photos, Saraswati Vandana book, clay diyas, and cloths for basic prayers.",
        keyIncludes: [
          "Saraswati & Ganesha photos & Aarti Card",
          "Saraswati Vandana & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & White/Yellow cloths"
        ],
        detailedItems: [
          { name: "Goddess Saraswati Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Vandana Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Saraswati Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Saraswati Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Goddess Saraswati Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Vandana Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Saraswati Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Saraswati Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Saraswati Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Saraswati Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Goddess Saraswati Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Saraswati Vandana Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Saraswati Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Saraswati Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Saraswati Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "White and Yellow silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: saraswatiFaqs,
    shippingTitle: "Sacred Saraswati Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "shani-dev-pooja-kit",
    title: "Shani Dev Pooja Kit",
    tagline: "Sacred Vedic Shani Dev Protection & Justice Samagri",
    category: "Pooja Kits",
    tags: ["Shani Dev Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Shani Puja", "Protection & Justice"],
    seoTitle: "Shani Dev Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Shani Dev Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 298,
    images: [
      { src: "/images/puja_kit_packaging.png", alt: "Shani Dev Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Lord Shani Dev Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for protection and justice.",
    longDescription: [
      "Invite the supreme, preserving power of Lord Shani Dev and the protection of Lord Hanuman into your home. The Kashi Prasad Shani Dev Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Shani Chalisa recitations, or Shani Amavasya home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable and leakage-free e-commerce shipping policy, this kit contains zero perishable items or liquids like fresh flowers, banana leaves, milk, curd, honey, mustard oil, or sesame oil. In their place, we provide premium black sesame seeds (kala til), mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Shani Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, extra sesame seeds, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Shani Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Lord Shani Dev and Lord Hanuman photos, Shani Chalisa book, clay diyas, and cloths for basic prayers.",
        keyIncludes: [
          "Shani Dev & Hanuman photos & Aarti Card",
          "Shani Chalisa & Pooja Vidhi Book & Gangajal (100ml)",
          "Black Sesame Seeds (100g) & Roli, Haldi, Kumkum, Chandan",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Black/Blue cloths"
        ],
        detailedItems: [
          { name: "Lord Shani Dev Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Black Sesame Seeds", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Black Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Blue Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Shani Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Shani Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Shani Dev Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Black Sesame Seeds", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Black Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Blue Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Black Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Shani Dev Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Shani Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, extra sesame seeds, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Shani Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Shani Dev Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Hanuman Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Shani Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Shani Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Black Sesame Seeds", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Black Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Blue Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Black Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Shani Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Black and Blue silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves/oils" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: shaniFaqs,
    shippingTitle: "Sacred Shani Dev Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "surya-dev-pooja-kit",
    title: "Surya Dev Pooja Kit",
    tagline: "Sacred Vedic Surya Dev Vitality & Health Samagri",
    category: "Pooja Kits",
    tags: ["Surya Dev Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Surya Puja", "Vitality & Health"],
    seoTitle: "Surya Dev Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Surya Dev Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 284,
    images: [
      { src: "/images/puja_kit_packaging.png", alt: "Surya Dev Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Lord Surya Dev Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for health, vitality, and career success.",
    longDescription: [
      "Invite the supreme, preserving power of Lord Surya Dev and the intelligence of Lord Ganesha into your home. The Kashi Prasad Surya Dev Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Aditya Hridaya Stotra recitations, or Sunday home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Surya Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Surya Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Lord Surya Dev and Lord Ganesha photos, Aditya Hridaya booklet, clay diyas, and cloths for basic prayers.",
        keyIncludes: [
          "Surya Dev & Ganesha photos & Aarti Card",
          "Aditya Hridaya Stotra & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Surya Dev Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Surya Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Aditya Hridaya Stotra Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Surya Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Surya Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Surya Yantra (Brass-plated) & Pooja Aasan & Aditya Hridaya Book",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Surya Dev Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Surya Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Aditya Hridaya Stotra Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Aditya Hridaya Premium Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Surya Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Surya Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Surya Dev Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Surya Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Surya Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Surya Dev Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Surya Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Aditya Hridaya Stotra Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Aditya Hridaya Premium Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Surya Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Surya Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Surya Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Red and Yellow silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: suryaFaqs,
    shippingTitle: "Sacred Surya Dev Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "sai-baba-pooja-kit",
    title: "Sai Baba Pooja Kit",
    tagline: "Sacred Vedic Sai Baba Devotion & Peace Samagri",
    category: "Pooja Kits",
    tags: ["Sai Baba Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Sai Baba Puja", "Peace & Devotion"],
    seoTitle: "Sai Baba Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Sai Baba Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 298,
    images: [
      { src: "/images/puja_kit_packaging.png", alt: "Sai Baba Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Sai Baba Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for daily home prayers and Thursday prayers.",
    longDescription: [
      "Invite the supreme, preserving power of Sai Baba and the intelligence of Lord Ganesha into your home. The Kashi Prasad Sai Baba Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Sai Naam Jap, or Thursday home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Sai Baba Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Sai Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Sai Baba and Lord Ganesha photos, Sai Satcharitra pocket book, clay diyas, and cloths for basic prayers.",
        keyIncludes: [
          "Sai Baba & Ganesha photos & Aarti Card",
          "Sai Satcharitra & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & White/Yellow cloths"
        ],
        detailedItems: [
          { name: "Sai Baba Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Baba Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Satcharitra (Pocket Edition)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Baba Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Sai Baba Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Sai Baba Yantra (Brass-plated) & Pooja Aasan & Sai Naam Jap Booklet",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Sai Baba Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Baba Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Satcharitra (Pocket Edition)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Baba Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Baba Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Naam Jap Booklet", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Sai Baba Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Sai Baba Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Sai Baba Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Sai Baba Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Baba Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Satcharitra (Pocket Edition)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Sai Baba Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Sai Baba Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "White Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Sai Baba Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "White and Yellow silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: saiFaqs,
    shippingTitle: "Sacred Sai Baba Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "kali-mata-pooja-kit",
    title: "Kali Mata Pooja Kit",
    tagline: "Sacred Vedic Kali Devotion & Protection Samagri",
    category: "Pooja Kits",
    tags: ["Kali Mata Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Goddess Kali Puja", "Protection & Strength"],
    seoTitle: "Kali Mata Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Kali Puja at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 284,
    images: [
      { src: "/images/puja_kit_packaging.png", alt: "Kali Mata Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Goddess Kali Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for protection, strength, and daily altar prayers.",
    longDescription: [
      "Invite the supreme, protecting power of Goddess Kali and the intelligence of Lord Ganesha into your home. The Kashi Prasad Kali Mata Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Kali Chalisa recitations, or daily home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Kali Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Kali Devotion",
        suitableFor: "2–5 People",
        description: "Contains all core non-perishable samagri, Maa Kali and Lord Ganesha photos, Kali Chalisa book, clay diyas, and cloths for basic prayers.",
        keyIncludes: [
          "Maa Kali & Ganesha photos & Aarti Card",
          "Kali Chalisa & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Black cloths"
        ],
        detailedItems: [
          { name: "Maa Kali Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Black Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Kali Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Kali Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Maa Kali Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Black Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Kali Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Kali Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Kali Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Maa Kali Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Chalisa", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Kali Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Kali Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Black Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Kali Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Red and Black silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: kaliFaqs,
    shippingTitle: "Sacred Kali Mata Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "vishwakarma-pooja-kit",
    title: "Vishwakarma Pooja Kit",
    tagline: "Sacred Vedic Vishwakarma Devotion & Craftsmanship Samagri",
    category: "Pooja Kits",
    tags: ["Vishwakarma Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Vishwakarma Puja", "Craftsmanship & Success"],
    seoTitle: "Vishwakarma Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Vishwakarma Puja at home or workshop with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & brassware. Free COD.",
    rating: 4.9,
    reviewsCount: 284,
    images: [
      { src: "/images/puja_kit_packaging.png", alt: "Vishwakarma Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Lord Vishwakarma Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for home workshops, offices, and tool blessing prayers.",
    longDescription: [
      "Invite the supreme, preserving power of Lord Vishwakarma and the intelligence of Lord Ganesha into your home. The Kashi Prasad Vishwakarma Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Vishwakarma Aarti recitations, or workshop tool home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Vishwakarma Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Vishwakarma Devotion",
        suitableFor: "Small Shops & Home Workshops",
        description: "Contains all core non-perishable samagri, Lord Vishwakarma and Lord Ganesha photos, Vishwakarma Pooja Vidhi booklet, clay diyas, and cloths for basic prayers.",
        keyIncludes: [
          "Vishwakarma & Ganesha photos & Aarti Card",
          "Vishwakarma Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Vishwakarma Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishwakarma Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishwakarma Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Vishwakarma Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Vishwakarma Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Vishwakarma Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishwakarma Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishwakarma Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishwakarma Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Vishwakarma Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Vishwakarma Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Vishwakarma Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Vishwakarma Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishwakarma Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vishwakarma Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Vishwakarma Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Vishwakarma Yantra" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Red and Yellow silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: vishwakarmaFaqs,
    shippingTitle: "Sacred Vishwakarma Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "vehicle-pooja-kit",
    title: "Vehicle Pooja Kit",
    tagline: "Sacred Vedic Vehicle Protection & Ganesha Samagri",
    category: "Pooja Kits",
    tags: ["Vehicle Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Lord Ganesha Puja", "Travel Protection & Safety"],
    seoTitle: "Vehicle Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Vehicle Puja (Vahan Pooja) at home with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & stickers. Free COD.",
    rating: 4.9,
    reviewsCount: 284,
    images: [
      { src: "/images/puja_kit_packaging.png", alt: "Vehicle Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Lord Ganesha and travel protection items sourced from Varanasi. Blessed under priest supervision, ideal for car, bike, scooter, and heavy vehicle blessings.",
    longDescription: [
      "Invite the supreme, protecting power of Lord Ganesha and the travel safety elements into your new automobile. The Kashi Prasad Vehicle Pooja Kit (Vahan Pooja Kit) is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, vehicle blessings, or road trips are started with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 6 clay diyas, and dual cloths, plus safety stickers. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Ganesha Yantra, a Vehicle Protection Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 12 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Vehicle Devotion",
        suitableFor: "Bike, Scooter & Small Vehicle",
        description: "Contains all core non-perishable samagri, Lord Ganesha photo, Vehicle Pooja Vidhi booklet, clay diyas, Swastik/Om stickers, symbolic lemon & chili protection card, and cloths for basic prayers.",
        keyIncludes: [
          "Lord Ganesha Photo & Aarti Card",
          "Vehicle Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Swastik & Om Stickers (2 pcs each) & Lemon & Chili Symbolic Card",
          "Steel Kalash, clay diyas (6 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vehicle Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Swastik Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Om Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Lemon & Chili Symbolic Card", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Ganesha Yantra, Vehicle Protection Yantra, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Ganesh Yantra & Vehicle Protection Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vehicle Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vehicle Protection Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×6", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Swastik Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Om Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Lemon & Chili Symbolic Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Vehicle Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Ganesha Yantra, Vehicle Protection Yantra, pure Kesar, natural Pooja Ittar, 12 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Ganesha Yantra & Vehicle Protection Yantra",
          "Kesar (2g), Pooja Ittar, 12 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Vehicle Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Ganesh Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Vehicle Protection Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×12", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Swastik Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Om Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Lemon & Chili Symbolic Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Ganesha & Protection Yantras" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Red and Yellow silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.2kg | Standard: ~2.6kg | Premium: ~4.4kg" }
        ]
      }
    ],
    faqs: vehicleFaqs,
    shippingTitle: "Sacred Vehicle Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  },
  {
    slug: "office-opening-pooja-kit",
    title: "Office Opening Pooja Kit",
    tagline: "Sacred Vedic Office Inauguration, Wealth & Growth Samagri",
    category: "Pooja Kits",
    tags: ["Office Opening Puja", "Pooja Kit", "Varanasi Sourced", "Kashi Prasad", "Home Pooja Kit", "Inauguration Puja", "Wealth & Fortune"],
    seoTitle: "Office Opening Pooja Kit Online | Varanasi Sourced | Kashi Prasad",
    metaDescription: "Perform authentic Office Opening Puja (Inauguration Puja) with our premium Pooja Kit. Curated in Varanasi with pure non-perishable samagri, yantras & stickers. Free COD.",
    rating: 4.9,
    reviewsCount: 284,
    images: [
      { src: "/images/puja_kit_packaging.png", alt: "Office Opening Pooja Kit Main Product Shot" },
      { src: "/images/puja_kit_packaging.png", alt: "Premium Kashi Prasad Packaging Box" },
      { src: "/images/temple_prasad_box.png", alt: "Sacred Prasad from Kashi Vishwanath" }
    ],
    badge: "Best Seller",
    shortDescription: "A premium collection of authentic, non-perishable Goddess Lakshmi and Lord Ganesha inauguration items sourced from Varanasi. Blessed under priest supervision, ideal for new startup, clinic, office, and store openings.",
    longDescription: [
      "Invite the supreme, protecting power of Goddess Lakshmi and Lord Ganesha into your new commercial workplace. The Kashi Prasad Office Opening Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your startup, office, clinic, or showroom inauguration pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, Swastik/Om/Shubh Labh stickers, and dual cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Lakshmi Yantra, a brass-plated Ganesh Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    variants: [
      {
        id: "basic",
        name: "Basic Kit",
        price: 1699,
        originalPrice: 3399,
        badge: "Essential Office Devotion",
        suitableFor: "Small Office / Startup / Clinic",
        description: "Contains all core non-perishable samagri, Ganesha & Lakshmi photos, Office Opening Pooja Vidhi booklet, clay diyas, auspicious stickers, and cloths for basic prayers.",
        keyIncludes: [
          "Ganesha & Lakshmi photos & Aarti Card",
          "Office Opening Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Swastik, Om & Shubh Labh Stickers",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Office Opening Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Office Opening Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×2", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "50g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×25", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Swastik Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Om Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Shubh Labh Sticker Set", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "standard",
        name: "Standard Kit",
        price: 2699,
        originalPrice: 5399,
        badge: "Best Seller • Recommended",
        suitableFor: "4–8 People",
        description: "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Ganesha & Lakshmi Yantras, and custom organization bags.",
        keyIncludes: [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Ganesh Yantra & Lakshmi Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Office Opening Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Office Opening Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Ganesh Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Lakshmi Yantra", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×11", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×1", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×4", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×6", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×2", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "150g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×75", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×11", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "100g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Swastik Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Om Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Shubh Labh Sticker Set", quantity: "×1", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Gift Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      },
      {
        id: "premium",
        name: "Premium Kit",
        price: 4599,
        originalPrice: 9199,
        badge: "Luxury Altar Collection",
        suitableFor: "8–15 People",
        description: "The ultimate Office Opening collection. Features heavy copper lota/spoon, premium brassware, copper-etched Ganesha & Lakshmi Yantras, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        keyIncludes: [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Ganesha Yantra & Lakshmi Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        detailedItems: [
          { name: "Lord Ganesha Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Goddess Lakshmi Photo", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Office Opening Pooja Vidhi Book", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Office Opening Aarti Card", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Ganesh Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Premium Lakshmi Yantra (Copper-etched)", quantity: "×1", category: "Murtis, Photos & Books" },
          { name: "Roli", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Haldi", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Kumkum", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Chandan Powder", quantity: "20g", category: "Sacred Ingredients & Herbs" },
          { name: "Premium Chandan", quantity: "50g", category: "Sacred Ingredients & Herbs" },
          { name: "Pure Kesar (Saffron)", quantity: "2g", category: "Sacred Ingredients & Herbs" },
          { name: "Pooja Ittar (Fragrance)", quantity: "1 Bottle", category: "Sacred Ingredients & Herbs" },
          { name: "Akshat Rice", quantity: "100g", category: "Sacred Ingredients & Herbs" },
          { name: "Supari", quantity: "×32", category: "Sacred Ingredients & Herbs" },
          { name: "Cloves", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Cardamom", quantity: "×20", category: "Sacred Ingredients & Herbs" },
          { name: "Dry Coconut", quantity: "×3", category: "Sacred Ingredients & Herbs" },
          { name: "Mauli (Raksha Sutra)", quantity: "×9", category: "Ritual Cloths & Aasans" },
          { name: "Janeu (Sacred Thread)", quantity: "×16", category: "Ritual Cloths & Aasans" },
          { name: "Red Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Pooja Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Red Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Yellow Chowki Cloth", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Pooja Aasan", quantity: "×1", category: "Ritual Cloths & Aasans" },
          { name: "Sealed Gangajal", quantity: "100ml", category: "Sacred Metalware & Vessels" },
          { name: "Steel Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Kalash", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Premium Pooja Thali", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Steel Bowls", quantity: "×6", category: "Sacred Metalware & Vessels" },
          { name: "Pooja Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Spoon", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Temple Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Bell", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Copper Lota", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Large Brass Diya", quantity: "×1", category: "Sacred Metalware & Vessels" },
          { name: "Camphor (Kafur)", quantity: "350g", category: "Aroma & Lamps" },
          { name: "Incense Sticks (Agarbatti)", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Incense Packs", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cone Pack", quantity: "1 Pack", category: "Aroma & Lamps" },
          { name: "Premium Dhoop Cones Extra", quantity: "2 Packs", category: "Aroma & Lamps" },
          { name: "Cotton Wicks", quantity: "×175", category: "Aroma & Lamps" },
          { name: "Clay Diyas", quantity: "×21", category: "Aroma & Lamps" },
          { name: "Mishri (Sugar Candy)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Batasha (Sugar Drops)", quantity: "350g", category: "Packaging & Organization" },
          { name: "Panchmewa (Dry Fruits)", quantity: "350g", category: "Sacred Ingredients & Herbs" },
          { name: "Swastik Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Om Sticker", quantity: "×2", category: "Packaging & Organization" },
          { name: "Shubh Labh Sticker Set", quantity: "×1", category: "Packaging & Organization" },
          { name: "Red Cloth Pouch", quantity: "×1", category: "Packaging & Organization" },
          { name: "Zip Pouches for organization", quantity: "×5", category: "Packaging & Organization" },
          { name: "Kashi Prasad Instruction Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Complete Checklist Card", quantity: "×1", category: "Packaging & Organization" },
          { name: "Premium Kashi Prasad Gift Packaging", quantity: "×1", category: "Packaging & Organization" },
          { name: "Reusable Wooden Storage Box", quantity: "×1", category: "Packaging & Organization" }
        ]
      }
    ],
    specifications: [
      {
        groupName: "Devotion & Metal Purity",
        specs: [
          { label: "Yantras Metal", value: "Premium etched Copper Ganesha & Lakshmi Yantras" },
          { label: "Brass Castings", value: "Grade-A solid Brass Kalash, bell & shanti diya" },
          { label: "Copper Vessels", value: "99.2% Pure copper lota & spoon for gangajal" },
          { label: "Aura Cloths", value: "Red and Yellow silk with hand-woven borders" }
        ]
      },
      {
        groupName: "Origin & Sourcing",
        specs: [
          { label: "Compilation Origin", value: "Holy city of Kashi under priest supervision" },
          { label: "Sourcing Sincerity", value: "100% Sourced & energized in Varanasi temples" },
          { label: "Non-Perishable Promise", value: "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves" },
          { label: "Net Weight", value: "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg" }
        ]
      }
    ],
    faqs: officeFaqs,
    shippingTitle: "Sacred Office Opening Blessing Dispatch Direct from Varanasi",
    shippingText: "Every order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India."
  }
];

// Real Rudraksha products sourced from reference screenshots (21 items)
const rudrakshaProducts: Product[] = [
  {
    slug: "rudraksha-om-rakhi",
    title: "OM Rudraksha Rakhi",
    tagline: "Sacred Protection",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Rakhi", "OM", "Varanasi Sourced"],
    seoTitle: "Buy OM Rudraksha Rakhi Online | Kashi Prasad",
    metaDescription: "Buy authentic OM Rudraksha Rakhi online. Sourced from Varanasi, blessed in temples.",
    rating: 4.8,
    reviewsCount: 34,
    images: [{ src: "/images/public:images:rudrakshas:/05_mukhi_rudraksha_regenerated.png", alt: "OM Rudraksha Rakhi" }],
    badge: "76% OFF",
    shortDescription: "Sacred OM Rudraksha Rakhi made with premium red thread and natural energized Rudraksha beads.",
    longDescription: ["Bring the divine blessing of Lord Shiva with this authentic, priest-energized OM Rudraksha Rakhi.", "Handcrafted in Varanasi under sacred supervision."],
    variants: [
      {
        id: "rudraksha-om-rakhi-default",
        name: "Standard",
        price: 169,
        originalPrice: 700,
        badge: "76% OFF",
        suitableFor: "Raksha Bandhan and protection",
        description: "Standard OM Rudraksha Rakhi.",
        keyIncludes: ["Authentic Rudraksha Bead", "Holy Red Thread"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "divya-raksha-rudraksha-karungali-silver",
    title: "Divya Raksha Rudraksha & Karungali Mala with Silver Spacer",
    tagline: "Positive Energy & Protection",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Karungali", "Varanasi Sourced"],
    seoTitle: "Buy Divya Raksha Rudraksha & Karungali Mala Online | Kashi Prasad",
    metaDescription: "Authentic Divya Raksha Rudraksha & Karungali Mala with premium silver spacer. Blessed in Kashi.",
    rating: 4.9,
    reviewsCount: 88,
    images: [{ src: "/images/public:images:rudrakshas:/03_mukhi_rudraksha_regenerated.png", alt: "Divya Raksha Rudraksha & Karungali Mala" }],
    badge: "Bestseller",
    shortDescription: "Combining the cosmic energy of Rudraksha with the aura cleansing power of Karungali wood.",
    longDescription: ["A powerful spiritual accessory combining original Rudraksha beads and authentic Karungali ebony wood beads.", "Finished with highly polished silver spacers for a premium look."],
    variants: [
      {
        id: "rudraksha-karungali-silver-default",
        name: "Standard",
        price: 799,
        originalPrice: 1400,
        badge: "43% OFF",
        suitableFor: "Meditation, protection and positive energy",
        description: "Standard Divya Raksha Mala with silver spacer.",
        keyIncludes: ["Authentic Nepal Rudraksha", "Pure Karungali Ebony Wood", "Silver Spacers"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "rudraksha-hanuman-gada-pendant",
    title: "Rudraksha Hanuman Gada Pendant",
    tagline: "Strength & Devotion",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Pendant", "Hanuman", "Varanasi Sourced"],
    seoTitle: "Buy Rudraksha Hanuman Gada Pendant Online | Kashi Prasad",
    metaDescription: "Buy authentic Rudraksha Hanuman Gada Pendant online. Sourced and blessed in Varanasi.",
    rating: 4.8,
    reviewsCount: 52,
    images: [{ src: "/images/public:images:rudrakshas:/04_mukhi_rudraksha_regenerated.png", alt: "Rudraksha Hanuman Gada Pendant" }],
    badge: "Popular",
    shortDescription: "Finely detailed Hanuman Gada brass pendant combined with an authentic five-faced Rudraksha bead.",
    longDescription: ["Embody strength, fearlessness, and deep devotion with this sacred Hanuman Gada Rudraksha pendant.", "Energized in Hanuman temples in holy Kashi."],
    variants: [
      {
        id: "rudraksha-hanuman-gada-default",
        name: "Standard",
        price: 699,
        originalPrice: 1300,
        badge: "46% OFF",
        suitableFor: "Daily wear and spiritual strength",
        description: "Hanuman Gada Pendant with Rudraksha.",
        keyIncludes: ["Authentic Rudraksha Bead", "Detailed Brass Gada Pendant"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "shiv-rudraksha-mala-adiyogi-pendant",
    title: "Shiv Rudraksha Mala with Adiyogi Shiv Pendant",
    tagline: "Mahadev's Blessings",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Adiyogi", "Varanasi Sourced"],
    seoTitle: "Buy Shiv Rudraksha Mala with Adiyogi Pendant Online | Kashi Prasad",
    metaDescription: "Authentic Shiv Rudraksha Mala featuring a detailed Adiyogi Lord Shiva pendant. Blessed in Kashi.",
    rating: 4.9,
    reviewsCount: 112,
    images: [{ src: "/images/public:images:rudrakshas:/06_mukhi_rudraksha_regenerated.png", alt: "Shiv Rudraksha Mala with Adiyogi Pendant" }],
    badge: "Mahadev Special",
    shortDescription: "A full chanting mala of natural Rudraksha beads featuring a beautifully crafted Adiyogi Shiva face pendant.",
    longDescription: ["Connect with the ultimate yogi. This sacred mala is hand-knotted in Varanasi and features a premium Adiyogi Lord Shiva pendant.", "Ideal for meditation, daily wear, and Shiva worship."],
    variants: [
      {
        id: "shiv-rudraksha-adiyogi-default",
        name: "Standard",
        price: 999,
        originalPrice: 1700,
        badge: "41% OFF",
        suitableFor: "Daily chanting and Mahadev worship",
        description: "Mala with Adiyogi Shiva pendant.",
        keyIncludes: ["Authentic Rudraksha beads (108+1)", "Detailed Adiyogi Face Pendant"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "adiyogi-shiv-7-mukhi-pendant",
    title: "Adiyogi Shiv 7 Mukhi Rudraksha Pendant",
    tagline: "Wealth & Focus",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Pendant", "7 Mukhi", "Varanasi Sourced"],
    seoTitle: "Buy Adiyogi Shiv 7 Mukhi Rudraksha Pendant Online | Kashi Prasad",
    metaDescription: "Buy authentic Adiyogi Shiv 7 Mukhi Rudraksha Pendant online. Purified and blessed in Varanasi.",
    rating: 4.9,
    reviewsCount: 76,
    images: [{ src: "/images/public:images:rudrakshas:/07_mukhi_rudraksha_regenerated.png", alt: "Adiyogi Shiv 7 Mukhi Rudraksha Pendant" }],
    badge: "7 Mukhi Special",
    shortDescription: "Authentic Nepal 7 Mukhi Rudraksha bead paired with an intricate Adiyogi Shiva design metal frame.",
    longDescription: ["Sacred 7 Mukhi Rudraksha (representing Goddess Lakshmi) encased in a premium metal frame featuring Lord Shiva's Adiyogi face.", "Brings positive vibrations, focus, wealth, and focus."],
    variants: [
      {
        id: "adiyogi-7mukhi-default",
        name: "Standard",
        price: 999,
        originalPrice: 1700,
        badge: "41% OFF",
        suitableFor: "Prosperity, focus, and daily wear",
        description: "Adiyogi Shiv 7 Mukhi Pendant.",
        keyIncludes: ["Authentic Nepal 7 Mukhi Rudraksha", "Premium Metal Adiyogi Frame"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "7-mukhi-rudraksha-bracelet",
    title: "7 Mukhi Rudraksha Bracelet",
    tagline: "Aura Cleansing",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Bracelet", "7 Mukhi", "Varanasi Sourced"],
    seoTitle: "Buy 7 Mukhi Rudraksha Bracelet Online | Kashi Prasad",
    metaDescription: "Authentic 7 Mukhi Rudraksha Bracelet sourced from Varanasi. Elastic fit for daily wear.",
    rating: 4.8,
    reviewsCount: 94,
    images: [{ src: "/images/public:images:rudrakshas:/07_mukhi_rudraksha_regenerated.png", alt: "7 Mukhi Rudraksha Bracelet" }],
    badge: "Bestseller",
    shortDescription: "Beautifully hand-strung bracelet featuring authentic 7 Mukhi Rudraksha beads for prosperity and peace.",
    longDescription: ["Wear the divine blessings of Goddess Lakshmi on your wrist. This premium bracelet is made from selected 7 Mukhi Rudraksha beads.", "Elasticated structure fits all wrist sizes comfortably."],
    variants: [
      {
        id: "7mukhi-bracelet-default",
        name: "Standard",
        price: 799,
        originalPrice: 2499,
        badge: "68% OFF",
        suitableFor: "Attracting wealth and wearing on wrist",
        description: "Elastic 7 Mukhi Rudraksha Bracelet.",
        keyIncludes: ["Selected 7 Mukhi Rudraksha beads", "High-durability elastic string"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "shiv-rudraksha-mala-trishul-pendant",
    title: "Shiv Rudraksha Mala with Om Shiva Trishul Pendant",
    tagline: "Trishul Protection",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Trishul", "Varanasi Sourced"],
    seoTitle: "Buy Shiv Rudraksha Mala with Trishul Pendant Online | Kashi Prasad",
    metaDescription: "Authentic Shiv Rudraksha Mala with an OM Shiva Trishul metal pendant. Sourced from Kashi.",
    rating: 4.9,
    reviewsCount: 61,
    images: [{ src: "/images/public:images:rudrakshas:/08_mukhi_rudraksha_regenerated.png", alt: "Shiv Rudraksha Mala with Trishul Pendant" }],
    badge: "Protection",
    shortDescription: "Sacred 108+1 Rudraksha beads chanting mala with an intricate silver-plated Trishul & Damroo pendant.",
    longDescription: ["Lord Shiva's symbols of power—Trishul, Damroo, and the OM syllable—brought together in a premium silver-plated pendant.", "Knotted with genuine natural Rudraksha beads for deep meditation and protection."],
    variants: [
      {
        id: "rudraksha-trishul-default",
        name: "Standard",
        price: 999,
        originalPrice: 1700,
        badge: "41% OFF",
        suitableFor: "Chanting, meditation, and spiritual protection",
        description: "Om Shiva Trishul Pendant Mala.",
        keyIncludes: ["Authentic Rudraksha Beads", "Silver-Plated Om Trishul Pendant"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "nepal-origin-7-mukhi-rudraksha",
    title: "Nepal Origin 7 Mukhi Rudraksha - Certified",
    tagline: "Mahalaxmi Blessed",
    category: "Rudrakshas",
    tags: ["Rudraksha", "7 Mukhi", "Collector Bead", "Varanasi Sourced"],
    seoTitle: "Certified Nepal Origin 7 Mukhi Rudraksha Bead | Kashi Prasad",
    metaDescription: "Buy 100% original certified Nepal 7 Mukhi Rudraksha. Sourced directly and energized in Kashi.",
    rating: 5.0,
    reviewsCount: 45,
    images: [{ src: "/images/public:images:rudrakshas:/07_mukhi_rudraksha_regenerated.png", alt: "Nepal Origin 7 Mukhi Rudraksha" }],
    badge: "100% Certified",
    shortDescription: "Collector grade large Nepal 7 Mukhi Rudraksha bead with lab certificate of authenticity.",
    longDescription: ["A premium quality collector-grade 7 Mukhi Rudraksha bead with deep and clear natural grooves.", "Comes with an independent laboratory certification card. Energized on the banks of Ganga in Kashi."],
    variants: [
      {
        id: "nepal-7mukhi-certified-default",
        name: "Standard",
        price: 1299,
        originalPrice: 2999,
        badge: "57% OFF",
        suitableFor: "Altar worship, wearing, and attracting prosperity",
        description: "Certified Nepal 7 Mukhi Rudraksha bead.",
        keyIncludes: ["Original Nepal 7 Mukhi Bead", "Authenticity Lab Certificate", "Vedic Temple Energized"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "divya-shankh-rudraksha-mala",
    title: "Divya Shankh Rudraksha Mala",
    tagline: "Divine Vibration",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Shankh", "Varanasi Sourced"],
    seoTitle: "Buy Divya Shankh Rudraksha Mala Online | Kashi Prasad",
    metaDescription: "Authentic Divya Shankh Rudraksha Mala with conch spacer details. Blessed in Kashi.",
    rating: 4.8,
    reviewsCount: 39,
    images: [{ src: "/images/public:images:rudrakshas:/10_mukhi_rudraksha_regenerated.png", alt: "Divya Shankh Rudraksha Mala" }],
    badge: "Spiritual",
    shortDescription: "A powerful combination of holy Rudraksha seeds and symbolic conch (Shankh) metal spacers.",
    longDescription: ["Align with cosmic vibrations. This mala is crafted using authentic five-faced Rudraksha beads and features detailed miniature Shankh metal dividers.", "Hand-strung by artisans in holy Varanasi."],
    variants: [
      {
        id: "divya-shankh-mala-default",
        name: "Standard",
        price: 999,
        originalPrice: 1700,
        badge: "41% OFF",
        suitableFor: "Daily worship, positive energy, and peace",
        description: "Rudraksha Mala with Shankh spacers.",
        keyIncludes: ["Authentic Rudraksha Beads", "Intricate Conch (Shankh) Metal Beads"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "surya-shakti-rudraksha-mala",
    title: "Surya Shakti Rudraksha Mala",
    tagline: "Vitality & Confidence",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Surya", "Varanasi Sourced"],
    seoTitle: "Buy Surya Shakti Rudraksha Mala Online | Kashi Prasad",
    metaDescription: "Buy authentic Surya Shakti Rudraksha Mala. Sourced and purified in Varanasi.",
    rating: 4.9,
    reviewsCount: 57,
    images: [{ src: "/images/public:images:rudrakshas:/12_mukhi_rudraksha_regenerated.png", alt: "Surya Shakti Rudraksha Mala" }],
    badge: "Vitality",
    shortDescription: "Handcrafted chanting mala made with genuine Rudraksha beads and sun-symbol copper spacers.",
    longDescription: ["Ignite your inner fire, confidence, and leadership with the Surya Shakti Rudraksha Mala.", "Prepared under Vedic guidelines and blessed in Kashi Surya temples."],
    variants: [
      {
        id: "surya-shakti-default",
        name: "Standard",
        price: 999,
        originalPrice: 1700,
        badge: "41% OFF",
        suitableFor: "Boosting confidence, physical energy, and solar alignment",
        description: "Mala with sun-symbol spacers.",
        keyIncludes: ["Natural Rudraksha Beads", "Copper Sun Emblem Spacers"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "om-bead-rudraksha-mala",
    title: "OM Bead Rudraksha Mala",
    tagline: "Ultimate Peace",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "OM", "Varanasi Sourced"],
    seoTitle: "Buy OM Bead Rudraksha Mala Online | Kashi Prasad",
    metaDescription: "Authentic OM Bead Rudraksha Mala with silver-plated OM spacers. Blessed in Varanasi.",
    rating: 4.9,
    reviewsCount: 148,
    images: [{ src: "/images/public:images:rudrakshas:/14_mukhi_rudraksha_regenerated.png", alt: "OM Bead Rudraksha Mala" }],
    badge: "Most Popular",
    shortDescription: "Traditional chanting mala decorated with silver-plated OM letters to focus mind during japa.",
    longDescription: ["Experience spiritual alignment. This hand-knotted mala features 108 authentic Rudraksha beads separated by beautiful silver-finished OM charms.", "Varanasi temple purified."],
    variants: [
      {
        id: "om-bead-mala-default",
        name: "Standard",
        price: 999,
        originalPrice: 1700,
        badge: "41% OFF",
        suitableFor: "Daily chanting, Japa, and stress reduction",
        description: "Mala with OM syllable charms.",
        keyIncludes: ["Authentic 108+1 Rudraksha beads", "Polished Silver-Plated OM spacers"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "kashi-siddh-nepal-7-mukhi",
    title: "Kashi Siddh Nepal Origin 7 Mukhi Rudraksha - Certified",
    tagline: "Priest-Energized Collector Bead",
    category: "Rudrakshas",
    tags: ["Rudraksha", "7 Mukhi", "Collector Bead", "Varanasi Sourced"],
    seoTitle: "Kashi Siddh Nepal Origin 7 Mukhi Rudraksha Bead | Kashi Prasad",
    metaDescription: "Purchase authentic Kashi Siddh certified Nepal 7 Mukhi Rudraksha bead. Purified in temple.",
    rating: 5.0,
    reviewsCount: 29,
    images: [{ src: "/images/public:images:rudrakshas:/07_mukhi_rudraksha_regenerated.png", alt: "Kashi Siddh Nepal 7 Mukhi Rudraksha" }],
    badge: "Siddh Altar Bead",
    shortDescription: "Premium large Nepal 7 Mukhi Rudraksha, specifically energized in Kashi Kashi Vishwanath area.",
    longDescription: ["A highly auspicious, selected collector-grade 7 Mukhi Rudraksha bead from Nepal, purified and energized under direct priest supervision in holy Kashi.", "Arrives with a certificate of Vedic authenticity."],
    variants: [
      {
        id: "kashi-siddh-7mukhi-default",
        name: "Standard",
        price: 1410,
        originalPrice: 2499,
        badge: "44% OFF",
        suitableFor: "Altar installation, daily puja, and wealth attraction",
        description: "Certified energized Kashi Siddh 7 Mukhi bead.",
        keyIncludes: ["Certified Nepal 7 Mukhi Bead", "Varanasi Priest Abhishekam Certificate"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "divya-raksha-rudraksha-karungali-free-bracelet",
    title: "Divya Raksha Rudraksha & Karungali Mala with FREE Bracelet",
    tagline: "Special Spiritual Combo",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Karungali", "Combo", "Varanasi Sourced"],
    seoTitle: "Divya Raksha Rudraksha & Karungali Mala with FREE Bracelet | Kashi Prasad",
    metaDescription: "Buy Divya Raksha Rudraksha & Karungali Mala and get a matching bracelet free. Sourced in Kashi.",
    rating: 4.9,
    reviewsCount: 165,
    images: [{ src: "/images/public:images:rudrakshas:/13_mukhi_rudraksha_regenerated.png", alt: "Rudraksha & Karungali Mala with Free Bracelet" }],
    badge: "Mega Deal",
    shortDescription: "Purchase the premium Rudraksha and Karungali chanting mala and receive a matching wrist bracelet completely free.",
    longDescription: ["The ultimate protective combination. This spiritual combo contains a full 108-bead Rudraksha-Karungali mala plus a matching elasticated bracelet.", "Sun-energized and purified on Varanasi ghats."],
    variants: [
      {
        id: "rudraksha-karungali-combo-default",
        name: "Standard",
        price: 999,
        originalPrice: 3900,
        badge: "74% OFF",
        suitableFor: "Daily wear, chanting, and energy cleansing",
        description: "Rudraksha-Karungali Mala and Free Bracelet.",
        keyIncludes: ["108-bead Knotted Mala", "Free matching elasticated bracelet"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "5-mukhi-rudraksha-bracelet",
    title: "5 Mukhi Rudraksha Bracelet",
    tagline: "Stress Relief & Focus",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Bracelet", "5 Mukhi", "Varanasi Sourced"],
    seoTitle: "Buy 5 Mukhi Rudraksha Bracelet Online | Kashi Prasad",
    metaDescription: "Traditional 5 Mukhi Rudraksha Bracelet for daily wear. Sourced and energized in Varanasi.",
    rating: 4.8,
    reviewsCount: 234,
    images: [{ src: "/images/public:images:rudrakshas:/05_mukhi_rudraksha_regenerated.png", alt: "5 Mukhi Rudraksha Bracelet" }],
    badge: "Daily Wear",
    shortDescription: "Simple, elegant elasticated bracelet crafted with authentic five-faced Rudraksha beads for mental clarity.",
    longDescription: ["Maintain peace, concentration, and balanced energy levels throughout your workday with this natural 5 Mukhi Rudraksha bracelet.", "Hand-threaded in Varanasi temples."],
    variants: [
      {
        id: "5mukhi-bracelet-default",
        name: "Standard",
        price: 499,
        originalPrice: 1999,
        badge: "75% OFF",
        suitableFor: "Daily work wear, stress reduction, and focus",
        description: "Elastic 5 Mukhi Rudraksha Bracelet.",
        keyIncludes: ["Selected 5 Mukhi Rudraksha beads", "Comfort elastic cord"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "nepal-origin-5-mukhi-rudraksha",
    title: "Nepal Origin 5 Mukhi Rudraksha - Certified",
    tagline: "Purity Certified",
    category: "Rudrakshas",
    tags: ["Rudraksha", "5 Mukhi", "Collector Bead", "Varanasi Sourced"],
    seoTitle: "Certified Nepal Origin 5 Mukhi Rudraksha Bead | Kashi Prasad",
    metaDescription: "Buy certified 5 Mukhi Nepal Rudraksha bead online. Ritually purified and blessed in Varanasi.",
    rating: 4.9,
    reviewsCount: 67,
    images: [{ src: "/images/public:images:rudrakshas:/05_mukhi_rudraksha_regenerated.png", alt: "Nepal Origin 5 Mukhi Rudraksha" }],
    badge: "Certified",
    shortDescription: "A selected five-faced (Panchmukhi) Nepal Rudraksha bead with lab certificate card.",
    longDescription: ["An authentic, high-quality 5 Mukhi Rudraksha bead sourced from Nepal.", "Independently lab certified. Ideal for altar worship or placing in lockets."],
    variants: [
      {
        id: "nepal-5mukhi-certified-default",
        name: "Standard",
        price: 699,
        originalPrice: 1100,
        badge: "36% OFF",
        suitableFor: "Spiritual practice, altar, and wearing",
        description: "Certified Nepal 5 Mukhi Rudraksha bead.",
        keyIncludes: ["Original Nepal 5 Mukhi Bead", "Authenticity Certificate Card", "Holy Kashi Energized"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "dhan-rudraksha-bracelet",
    title: "Dhan Rudraksha Bracelet",
    tagline: "Wealth & Fortune",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Bracelet", "Dhan", "Varanasi Sourced"],
    seoTitle: "Buy Dhan Rudraksha Bracelet Online | Kashi Prasad",
    metaDescription: "Authentic Dhan Rudraksha Bracelet for wealth attraction. Sourced and blessed in Varanasi.",
    rating: 4.8,
    reviewsCount: 71,
    images: [{ src: "/images/public:images:rudrakshas:/06_mukhi_rudraksha_regenerated.png", alt: "Dhan Rudraksha Bracelet" }],
    badge: "Dhan Yog Special",
    shortDescription: "Sacred wrist bracelet made of authentic Rudraksha beads combined with wealth-attraction gemstones.",
    longDescription: ["Invite luxury, luck, and positive career flow with the Dhan Rudraksha Bracelet.", "Energized in Kashi Laxmi temples by priests."],
    variants: [
      {
        id: "dhan-bracelet-default",
        name: "Standard",
        price: 699,
        originalPrice: 1999,
        badge: "65% OFF",
        suitableFor: "Financial prosperity and daily wear",
        description: "Dhan Rudraksha Bracelet.",
        keyIncludes: ["Selected Rudraksha beads", "Wealth attracting spacer beads"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "dhan-yog-bracelet-7-mukhi",
    title: "Dhan Yog Bracelet with 7 Mukhi Rudraksha",
    tagline: "Prosperity Special",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Bracelet", "7 Mukhi", "Varanasi Sourced"],
    seoTitle: "Buy Dhan Yog Bracelet with 7 Mukhi Rudraksha Online | Kashi Prasad",
    metaDescription: "Authentic Dhan Yog Bracelet featuring a certified Nepal 7 Mukhi Rudraksha bead. Blessed in Kashi.",
    rating: 4.9,
    reviewsCount: 82,
    images: [{ src: "/images/public:images:rudrakshas:/07_mukhi_rudraksha_regenerated.png", alt: "Dhan Yog Bracelet with 7 Mukhi Rudraksha" }],
    badge: "Laxmi Siddh",
    shortDescription: "A powerful combination of certified 7 Mukhi Rudraksha bead and protective gemstones for financial success.",
    longDescription: ["A wrist bracelet designed to attract luck, career growth, and luxury. Features a center 7 Mukhi Nepal Rudraksha.", "Handcrafted in Varanasi and purified in Lakshmi temples."],
    variants: [
      {
        id: "dhanyog-7mukhi-default",
        name: "Standard",
        price: 999,
        originalPrice: 1700,
        badge: "41% OFF",
        suitableFor: "Financial growth and aura protection",
        description: "Dhan Yog 7 Mukhi Bracelet.",
        keyIncludes: ["Certified 7 Mukhi Rudraksha Bead", "Wealth-attraction spacer beads"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "divya-raksha-rudraksha-karungali-8mm",
    title: "Divya Raksha Rudraksha & Karungali Mala 8mm - Certified",
    tagline: "Traditional Chanting Japa Mala",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Karungali", "Varanasi Sourced"],
    seoTitle: "Certified Divya Raksha Rudraksha & Karungali Mala 8mm | Kashi Prasad",
    metaDescription: "Purchase certified 8mm Divya Raksha Rudraksha and Karungali Mala. Blessed in Kashi.",
    rating: 4.9,
    reviewsCount: 104,
    images: [{ src: "/images/public:images:rudrakshas:/08_mukhi_rudraksha_regenerated.png", alt: "Divya Raksha Rudraksha & Karungali Mala 8mm" }],
    badge: "Certified Mala",
    shortDescription: "Vedic certified 8mm Japa Mala combining natural five-faced Rudraksha and Karungali wood beads.",
    longDescription: ["Perform your daily meditation with this premium 8mm Japa Mala.", "Prepared strictly under Vedic guidelines and certified by experts in Varanasi."],
    variants: [
      {
        id: "rudraksha-karungali-8mm-default",
        name: "Standard",
        price: 899,
        originalPrice: 1700,
        badge: "47% OFF",
        suitableFor: "Meditation, mantra chanting, and daily wear",
        description: "Certified 8mm Rudraksha & Karungali Mala.",
        keyIncludes: ["8mm selected Rudraksha beads", "8mm Karungali Ebony Wood beads"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "5-mukhi-rudraksha-combo",
    title: "5 Mukhi Rudraksha Combo",
    tagline: "Meditation Starter Set",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Combo", "5 Mukhi", "Varanasi Sourced"],
    seoTitle: "Buy 5 Mukhi Rudraksha Combo Online | Kashi Prasad",
    metaDescription: "Authentic 5 Mukhi Rudraksha Combo featuring a bead, mala, and bracelet. Blessed in Varanasi.",
    rating: 4.8,
    reviewsCount: 65,
    images: [{ src: "/images/public:images:rudrakshas:/05_mukhi_rudraksha_regenerated.png", alt: "5 Mukhi Rudraksha Combo" }],
    badge: "Value Combo",
    shortDescription: "A complete spiritual set containing a natural 5 Mukhi bead, a wrist bracelet, and a chanting mala.",
    longDescription: ["A curated combination pack offering complete Shiva alignment. Includes one certified 5 Mukhi bead, a matching elasticated bracelet, and a full chanting mala.", "Purified in Kashi temples."],
    variants: [
      {
        id: "5mukhi-combo-default",
        name: "Standard",
        price: 849,
        originalPrice: 2699,
        badge: "69% OFF",
        suitableFor: "Altars, wearing, and starting japa practice",
        description: "5 Mukhi Rudraksha Combo Pack.",
        keyIncludes: ["Certified 5 Mukhi Bead", "Elastic wrist bracelet", "Full 108+1 Japa Mala"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "kashi-siddh-nepal-6-mukhi",
    title: "Kashi Siddh Nepal Origin 6 Mukhi Rudraksha - Certified",
    tagline: "Kartikeya Blessed Focus Bead",
    category: "Rudrakshas",
    tags: ["Rudraksha", "6 Mukhi", "Collector Bead", "Varanasi Sourced"],
    seoTitle: "Kashi Siddh Nepal Origin 6 Mukhi Rudraksha Bead | Kashi Prasad",
    metaDescription: "Buy certified Kashi Siddh Nepal 6 Mukhi Rudraksha bead. Sourced and blessed in Varanasi.",
    rating: 4.9,
    reviewsCount: 42,
    images: [{ src: "/images/public:images:rudrakshas:/06_mukhi_rudraksha_regenerated.png", alt: "Kashi Siddh Nepal 6 Mukhi Rudraksha" }],
    badge: "Kartikeya Siddh",
    shortDescription: "Premium large Nepal 6 Mukhi Rudraksha bead representing Lord Kartikeya for focus, willpower, and memory.",
    longDescription: ["Authentic Nepal 6 Mukhi Rudraksha bead, purified and energized under priest supervision in Varanasi.", "Arrives with certificate of authenticity. Improves concentration, focus, and willpower."],
    variants: [
      {
        id: "kashi-siddh-6mukhi-default",
        name: "Standard",
        price: 910,
        originalPrice: 1499,
        badge: "39% OFF",
        suitableFor: "Students, professionals, and willpower building",
        description: "Certified energized 6 Mukhi bead.",
        keyIncludes: ["Original Nepal 6 Mukhi Bead", "Vedic Temple Abhishekam Certificate"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Dispatched within 24 hours. Free Cash on Delivery across India."
  },
  {
    slug: "1-14-mukhi-siddh-mala",
    title: "1-14 Mukhi Siddh Rudraksha Mala",
    tagline: "Absolute Shiva Realization",
    category: "Rudrakshas",
    tags: ["Rudraksha", "Mala", "Collector Mala", "Siddh", "Varanasi Sourced"],
    seoTitle: "Premium 1-14 Mukhi Siddh Rudraksha Mala | Kashi Prasad",
    metaDescription: "Purchase the ultimate 1-14 Mukhi Siddh Rudraksha Mala. Made with certified collector-grade Nepal beads. Blessed in Kashi.",
    rating: 5.0,
    reviewsCount: 18,
    images: [{ src: "/images/public:images:rudrakshas:/14_mukhi_rudraksha_regenerated.png", alt: "1-14 Mukhi Siddh Rudraksha Mala" }],
    badge: "Ultimate Collector",
    shortDescription: "The ultimate power mala containing collector-grade Nepal Rudraksha beads from 1 to 14 Mukhi, with Gaurishankar and Ganesh beads.",
    longDescription: ["The ultimate spiritual treasure. This Siddh Mala brings together certified collector-grade Nepal Rudraksha beads from 1 to 14 Mukhi, arranged in thread with silver spacers.", "Purified by Kaal Bhairav temple priests in Varanasi with full rudrabhishek prayers."],
    variants: [
      {
        id: "siddh-mala-1-14-default",
        name: "Collector Grade",
        price: 159999,
        originalPrice: 228900,
        badge: "30% OFF",
        suitableFor: "Complete planetary balancing, altar install, and spiritual realization",
        description: "Certified 1-14 Mukhi Siddh Mala.",
        keyIncludes: ["Certified Nepal beads 1 to 14 Mukhi", "Gaurishankar & Ganesh beads included", "Independent Lab Authenticity Certificate", "Premium Velvet Box Packaging"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Insured Dispatch Direct from Varanasi",
    shippingText: "Dispatched via fully insured premium courier with tracking. Free delivery across India."
  }
];


// Programmatic generation of Mala products (15 items)
const malaProducts: Product[] = Array.from({ length: 15 }, (_, i) => {
  const idx = i + 1;
  const padIdx = String(idx).padStart(2, "0");
  return {
    slug: `mala-${padIdx}`,
    title: `${padIdx} Mala`,
    tagline: "Sacred Chanting Rosary",
    category: "Malas",
    tags: ["Mala", "Japa Rosary", "Varanasi Sourced", "Coming Soon"],
    seoTitle: `Sacred Mala ${padIdx} Sourced from Varanasi | Kashi Prasad`,
    metaDescription: `Authentic chanting rosary mala sourced and purified under priest supervision in Varanasi. Details coming soon.`,
    rating: null,
    reviewsCount: null,
    images: [
      {
        src: `/images/public:images:malas:/${padIdx}_mala_regenerated.png`,
        alt: `${padIdx} Mala`
      }
    ],
    badge: "Coming Soon",
    shortDescription: "Authentic, high-vibration sacred rosary mala directly sourced and purified under direct temple priest supervision in holy Varanasi. Details coming soon.",
    longDescription: ["Details coming soon."],
    variants: [
      {
        id: `mala-${padIdx}-default`,
        name: "Standard",
        price: null,
        originalPrice: null,
        badge: "Coming Soon",
        suitableFor: "Spiritual practice & meditation",
        description: "Details coming soon.",
        keyIncludes: ["Authentic Rosary", "Vedic Purification"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Details coming soon."
  };
});

// Programmatic generation of Ratna products (29 items)
const ratnaProducts: Product[] = Array.from({ length: 29 }, (_, i) => {
  const idx = i + 1;
  const padIdx = String(idx).padStart(2, "0");
  return {
    slug: `ratna-${padIdx}`,
    title: `${padIdx} Ratna`,
    tagline: "Sacred Altar Gemstone",
    category: "Ratnas",
    tags: ["Ratna", "Sacred Gemstone", "Varanasi Sourced", "Coming Soon"],
    seoTitle: `Sacred Ratna ${padIdx} Sourced from Varanasi | Kashi Prasad`,
    metaDescription: `Authentic sacred gemstone ratna sourced and purified under priest supervision in Varanasi. Details coming soon.`,
    rating: null,
    reviewsCount: null,
    images: [
      {
        src: `/images/public:images:ratnas:/${padIdx}_ratna_regenerated.png`,
        alt: `${padIdx} Ratna`
      }
    ],
    badge: "Coming Soon",
    shortDescription: "Authentic, high-vibration sacred gemstone ratna directly sourced and purified under direct temple priest supervision in holy Varanasi. Details coming soon.",
    longDescription: ["Details coming soon."],
    variants: [
      {
        id: `ratna-${padIdx}-default`,
        name: "Standard",
        price: null,
        originalPrice: null,
        badge: "Coming Soon",
        suitableFor: "Spiritual protection & planetary alignment",
        description: "Details coming soon.",
        keyIncludes: ["Authentic Gemstone", "Vedic Purification"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Details coming soon."
  };
});

// Programmatic generation of Shankh products (18 items)
const shankhProducts: Product[] = Array.from({ length: 18 }, (_, i) => {
  const idx = i + 1;
  const padIdx = String(idx).padStart(2, "0");
  return {
    slug: `shankh-${padIdx}`,
    title: `${padIdx} Shankh`,
    tagline: "Sacred Blowing Conch",
    category: "Shankhs",
    tags: ["Shankh", "Blowing Conch", "Varanasi Sourced", "Coming Soon"],
    seoTitle: `Sacred Shankh ${padIdx} Sourced from Varanasi | Kashi Prasad`,
    metaDescription: `Authentic sacred blowing conch shankh sourced and purified under priest supervision in Varanasi. Details coming soon.`,
    rating: null,
    reviewsCount: null,
    images: [
      {
        src: `/images/public:images:shankhs:/${padIdx}_sankh_regenerated.png`,
        alt: `${padIdx} Shankh`
      }
    ],
    badge: "Coming Soon",
    shortDescription: "Authentic, high-vibration sacred blowing conch shankh directly sourced and purified under direct temple priest supervision in holy Varanasi. Details coming soon.",
    longDescription: ["Details coming soon."],
    variants: [
      {
        id: `shankh-${padIdx}-default`,
        name: "Standard",
        price: null,
        originalPrice: null,
        badge: "Coming Soon",
        suitableFor: "Altar auspicious resonance",
        description: "Details coming soon.",
        keyIncludes: ["Authentic Conch", "Vedic Purification"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Details coming soon."
  };
});

const extraCategoriesData = [
  {
    category: "Temple Prasad",
    items: [
      { slug: "prasad-pedas", title: "Kashi Vishwanath Temple Peda Prasad", image: "/images/individual/pedas_prasad.jpg" },
      { slug: "prasad-bhabhuti", title: "Kaal Bhairav Temple Sacred Bhabhuti", image: "/images/temple_prasad_box.png" }
    ]
  },
  {
    category: "Gangajal",
    items: [
      { slug: "gangajal-copper", title: "Varanasi Mid-Stream Gangajal (Copper Vial)", image: "/images/individual/gangajal_bottle.jpg" },
      { slug: "gangajal-sangam", title: "Prayagraj Triveni Sangam Holy Water", image: "/images/individual/gangajal_bottle.jpg" }
    ]
  },
  {
    category: "Agarbatti",
    items: [
      { slug: "agarbatti-kasturi", title: "Sacred Kasturi Incense Sticks", image: "/images/individual/incense_sticks.jpg" },
      { slug: "agarbatti-dhoop", title: "Varanasi Sandalwood Dhoop Cones", image: "/images/individual/incense_sticks.jpg" }
    ]
  },
  {
    category: "Temple Accessories",
    items: [
      { slug: "acc-bell", title: "Brass Temple Bell (Nandi Engraved)", image: "/images/individual/brass_bell.jpg" },
      { slug: "acc-diya", title: "Brass Akhand Diya (Glass Cover)", image: "/images/individual/brass_diya.jpg" },
      { slug: "acc-incense", title: "Incense Stand (Brass Leaf Shape)", image: "/images/individual/incense_sticks.jpg" }
    ]
  },
  {
    category: "Copper Items",
    items: [
      { slug: "copper-kalash", title: "Pure Copper Kalash (Ganga Worship)", image: "/images/temple_prasad_box.png" },
      { slug: "copper-achamani", title: "Copper Panchpatra & Achamani Set", image: "/images/temple_prasad_box.png" }
    ]
  },
  {
    category: "Gift Boxes",
    items: [
      { slug: "giftbox-premium", title: "Kashi Prasad Premium Altar Gift Box", image: "/images/puja_kit_packaging.png" },
      { slug: "giftbox-festive", title: "Auspicious Festive Blessing Pack", image: "/images/puja_kit_packaging.png" }
    ]
  }
];

const extraProducts: Product[] = extraCategoriesData.flatMap((catData) =>
  catData.items.map((item) => ({
    slug: item.slug,
    title: item.title,
    tagline: `Sacred ${catData.category}`,
    category: catData.category,
    tags: [catData.category, "Varanasi Sourced", "Coming Soon"],
    seoTitle: `${item.title} Sourced from Varanasi | Kashi Prasad`,
    metaDescription: `Authentic ${item.title} sourced and purified under priest supervision in Varanasi. Details coming soon.`,
    rating: null,
    reviewsCount: null,
    images: [{ src: item.image, alt: item.title }],
    badge: "Coming Soon",
    shortDescription: `Authentic, high-vibration sacred ${catData.category.toLowerCase()} item directly sourced and purified under temple priest supervision in Varanasi. Details coming soon.`,
    longDescription: ["Details coming soon."],
    variants: [
      {
        id: `${item.slug}-default`,
        name: "Standard",
        price: null,
        originalPrice: null,
        badge: "Coming Soon",
        suitableFor: "Daily worship",
        description: "Details coming soon.",
        keyIncludes: ["Varanasi Sourced", "Vedic Sanctified"],
        detailedItems: []
      }
    ],
    specifications: [],
    faqs: [],
    shippingTitle: "Sacred Dispatch Direct from Varanasi",
    shippingText: "Details coming soon."
  }))
);

export const products: Product[] = initialProducts.concat(
  rudrakshaProducts,
  malaProducts,
  ratnaProducts,
  shankhProducts,
  extraProducts
);
