"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import emailjs from "@emailjs/browser";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    issueDescription: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save request to Firestore
      const docRef = await addDoc(collection(db, "requests"), {
        ...formData,
        status: "pending",
        timestamp: serverTimestamp(),
      });

      // Send confirmation email via EmailJS
      await emailjs.send(
        "service_nvtcwu5",
        "template_jokq6on",
        {
          to_name: formData.name,
          to_email: formData.email,
          vehicle_type: formData.vehicleType,
          issue_description: formData.issueDescription,
        },
        "LGyfiOdRqhToAaM_M" // replace with your EmailJS public key
      );

      alert("Request submitted and confirmation email sent!");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        vehicleType: "",
        issueDescription: "",
        location: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4 border rounded-lg shadow">
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="text" name="vehicleType" placeholder="Vehicle Type" value={formData.vehicleType} onChange={handleChange} required className="w-full border p-2 rounded" />
      <textarea name="issueDescription" placeholder="Issue Description" value={formData.issueDescription} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full border p-2 rounded" />
      <button type="submit" className={`w-full py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`} disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
};

export default RequestForm;
