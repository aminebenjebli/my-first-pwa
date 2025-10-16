"use client";
import React, { useState, useTransition } from "react";
import { updateProduct } from "@/app/actions/productActions";

type Props = {
  id: string;
  title?: string;
  image?: string;
  price?: number;
  description?: string;
};

export default function EditProductForm({
  id,
  title = "",
  image = "",
  price = 0,
  description = "",
}: Props) {
  const [isPending] = useTransition();
  const [imagePreview, setImagePreview] = useState<string | null>(
    image || null
  );

  return (
    <form
      method="post"
      action={updateProduct}
      className="mx-auto w-full max-w-4xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg"
      aria-label="Edit product form"
    >
      <input type="hidden" name="id" value={id} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image preview card */}
        <div className="col-span-1">
          <div className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-800 h-64 flex items-center justify-center border border-gray-100 dark:border-slate-700">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Product preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="text-center px-4">
                <svg
                  className="mx-auto mb-3 w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3l-4 4-4-4"
                  />
                </svg>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Paste an image URL in the field to preview
                </p>
              </div>
            )}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2">
              <input
                id="img"
                name="img"
                type="url"
                defaultValue={image}
                placeholder="https://example.com/image.jpg"
                onChange={(e) => setImagePreview(e.target.value || null)}
                className="flex-1 rounded-md border border-gray-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900/70 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Tip: use images under{" "}
            <code className="bg-gray-100 px-1 rounded">
              /public/Assets/images
            </code>{" "}
            for fast local hosting.
          </p>
        </div>

        {/* Fields */}
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Title
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="title"
                  name="title"
                  required
                  defaultValue={title}
                  placeholder="Wireless Headphones"
                  className="block w-full pr-10 rounded-md border border-gray-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  $
                </span>
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  required
                  defaultValue={price}
                  placeholder="0.00"
                  className="block w-full pl-8 rounded-md border border-gray-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              defaultValue={description}
              placeholder="Short description"
              className="mt-1 block w-full rounded-md border border-gray-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="submit"
              disabled={isPending}
              title="Update Product"
              aria-label="Update product"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-10 text-white hover:opacity-95 disabled:opacity-60 transition-all shadow-lg"
            >
              {isPending ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : (
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
