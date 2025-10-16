"use server";

import { redirect } from "next/navigation";
import { connectToDb } from "@/app/utils/mongodb";
import Product from "@/app/models/product.models";
import mongoose from "mongoose";

export async function fetchProduct(id: string) {
  await connectToDb();
  if(!mongoose.Types.ObjectId.isValid(id)) return null;
  const product: any = await Product.findById(id).lean();
  if (!product) return null;
  return {
    _id: product._id.toString(),
    title: product.title as string,
    img: product.img as string,
    price: product.price as number,
    description: product.description as string,
  };
}

export async function fetchAllProducts() {
  await connectToDb();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  return products.map((p: any) => ({
    _id: p._id.toString(),
    title: p.title,
    img: p.img,
    price: p.price,
    description: p.description,
  }));
}

export async function addProduct(fromData: FormData) {
  const title = (fromData.get("title") as string) || "";
  const img = (fromData.get("img") as string) || "";
  const price = Number(fromData.get("price")) || 0;
  const description = (fromData.get("description") as string) || "";

  if (!title || title.trim().length < 2)
    throw new Error(
      "Title is required and should be at least 2 characters long"
    );
  if (price <= 0) throw new Error("Price should be a positive number");
  await connectToDb();
  const doc = await Product.create({
    title,
    img,
    price,
    description,
  });
  console.log("New Product Added", doc);
  redirect(`/products/${doc._id}`);
}

export async function updateProduct(fromData: FormData) {
  const id = (fromData.get("id") as string) || "";
  if (!id) throw new Error("Product ID is required");
  const title = (fromData.get("title") as string) || "";
  const img = (fromData.get("img") as string) || "";
  const price = Number(fromData.get("price")) || 0;
  const description = (fromData.get("description") as string) || "";

  if (!title || title.trim().length < 2)
    throw new Error(
      "Title is required and should be at least 2 characters long"
    );
  if (price <= 0) throw new Error("Price should be a positive number");
  await connectToDb();
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      title,
      img,
      price,
      description,
    },
    { new: true }
  );
  console.log("Product Updated", updatedProduct);
  if (!updatedProduct) throw new Error("Couldn't update the product");
  redirect(`/products/${id}`);
}

export async function deleteProduct(id: string) {
  await connectToDb();
  const doc = await Product.findByIdAndDelete(id);
  console.log("Product Deleted", doc);
  redirect(`/products`);
}
