import { notFound } from "next/navigation";
const products = [
  {
    id: 1,
    title: "Headphone",
    img: "/Assets/images/headphone.jpg",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
  },
  {
    id: 2,
    title: "Laptop",
    img: "/Assets/images/laptop.jpg",
    description:
      "Powerful laptop for work and play, featuring a sleek design and fast performance.",
  },
  {
    id: 3,
    title: "Smartphone",
    img: "/Assets/images/smartphone.jpg",
    description:
      "Latest smartphone with stunning display, great camera, and all-day battery.",
  },
  {
    id: 4,
    title: "Smartwatch",
    img: "/Assets/images/smartwatch.jpg",
    description:
      "Track your fitness and stay connected with this stylish smartwatch.",
  },
  {
    id: 5,
    title: "Tablet",
    img: "/Assets/images/tablet.jpg",
    description:
      "Portable tablet perfect for reading, streaming, and productivity on the go.",
  },
];
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) return notFound();
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-blue-50
        via-white to-blue-100 dark:from-slate-900 dark:via-slate-800
        dark:to-slate-900 flex flex-col items-center justify-center py-10 px-2"
    >
      <section
        className="max-w-xl w-full mx-auto p-6 flex flex-col items-center bg-white/90 dark:bg-slate-900/90 rounded-2xl
        shadow-xl border border-blue-100 dark:border-slate-700"
      >
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-56 object-cover rounded-xl mb-6
        shadow border border-blue-200 dark:border-slate-700"
        />
        <h1 className="text-3xl font-extrabold mb-2 text-blue-900 dark:text-blue-200 text-center tracking-tight drop-shadow-sm">
          {product.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
          {product.description}
        </p>
        <button
          className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold shadow
            hover:from-blue-700 hover:to-indigo-600 transition-all text-lg
            tracking-wide"
        >
          Buy Now
        </button>
      </section>
    </main>
  );
}
