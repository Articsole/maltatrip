import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import TourDetail from "./pages/TourDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import BoatRentalMalta from "./pages/BoatRentalMalta.tsx";
import BoatTripsMalta from "./pages/BoatTripsMalta.tsx";
import BusAndBoatTourMalta from "./pages/BusAndBoatTourMalta.tsx";
import ThingsToDoInMalta from "./pages/ThingsToDoInMalta.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tour/:slug" element={<TourDetail />} />
            <Route path="/boat-rental-malta" element={<BoatRentalMalta />} />
            <Route path="/boat-trips-malta" element={<BoatTripsMalta />} />
            <Route path="/bus-and-boat-tour-malta" element={<BusAndBoatTourMalta />} />
            <Route path="/things-to-do-in-malta" element={<ThingsToDoInMalta />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
