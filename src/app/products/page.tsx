import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import { fetchAllProducts } from "@/app/actions/productActions";

export default async function ProductsPage() {
  const products = await fetchAllProducts();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Our Products
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse our collection of amazing products
            </p>
          </div>
          <Link
            href="/products/new"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors shadow-md"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Product
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
              No products found. Start by adding your first product!
            </p>
            <Link
              href="/products/new"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors shadow-md"
            >
              Add Your First Product
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product._id}
                href={`/products/${product._id}`}
                className="group"
              >
                <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <ProductCard title={product.title} image={product.img} />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
