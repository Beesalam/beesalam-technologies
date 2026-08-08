import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function NotFoundPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A0A0A] pb-20 pt-28 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  404
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-3xl -z-10"></div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Page Not Found
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-lg text-gray-400">
              We couldn't find the page you're looking for. It might have been moved or deleted. Let's get you back on track.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                <FiHome size={20} />
                Go Home
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-orange-500 hover:bg-orange-500/10"
              >
                <FiSearch size={20} />
                Browse Products
              </Link>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-gray-300 transition hover:border-white hover:text-white"
              >
                <FiArrowLeft size={20} />
                Go Back
              </button>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              <Link 
              to="/"
              className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:border-orange-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                  <FiHome size={24} />
                </div>
                <h3 className="font-semibold text-white">Home</h3>
                <p
                className="mt-2 text-sm text-gray-400">
                  Return to the homepage
                </p>
              </Link>

              <Link
                to="/products"
               className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:border-orange-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                  <FiSearch size={24} />
                </div>
                <h3 className="font-semibold text-white">Products</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Explore our catalog
                </p>
              </Link>

              <Link
                to="/contact"
               className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:border-orange-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mx-auto">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Contact</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Get in touch with us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFoundPage;
