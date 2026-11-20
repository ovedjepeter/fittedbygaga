// EDIT THESE SAMPLE PRODUCTS: change names, categories, prices and photo URLs.
const products = [
  {
    id: 1,
    name: "The Amara Dress",
    category: "Dresses",
    price: 28500,
    label: "Bestseller",
    image: "https://WhatsApp Image 2026-09-20 at 22.08.39.jpeg",
  },
  {
    id: 2,
    name: "Soft Muse Top",
    category: "Tops",
    price: 16500,
    label: "New",
    image: "https://WhatsApp Image 2026-09-20 at 22.08.40.jpeg",
  },
  {
    id: 3,
    name: "The Sunday Set",
    category: "Sets",
    price: 32000,
    label: "Just in",
    image: "https://WhatsApp Image 2026-09-20 at 22.10.32.jpeg",
  },
  {
    id: 4,
    name: "Rosé Evening Dress",
    category: "Dresses",
    price: 35000,
    label: "Editor's pick",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85",
  },
];
let cart = [];
let activeFilter = "All";
const naira = (amount) => "₦" + amount.toLocalString("en-HG");

function renderProducts() {}
