import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import product from "../data/product";

function ProductDetails() {
const [selectedImage, setSelectedImage] = useState(product.images[0]);
const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
const [selectedColor, setSelectedColor] = useState(product.colors[0]);

console.log(product);
console.log(selectedImage);
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div>

              {/* Main Image */}
              <div className="rounded-3xl bg-[#111111] p-8">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="mx-auto h-[450px] object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-6 flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden rounded-2xl border-2 transition ${
                      selectedImage === image
                        ? "border-orange-500"
                        : "border-gray-700"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-24 w-24 object-contain bg-[#111111] p-2"
                    />
                  </button>
                ))}
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="rounded-3xl bg-[#111111] p-8">
              <p className="text-orange-500 font-semibold">{product.brand}</p>

              <h1 className="mt-2 text-4xl font-bold">
                {product.name}
              </h1>

              <p className="mt-4 text-3xl font-bold text-orange-500">
                ₦{product.price}
              </p>

           <div className="mt-4 flex items-center gap-4">
             <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
                {product.stock}
             </span>

           <span className="text-gray-400">
               {product.category}
           </span>
          </div>

            <p className="mt-6 leading-8 text-gray-300">
               {product.description}
            </p>
            <div className="mt-8">
            <h3 className="mb-3 font-semibold">Storage</h3>

          <div className="flex gap-3">
             {product.storage.map((storage) => (
         <button
             key={storage}
             onClick={() => setSelectedStorage(storage)}
             className={`rounded-lg border px-5 py-2 transition ${
             selectedStorage === storage
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-gray-600"
             }`}
         >
           {storage}
         </button>
           ))}
        </div>
         </div>
         <div className="mt-8">
  <h3 className="mb-3 font-semibold">Color</h3>

  <div className="flex gap-3 flex-wrap">
    {product.colors.map((color) => (
      <button
        key={color}
        onClick={() => setSelectedColor(color)}
        className={`rounded-lg border px-5 py-2 transition ${
          selectedColor === color
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-gray-600"
        }`}
      >
        {color}
      </button>
    ))}
  </div>
</div>
<div className="mt-8 rounded-xl bg-[#1a1a1a] p-4">
  <p>
    <span className="font-semibold">Selected Storage:</span>{" "}
    {selectedStorage}
  </p>

  <p className="mt-2">
    <span className="font-semibold">Selected Color:</span>{" "}
    {selectedColor}
  </p>
</div>
<a
  href={`https://wa.me/2348063562104?text=Hello, I'm interested in the ${product.name} (${selectedStorage}, ${selectedColor}).`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 flex w-full items-center justify-center rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
>
  Order on WhatsApp
</a>
          </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;