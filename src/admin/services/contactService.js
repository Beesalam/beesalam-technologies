import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

const messagesCollection = collection(db, "messages");

// Add Message
export const addMessage = async (message) => {
  const docRef = await addDoc(messagesCollection, {
    ...message,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

// Get Messages
export const getMessages = async () => {
  const q = query(
    messagesCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Delete Message
export const deleteMessage = async (id) => {
  await deleteDoc(doc(db, "messages", id));
};