import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

const productsCollection = collection(db, "products");

// Add Product
export const addProduct = async (product) => {
  const docRef = await addDoc(productsCollection, {
    ...product,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

// Get All Products
export const getProducts = async () => {
  const q = query(productsCollection, orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Get Single Product
export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Product not found");
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

// Update Product
export const updateProduct = async (id, product) => {
  const docRef = doc(db, "products", id);

  await updateDoc(docRef, {
    ...product,
    updatedAt: serverTimestamp(),
  });
};

// Delete Product
export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
};

// Get Product Statistics
export const getProductStats = async () => {
  const products = await getProducts();

  const totalProducts = products.length;

  const lowStock = products.filter(
    (product) => product.stock > 0 && product.stock <= 5
  ).length;

  const outOfStock = products.filter(
    (product) => product.stock === 0
  ).length;

  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );

  return {
    totalProducts,
    lowStock,
    outOfStock,
    inventoryValue,
  };
};

// Get Recent Products
export const getRecentProducts = async (limitCount = 5) => {
  const products = await getProducts();

  return products.slice(0, limitCount);
};