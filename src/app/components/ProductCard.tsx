import Image from "next/image";
type ProductCardProps = {
  title: string;
  image: string;
};

export default function ProductCard({ title, image }: Readonly<ProductCardProps>) {
  return (
    <article
      className="bg-gradient-to-br from-white via-blue-50
    to-blue-100 dark:from-gray-900 dark:via-slate-800 dark:to-slate-
    900 rounded-2xl shadow-lg p-3 sm:p-6 flex flex-col items-center
    border border-blue-100 dark:border-slate-700 transition-
    transform hover:scale-[1.03] hover:shadow-xl"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48
    object-cover rounded-xl mb-3 sm:mb-5 shadow-md border border-
    blue-200 dark:border-slate-700"
      />
      <h3 className="mt-1 sm:mt-3 text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 text-center tracking-tight drop-shadow-sm">
        {title}
      </h3>
    </article>
  );
}
