import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full dark:bg-gray-700 cursor-pointer">
          <ChevronLeft className="w-6 h-6" />
        </button>

        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full dark:bg-gray-700 border border-primary-700 dark:border-gray-700 cursor-pointer"
          >
            {index + 1}
          </button>
        ))}

        <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full dark:bg-gray-700 cursor-pointer">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
