import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiTrash2,
  FiEye,
  FiX,
  FiMail,
  FiPhone,
  FiUser,
  FiCalendar,
} from "react-icons/fi";

import AdminLayout from "../layouts/AdminLayout";
import {
  getMessages,
  deleteMessage,
} from "../services/contactService";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stores the message currently being viewed
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch Messages
  const fetchMessages = async () => {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load messages.");
    } finally {
      setLoading(false);
    }
  };

  // Delete Message
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMessage(id);

      setMessages((prev) =>
        prev.filter((message) => message.id !== id)
      );

      // Close modal if the deleted message is currently open
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }

      toast.success("Message deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete message.");
    }
  };

  // Format Firestore timestamp
  const formatDate = (timestamp) => {
    if (!timestamp?.toDate) {
      return "-";
    }

    return timestamp.toDate().toLocaleString();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Messages
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Total Messages:{" "}
            <span className="font-semibold text-orange-500">
              {messages.length}
            </span>
          </p>
        </div>

        {/* Messages Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700">
                  <th className="px-6 py-4">
                    Name
                  </th>

                  <th className="px-6 py-4">
                    Email
                  </th>

                  <th className="px-6 py-4">
                    Phone
                  </th>

                  <th className="px-6 py-4">
                    Subject
                  </th>

                  <th className="px-6 py-4">
                    Message
                  </th>

                  <th className="px-6 py-4">
                    Date
                  </th>

                  <th className="px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-12 text-center text-gray-500"
                    >
                      Loading messages...
                    </td>
                  </tr>
                ) : messages.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-12 text-center text-gray-500"
                    >
                      No messages found.
                    </td>
                  </tr>
                ) : (
                  messages.map((message) => (
                    <tr
                      key={message.id}
                      className="border-t transition hover:bg-gray-50"
                    >
                      {/* Name */}
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {message.name}
                      </td>

                      {/* Email */}
                      <td className="px-6 py-4 text-gray-600">
                        {message.email}
                      </td>

                      {/* Phone */}
                      <td className="px-6 py-4 text-gray-600">
                        {message.phone}
                      </td>

                      {/* Subject */}
                      <td className="px-6 py-4 text-gray-600">
                        {message.subject}
                      </td>

                      {/* Message Preview */}
                      <td className="max-w-xs px-6 py-4">
                        <p className="line-clamp-2 text-gray-600">
                          {message.message}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(message.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          {/* View */}
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedMessage(message)
                            }
                            className="text-blue-600 transition hover:text-blue-800"
                            title="View Message"
                          >
                            <FiEye size={19} />
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(message.id)
                            }
                            className="text-red-600 transition hover:text-red-800"
                            title="Delete Message"
                          >
                            <FiTrash2 size={19} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-4 p-4 lg:hidden">
            {loading ? (
              <div className="py-10 text-center text-gray-500">
                Loading messages...
              </div>
            ) : messages.length === 0 ? (
              <div className="py-10 text-center text-gray-500">
                No messages found.
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {message.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {message.subject}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedMessage(message)}
                        className="rounded-lg bg-blue-50 p-2 text-blue-600"
                        title="View Message"
                      >
                        <FiEye size={17} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(message.id)}
                        className="rounded-lg bg-red-50 p-2 text-red-600"
                        title="Delete Message"
                      >
                        <FiTrash2 size={17} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p className="break-all">
                      <span className="font-medium text-gray-500">Email:</span>{" "}
                      {message.email}
                    </p>
                    <p>
                      <span className="font-medium text-gray-500">Phone:</span>{" "}
                      {message.phone}
                    </p>
                    <p className="line-clamp-3">
                      <span className="font-medium text-gray-500">Message:</span>{" "}
                      {message.message}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-gray-200 pt-3 text-xs text-gray-500">
                    {formatDate(message.createdAt)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Details Modal */}
        {selectedMessage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedMessage(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
              >
                <FiX size={22} />
              </button>

              {/* Modal Heading */}
              <div className="mb-8 pr-12">
                <h2 className="text-2xl font-bold text-gray-800">
                  Customer Message
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Contact form enquiry details
                </p>
              </div>

              {/* Customer Information */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <FiUser />

                    <span>
                      Customer
                    </span>
                  </div>

                  <p className="font-semibold text-gray-800">
                    {selectedMessage.name}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <FiMail />

                    <span>
                      Email
                    </span>
                  </div>

                  <p className="break-all font-semibold text-gray-800">
                    {selectedMessage.email}
                  </p>
                </div>

                {/* Phone */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <FiPhone />

                    <span>
                      Phone
                    </span>
                  </div>

                  <p className="font-semibold text-gray-800">
                    {selectedMessage.phone}
                  </p>
                </div>

                {/* Date */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <FiCalendar />

                    <span>
                      Received
                    </span>
                  </div>

                  <p className="font-semibold text-gray-800">
                    {formatDate(
                      selectedMessage.createdAt
                    )}
                  </p>
                </div>
              </div>

              {/* Subject */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500">
                  Subject
                </p>

                <h3 className="mt-2 text-lg font-bold text-gray-800">
                  {selectedMessage.subject}
                </h3>
              </div>

              {/* Full Message */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500">
                  Message
                </p>

                <div className="mt-2 max-h-60 overflow-y-auto rounded-2xl bg-gray-50 p-5">
                  <p className="whitespace-pre-wrap break-words leading-7 text-gray-700">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedMessage(null)
                  }
                  className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleDelete(selectedMessage.id)
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
                >
                  <FiTrash2 />

                  Delete Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Messages;