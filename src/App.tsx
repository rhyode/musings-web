import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreatineGuide from "./pages/CreatineGuide";
import NotFound from "./pages/NotFound";
import UPIworks from "./pages/UPIworks";
import Techteas from "./pages/Techteas";
import QuotesIlike from "./pages/QuotesIlike";
import AboutJSON from "./pages/AboutJSON";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles/creatine-guide" element={<CreatineGuide />} />
          <Route path="/articles/UPIworks" element={<UPIworks />} />
          <Route path="/articles/tech-teas" element={<Techteas />} />
          <Route path="/articles/QuotesIlike" element={<QuotesIlike />} />
          <Route path="/articles/aboutJSON" element={<AboutJSON />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;