import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Admin Pages
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import AdminProducts from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct";
import EditProduct from "./admin/pages/EditProduct";
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route
         path="/admin/dashboard"
         element={
         <ProtectedRoute>
         <Dashboard />
         </ProtectedRoute>
           }
        />
         <Route
          path="/admin/products"
          element={
         <ProtectedRoute>
         <AdminProducts />
        </ProtectedRoute>
          }
        />     
         <Route
         path="/admin/products/add"
         element={
         <ProtectedRoute>
         <AddProduct />
         </ProtectedRoute>
          }
        />
        <Route
        path="/admin/products/edit/:id"
        element={
       <ProtectedRoute>
       <EditProduct />
       </ProtectedRoute>
         }
       />
      </Routes>
    </BrowserRouter>
  );
}

export default App;