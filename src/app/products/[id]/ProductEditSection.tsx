"use client";
import { useState } from "react";
import EditProductForm from "./EditProductForm";

type Props = {
  productId: string;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function ProductEditSection({
  productId,
  title,
  image,
  price,
  description,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full">
      {/* Toggle Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          aria-label={isEditing ? "Cancel edit" : "Edit product"}
          className={`inline-flex items-center justify-center rounded-full w-10 h-10 transition-colors shadow-md ${
            isEditing
              ? "bg-gray-500 hover:bg-gray-600 text-white"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isEditing ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Edit Form - shown when isEditing is true */}
      {isEditing && (
        <div className="w-full animate-fade-in">
          <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 text-center">
            Update Product Details
          </h2>
          <EditProductForm
            id={productId}
            title={title}
            image={image}
            price={price}
            description={description}
          />
        </div>
      )}
    </div>
  );
}
