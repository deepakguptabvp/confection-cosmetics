import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-lvh">
      <section className="text-stone-600  body-font">
        <div className="container p-5">
          <div className="flex flex-wrap justify-evenly mx-auto my-auto">

            {/* All Color Items */}
            <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              {/* <Link href={'/cosmetics/garnier/garnier-1'}> */}
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center m-auto md:m-0 w-full h-full block"
                  src="/Garnier-1.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-5 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 1 Natural Black, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            {/* </Link> */}
            </div>

            <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Garnier-3.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-1 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 3 Darkest Brown, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            </div>

            <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Garnier-4.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-1 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 4 Brown, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            </div>

            <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Garnier-5.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-1 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 5 Light Brown, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            </div>


            {/* Added Extra to check the padding and style... */}
            <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Garnier-3.16.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-1 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 3.16 Burgundy, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            </div>

            <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Garnier-4.20.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-1 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 4.20 Vine Burgundy, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            </div>

            {/* <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Garnier-4.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-1 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 1 Natural Black, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            </div>

            <div className="lg:w-1/5 md:w-1/2 p-2 rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full shadow-2xl bg-white">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full  block"
                  src="/Garnier-5.jpg"
                  width={200}
                  height={200}
                />
              </a>

              <h2 className="text-stone-900 title-font text-sm mt-2 font-medium">
                Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness &
                Shine, Color Naturals, Shade: 1 Natural Black, 70ml + 60g
              </h2>
              <p className="mt-1 font-bold">MRP: ₹220</p>
            </div> */}

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
