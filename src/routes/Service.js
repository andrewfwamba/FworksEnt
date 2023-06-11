import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

function Service() {
  const services = [
    {
      imageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Fireworks Entertainment DJs Services for hire",
      body: "We have the best DJs. Get premium entertainment from the experts.",
      href: "",
      button: "Hire a DJ",
    },
    {
      imageUrl: "",
      title: "Fireworks Entertainment Public address Services",
      body: "We have the public address systems. Instruments you can rely on.",
      href: "",
      button: "Book Now!",
    },
    {
      imageUrl: "",
      title: "Fireworks Entertainment Master of Ceremony",
      body: "Get professional MCs to steer your event. You can count on us",
      href: "",
      button: "Hire an MC",
    },
    {
      imageUrl: "",
      title: "Fireworks Ent Online Stop for great entertainment",
      body: "Up your mood today with amazing mixes from our online streams",
      href: "/listen",
      button: "Listen Now!",
    },
  ];
  return (
    <div className="bg-gray-200 p-3 lg:p-10 text-pink-800">
      <h4 className="font-bold text-xl mb-8 border-b border-pink-700">
        Our services
      </h4>
      <div>
        <div className="p-2 mb-10 border-l-4 border-pink-700">
          <p>
            If you are looking for Quality entertainment services then guess
            what!
          </p>
          <p>You are in the right place</p>
        </div>
      </div>
      {/* Cards */}
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-2 mb-10">
        {services.map((service, index) => (
          <div key={index} class="max-w-2xl mx-auto">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="text-gray-900 font-bold text-base xlg:text-2xl tracking-tight mb-2 dark:text-white">
                    {service.title}
                  </h5>
                </a>
                <p class="font-normal text-gray-700 mb-3 text-base dark:text-gray-400">
                  {service.body}
                </p>
                <Link
                  to={service.href}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {service.button}
                  <svg
                    class="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4 className="font-bold text-xl mb-8 border-b border-pink-700">
          Our DJ Academy
        </h4>
        <div>
          <div className="p-2 mb-10 border-l-4 border-pink-700">
            <p>Join our dj academy today</p>
            <p>Achieve your dj dreams</p>
          </div>
        </div>{" "}
        <div className="border border-pink-700 bg-pink-300 flex justify-center mx-auto rounded p-10">
          <Carousel className="w-[100px]" autoplay effect="fade">
            <div className="h-[70vh]">
              <h3 className="text-base font-bold text-gray-800">
                Showcased service 1
              </h3>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-600">2</h3>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-600">3</h3>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-600">4</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Service;
