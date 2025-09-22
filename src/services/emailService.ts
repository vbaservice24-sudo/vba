import emailjs from "@emailjs/browser";

export interface BreakdownRequestData {
  id: string;
  name: string;
  phone: string;
  email: string;
  vehicleType: string;
  issueDescription: string;
  location: string;
  timestamp: string;
}

const SERVICE_ID = "service_cel88cp";
const TEMPLATE_ID = "template_mvu90qj";
const PUBLIC_KEY = "J6x9uDVdIYO2GXLUW"; // from EmailJS dashboard

export const EmailService = {
  sendStatusUpdate: async (data: BreakdownRequestData, status: "accepted" | "rejected") => {
    const message = status === "accepted"
      ? `Hi ${data.name},\n\nYour breakdown request has been accepted. Help is on the way!`
      : `Hi ${data.name},\n\nYour breakdown request has been rejected. Please contact support for assistance.`;

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: data.email,
      to_name: data.name,
      message: message,
    }, PUBLIC_KEY);
  }
};
