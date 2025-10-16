import AddProductForm from "./AddProductForm";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Products
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Add New Product
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fill in the details below to add a new product to your store
          </p>
        </div>
        <AddProductForm />
      </div>
    </main>
  );
}
