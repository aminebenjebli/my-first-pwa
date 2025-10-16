import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchProduct } from "@/app/actions/productActions";
import DeleteButton from "./DeleteButton";
import ProductEditSection from "./ProductEditSection";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProduct(id);
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
        <div className="relative rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
          {/* Back button overlay on top-left of image */}
          <div className="absolute top-3 left-3 z-20">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white shadow-sm hover:opacity-90"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
          </div>

          {/* action buttons moved under description (rendered below the description) */}

          <div className="w-full h-96 md:h-[28rem]">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold mb-2 text-blue-900 dark:text-blue-200 text-center tracking-tight drop-shadow-sm">
          {product.title}
        </h1>
        <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
          {product.description}
        </p>

        {/* Centered action row: Add, Edit, Delete */}
        <div className="w-full mb-6 flex items-center justify-center gap-4">
          <Link
            href="/products/new"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 w-10 h-10 text-white hover:opacity-90 transition-shadow shadow-md"
            aria-label="Add new product"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>

          {/* edit anchor removed - ProductEditSection provides the edit toggle */}

          <DeleteButton productId={product._id} />
        </div>

        {/* Edit Form Section with Toggle */}
        <ProductEditSection
          productId={product._id}
          title={product.title}
          image={product.img}
          price={product.price}
          description={product.description}
        />
      </section>
    </main>
  );
}
