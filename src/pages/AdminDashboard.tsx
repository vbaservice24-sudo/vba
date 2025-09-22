"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  MapPin, 
  Phone, 
  Mail,
  Image,
  Loader2,
  LogOut,
  Settings
} from "lucide-react";

import { db } from "@/firebase";
import { collection, onSnapshot, query, orderBy, doc, updateDoc, where } from "firebase/firestore";

import emailjs from "@emailjs/browser";

interface BreakdownRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  vehicleType: string;
  issueDescription: string;
  location: string;
  photo?: string;
  status: "pending" | "accepted" | "rejected";
  timestamp: string;
}

const AdminDashboard = () => {
  const [requests, setRequests] = useState<BreakdownRequest[]>([]);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // ------------------- Firestore listener -------------------
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("vba_admin_auth");
    if (!isAuthenticated) {
      navigate("/admin");
      return;
    }

    const q = query(collection(db, "requests"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reqs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BreakdownRequest[];
      setRequests(reqs);
    });

    return () => unsubscribe();
  }, [navigate]);

  // ------------------- Logout -------------------
  const handleLogout = () => {
    localStorage.removeItem("vba_admin_auth");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/admin");
  };

  // ------------------- Filtered Requests by Date -------------------
  const filteredRequests = requests.filter(req => {
    if (!startDate && !endDate) return true;
    const ts = new Date(req.timestamp).getTime();
    const startTs = startDate ? new Date(startDate).getTime() : 0;
    const endTs = endDate ? new Date(endDate).getTime() + 24*60*60*1000 : Infinity; // include full day
    return ts >= startTs && ts <= endTs;
  });

  // ------------------- Update Request Status -------------------
  const handleStatusUpdate = async (request: BreakdownRequest, newStatus: "accepted" | "rejected") => {
    setProcessingId(request.id);

    try {
      // Send email using EmailJS
      const templateParams = {
        email: request.email,
        reply_to: "vbaservice24@gmail.com",
        message: `Hi ${request.name}, your breakdown request has been ${newStatus}.`
      };

      await emailjs.send(
        "service_cel88cp",
        "template_mvu90qj",
        templateParams,
        "J6x9uDVdIYO2GXLUW"
      );

      // Update Firestore
      const requestRef = doc(db, "requests", request.id);
      await updateDoc(requestRef, { status: newStatus });

      toast({ title: `Request ${newStatus}`, description: "Status updated and email sent." });

    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Update failed",
        description: "Error sending email or updating status.",
        variant: "destructive",
      });
    } finally {
      setProcessingId(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "accepted": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "rejected": return "bg-red-500/20 text-red-500 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };

  const pendingCount = requests.filter(r => r.status === "pending").length;
  const acceptedCount = requests.filter(r => r.status === "accepted").length;
  const rejectedCount = requests.filter(r => r.status === "rejected").length;

  // ------------------- JSX -------------------
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-workshop-orange">VBA Admin Dashboard</h1>
            <p className="text-muted-foreground">Vehicle Breakdown Assistant Management</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm"><Settings className="w-4 h-4 mr-2" />Settings</Button>
            <Button onClick={handleLogout} variant="outline" size="sm"><LogOut className="w-4 h-4 mr-2" />Logout</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Date Filter */}
        <div className="flex gap-4 mb-6">
          <input 
            type="date" 
            value={startDate} 
            onChange={e => setStartDate(e.target.value)} 
            className="border p-2 rounded"
          />
          <input 
            type="date" 
            value={endDate} 
            onChange={e => setEndDate(e.target.value)} 
            className="border p-2 rounded"
          />
          <Button onClick={() => { setStartDate(""); setEndDate(""); }}>Reset</Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border shadow-workshop">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-workshop-orange/20 rounded-full"><Users className="w-6 h-6 text-workshop-orange" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{requests.length}</p>
                <p className="text-muted-foreground text-sm">Total Requests</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border shadow-workshop">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-yellow-500/20 rounded-full"><Clock className="w-6 h-6 text-yellow-500" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
                <p className="text-muted-foreground text-sm">Pending</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border shadow-workshop">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-green-500/20 rounded-full"><CheckCircle className="w-6 h-6 text-green-500" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{acceptedCount}</p>
                <p className="text-muted-foreground text-sm">Accepted</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border shadow-workshop">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-red-500/20 rounded-full"><XCircle className="w-6 h-6 text-red-500" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{rejectedCount}</p>
                <p className="text-muted-foreground text-sm">Rejected</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requests List */}
        <Card className="bg-gradient-card border-border shadow-workshop">
          <CardHeader>
            <CardTitle className="text-xl text-workshop-orange">Breakdown Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {filteredRequests.map(request => (
                <div key={request.id} className="p-6 bg-background rounded-lg border border-border">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{request.name}</h3>
                          <p className="text-sm text-muted-foreground">{new Date(request.timestamp).toLocaleString()}</p>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </Badge>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-workshop-orange" />
                          <span className="text-sm text-muted-foreground">{request.phone}</span>
                        </div>
                        {request.email && (
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-workshop-orange" />
                            <span className="text-sm text-muted-foreground">{request.email}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-workshop-orange" />
                          <a href={`https://maps.google.com/?q=${request.location}`} target="_blank" rel="noopener noreferrer" className="text-sm text-workshop-orange hover:underline">
                            View Location
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">{request.vehicleType}</Badge>
                        </div>
                      </div>

                      {/* Issue Description */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Issue Description:</h4>
                        <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">{request.issueDescription}</p>
                      </div>

                      {/* Photo */}
                      {request.photo && (
                        <div className="flex items-center space-x-2">
                          <Image className="w-4 h-4 text-workshop-orange" />
                          <span className="text-sm text-muted-foreground">Photo attached</span>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    {request.status === "pending" && (
                      <div className="flex flex-col space-y-2 lg:min-w-[160px]">
                        <Button
                          onClick={() => handleStatusUpdate(request, "accepted")}
                          disabled={processingId === request.id}
                          className="bg-green-600 hover:bg-green-700 w-full"
                        >
                          {processingId === request.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <><CheckCircle className="w-4 h-4 mr-2" />Accept</>}
                        </Button>
                        <Button
                          onClick={() => handleStatusUpdate(request, "rejected")}
                          disabled={processingId === request.id}
                          variant="destructive"
                          className="w-full"
                        >
                          {processingId === request.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <><XCircle className="w-4 h-4 mr-2" />Reject</>}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {filteredRequests.length === 0 && (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No requests found</h3>
                  <p className="text-muted-foreground">Breakdown requests will appear here based on your date filter.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
