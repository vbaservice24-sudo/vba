import { EmailService } from "./EmailService";

const dummyRequest = {
  id: "123",
  name: "Varun",
  phone: "07708099203",
  email: "recipient@example.com",
  vehicleType: "Car",
  issueDescription: "Engine overheating",
  location: "Coimbatore",
  timestamp: new Date().toISOString(),
};

EmailService.sendCustomerConfirmation(dummyRequest);
