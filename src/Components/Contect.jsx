import React from "react";


const Contect = () => {
  return (
    <section className="bg-neutral-950 flex flex-col justify-center items-center text-neutral-100 py-16 px-6">
      <h4 className="text-[15px] text-center text-neutral-300 font-medium">
        GET IN TOUCH
      </h4>
      <h2 className="text-3xl md:text-5xl font-semibold pt-2 mb-6 md:mb-10 text-neutral-100">
        Contact Me
      </h2>

      <div className="w-full sm:max-w-2xl md:max-w-3xl border border-neutral-600 p-4 md:p-8 rounded-2xl shadow-md text-neutral-100">
        <div className="flex max-md:flex-col sm:w-xl md:w-2xl gap-4">
          <a
            href="mailto:rajendrasinghraorajendrasingh@gmail.com"
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sm"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            rajendrasinghraorajendrasingh@gmail.com
          </a>

          <a
            href="https://wa.me/916378059246?text=Hi!%20I'm%20interested%20in%20working%20with%20you.%20Can%20we%20chat%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="text-sm"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <p className="p-6 text-neutral-300 text-xs font-medium text-center">
          Or send a message
        </p>

        <form
          action="https://formsubmit.co/rajendrasinghraorajendrasingh@gmail.com"
          method="POST"
          className="w-full space-y-4"
        >
          <div className="space-y-1">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-neutral-950 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium border border-neutral-600 flex justify-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
