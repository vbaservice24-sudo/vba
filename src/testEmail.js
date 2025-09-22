// src/testEmail.ts
import { EmailService, BreakdownRequestData } from './emailService';

const request: BreakdownRequestData = {
  id: '12345',
  name: 'Varun A',
  phone: '+91 9876543210',
  email: 'yourtestmail@example.com', // 👈 replace with your test email
  vehicleType: 'Car',
  issueDescription: 'Engine not starting',
  location: 'Bangalore, India',
  timestamp: new Date().toLocaleString(),
};

(async () => {
  await EmailService.sendAdminNotification(request);
  await EmailService.sendCustomerConfirmation(request);
})();
