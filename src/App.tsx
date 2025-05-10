import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
        {/* Kiri: gambar */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img
            src="https://ext.same-assets.com/2167287346/3466014278.jpeg"
            alt="Profile with flowers"
            className="object-cover rounded-lg shadow-lg w-full max-w-md h-[450px]"
          />
        </div>
        {/* Kanan: Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl font-serif mb-8 text-black"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Get in touch
          </h1>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-600 mb-2" htmlFor="firstName">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-black"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-transparent mb-2">Last Name</label>
                <input
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-black"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-black"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="message">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                className="border border-gray-300 rounded-md p-3 w-full h-32 resize-none focus:outline-none focus:border-black"
                id="message"
                name="message"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-600 text-white px-8 py-2 rounded-md font-medium text-lg mt-2 hover:bg-gray-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
