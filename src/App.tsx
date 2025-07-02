
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NewsWeekly from "./pages/NewsWeekly";
import JoinUs from "./pages/JoinUs";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";
import PremiumMembership from "./pages/PremiumMembership";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Donation from "./pages/Donation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CancellationRefund from "./pages/CancellationRefund";
import ShippingDelivery from "./pages/ShippingDelivery";
import CyberSecurityEducation from "./pages/CyberSecurityEducation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/members" element={<Members />} />
          <Route path="/premium-membership" element={<PremiumMembership />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<NewsWeekly />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/cyber-security-education" element={<CyberSecurityEducation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
