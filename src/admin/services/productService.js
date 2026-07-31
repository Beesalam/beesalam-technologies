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