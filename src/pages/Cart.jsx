import { Link } from "react-router-dom";
import { FiArrowLeft, FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import useCartStore from "../store/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.totalItems());
  const totalPrice = useCartStore((state) => state.totalPrice());

  const formatPrice = (price) => `₦${Number(price).toLocaleString()}`;

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  const handleCheckout = () => {
    const itemsText = cart
      .map((item) => `- ${item.name} x${item.quantity}`)
      .join("\n");

    const message = encodeURIComponent(
      `Hello, I would like to place an order for the following items:\n\n${itemsText}\n\nTotal items: ${totalItems}\nTotal: ₦${Number(totalPrice).toLocaleString()}`
    );

    window.open(`https://wa.me/2348063562104?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A0A0A] pb-20 pt-28 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                Shopping cart
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                Your selected products
              </h1>
              <p className="mt-2 text-gray-400">
                {totalItems > 0
                  ? `${totalItems} item${totalItems > 1 ? "s" : ""} ready for checkout`
                  : "Your cart is empty right now"}
              </p>
            </div>

            {cart.length > 0 && (
              <button
                type="button"
                onClick={handleClearCart}
                className="flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-red-500 hover:text-red-400"
              >
                <FiTrash2 />
                Clear cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                <FiShoppingBag size={28} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white">
                Your cart is empty
              </h2>
              <p className="mx-auto mt-3 max-w-md text-gray-400">
                Add a few products from our catalog and come back here to review your order.
              </p>
              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                <FiArrowLeft />
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#111111] p-4 shadow-2xl shadow-black/10 sm:flex-row sm:items-center sm:p-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full rounded-2xl border border-white/10 bg-white/5 object-contain p-3 sm:w-28"
                    />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            {item.brand}
                          </p>
                          <h3 className="mt-1 text-xl font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-lg font-semibold text-orange-500">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-red-400"
                          title="Remove item"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <FiMinus size={16} />
                          </button>

                          <span className="min-w-8 text-center font-semibold text-white">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <FiPlus size={16} />
                          </button>
                        </div>

                        <p className="text-lg font-semibold text-white">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="rounded-3xl border border-orange-500/20 bg-[#111111] p-6 shadow-2xl shadow-black/20">
                <h2 className="text-2xl font-semibold text-white">Order summary</h2>

                <div className="mt-6 space-y-3 border-b border-white/10 pb-6 text-sm text-gray-300">
                  <div className="flex items-center justify-between">
                    <span>Items</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span className="text-green-400">Free</span>
                  </div> */}
                </div>

                <div className="mt-6 flex items-center justify-between text-lg font-semibold text-white">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Checkout securely through WhatsApp and we will confirm your order instantly.
                </p>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="mt-6 w-full rounded-2xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Checkout on WhatsApp
                </button>

                <div className="mb-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                 <p className="text-sm text-green-400">
                   ✅ Delivery available nationwide.
                 </p>

               <p className="mt-2 text-sm text-gray-300">
                  We will contact you on WhatsApp to confirm your order, verify availability, and arrange delivery.
               </p>
              </div>

                <Link
                  to="/products"
                  className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-300 transition hover:border-orange-500 hover:text-orange-400"
                >
                  <FiArrowLeft />
                  Continue shopping
                </Link>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
