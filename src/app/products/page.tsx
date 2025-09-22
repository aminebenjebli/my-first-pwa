"use client";
import ProductCard from "@/app/components/ProductCard";
import { useRouter } from "next/navigation";
const products = [
  { id: 1, title: "Headphone", img: "/Assets/images/headphone.jpg" },
  { id: 2, title: "Laptop", img: "/Assets/images/laptop.jpg" },
  { id: 3, title: "Smartphone", img: "/Assets/images/smartphone.jpg" },
  { id: 4, title: "Smartwatch", img: "/Assets/images/smartwatch.jpg" },
  { id: 5, title: "Tablet", img: "/Assets/images/tablet.jpg" },
];
export default function ProductsPage() {
  const router = useRouter();
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-
    blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-
    slate-800 dark:to-slate-900 py-6 px-2 sm:px-6"
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-1
    sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-
            center"
          >
            <ProductCard title={product.title} image={product.img} />
            <button
              className="mt-4 w-full sm:w-auto px-6 py-2
            rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-
            white font-semibold shadow hover:from-blue-700 hover:to-indigo-
            600 transition-all text-base tracking-wide"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
