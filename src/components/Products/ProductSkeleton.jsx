function ProductSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-gray-800 bg-[#111111]">
      <div className="h-56 w-full bg-gray-800"></div>

      <div className="space-y-4 p-5">
        <div className="h-4 w-20 rounded bg-gray-700"></div>

        <div className="h-6 w-3/4 rounded bg-gray-700"></div>

        <div className="h-4 w-full rounded bg-gray-800"></div>

        <div className="h-4 w-2/3 rounded bg-gray-800"></div>

        <div className="mt-6 flex items-center justify-between">
          <div className="h-6 w-24 rounded bg-gray-700"></div>

          <div className="h-10 w-28 rounded-xl bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;