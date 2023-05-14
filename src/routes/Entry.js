import React from "react";

function Entry() {
  return (
    <>
      <div className="h-10 w-full bg-white ">
        {" "}
        <h1 class="bg-gradient-to-r my-4 mx-8 from-black via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl">
          Fireworks Entertainment.
        </h1>
      </div>

      <section class="relative bg-[url(https://unsplash.com/photos/2Rtc0Cdhmc4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZGolMjBtaXhpbmd8ZW58MHx8fHwxNjgzOTE5NDA1fDA&force=true&w=1920)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center bg-gradient-to-r from-white via-pink-400 to-transparent px-20 rounded py-10 ltr:sm:text-left rtl:sm:text-right">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-rose-700">
                Best Jams.
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Fireworks Entertainment.
              <span class="sm:block"> Increase Conversion. </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Entry;
