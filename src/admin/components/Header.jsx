import { useState } from "react";
import {
  FiBell,
  FiMenu,
  FiSearch,
  FiLogOut,
  FiSettings,
  FiUser,
  FiX,
  FiCheck,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut,} from "firebase/auth";

const Header = ({ setSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const getPageTitle = () => {
    if (location.pathname.includes("/products")) return "Products";
    if (location.pathname.includes("/orders")) return "Orders";
    if (location.pathname.includes("/customers")) return "Customers";
    if (location.pathname.includes("/settings")) return "Settings";
    if (location.pathname.includes("/messages")) return "Messages";
    return "Dashboard";
  };

  const getPageIcon = () => {
    if (location.pathname.includes("/products")) return "📦";
    if (location.pathname.includes("/orders")) return "🛒";
    if (location.pathname.includes("/customers")) return "👥";
    if (location.pathname.includes("/settings")) return "⚙️";
    if (location.pathname.includes("/messages")) return "💬";
    return "📊";
  };

  // Mock notifications
  const notifications = [
    { id: 1, message: "New order received", time: "2 mins ago", icon: "🛍️", read: false },
    { id: 2, message: "New customer message", time: "15 mins ago", icon: "💬", read: false },
    { id: 3, message: "Product inventory low", time: "1 hour ago", icon: "⚠️", read: true },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const logout = async () => {
    try{
       await signOut(auth);
    navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Left Section */}
        <div className="flex flex-1 items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white transition hover:bg-orange-600 lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>

          {/* Page Title */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{getPageIcon()}</span>
              <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                {getPageTitle()}
              </h1>
            </div>
            <p className="hidden text-sm text-gray-500 sm:block">
              Welcome back, Admin 👋
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Search Bar - Desktop */}
          <div className="hidden xl:flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 transition hover:bg-white hover:border-gray-300">
            <FiSearch className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products, orders..."
              className="w-56 bg-transparent text-sm outline-none placeholder-gray-400"
            />
          </div>

          {/* Search Button - Mobile */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-200"
            aria-label="Search"
          >
            <FiSearch size={18} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                setProfileOpen(false);
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-200"
              aria-label="Notifications"
            >
              <FiBell size={18} />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-200/50">
                <div className="border-b border-gray-100 px-4 py-3">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`flex items-start gap-3 border-b border-gray-50 px-4 py-3 transition hover:bg-gray-50 ${
                          !notif.read ? "bg-orange-50/30" : ""
                        }`}
                      >
                        <span className="text-xl">{notif.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {notif.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notif.time}
                          </p>
                        </div>
                        {!notif.read && (
                          <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center text-sm text-gray-500">
                      No notifications
                    </div>
                  )}
                </div>
                <div className="border-t border-gray-100 px-4 py-3 text-center">
                  <button className="text-sm font-medium text-orange-600 transition hover:text-orange-700">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotificationsOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-gray-100"
              aria-label="Profile menu"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white">
                A
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-900">
                  Administrator
                </p>
                <p className="text-xs text-gray-500">
                  Admin Account
                </p>
              </div>
            </button>

            {/* Profile Dropdown Menu */}
            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-200/50">
                <div className="border-b border-gray-100 px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Administrator</p>
                  <p className="text-xs text-gray-500 mt-1">admin@beesalam.com</p>
                </div>

                <div className="px-2 py-2">
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
                    <FiUser size={16} />
                    <span>View Profile</span>
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
                    <FiSettings size={16} />
                    <span>Account Settings</span>
                  </button>
                </div>

                <div className="border-t border-gray-100 px-2 py-2">
                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                  >
                    <FiLogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
            <FiSearch className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Overlay for mobile dropdowns */}
      {(notificationsOpen || profileOpen || searchOpen) && (
        <div
          className="fixed inset-0 z-20 md:hidden"
          onClick={() => {
            setNotificationsOpen(false);
            setProfileOpen(false);
            setSearchOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;