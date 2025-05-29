import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/contact", formData);
      toast.success(res.data.message || "Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      const msg = err.response?.data?.error || "Error sending message.";
      toast.error(msg);
    }
  };

  return (
    <div className="bg-gray-400 w-[100vw] h-[100vh] inset-0 z-auto overflow-hidden">
      <div className="relative max-w-xl mx-auto shadow-xl rounded-2xl  mb-10">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 py-6">
          <img
            src="/latest.png"
            alt="Contact Background"
            className="w-[46rem] h-10 object-cover"
          />
          <div className="absolute inset-0 opacity-5 rounded-2xl backdrop-blur-sm" />
        </div>

        {/* Foreground Form Content */}
        <div className="relative z-10 rounded-2xl p-6 ">
          <h2 className="text-3xl font-bold mb-4 text-center text-red-600 ">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-2  flex flex-col items-center"
          >
            <input
              className="w-[26rem] p-3 mx-10 border rounded-lg"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-[26rem] p-3 mx-10 border rounded-lg"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-[26rem] p-3 mx-10 border rounded-lg"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-5 py-2 w-[26rem] mx-10 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}

export default ContactForm;
