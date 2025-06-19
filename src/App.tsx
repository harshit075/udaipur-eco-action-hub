import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";

import ChatBot from "@/components/ChatBot";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Dashboard from "./pages/Dashboard";
import CommunityVoting from "./pages/CommunityVoting";
import NotFound from "./pages/NotFound";
import JoinPage from "./pages/JoinPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="eco-udaipur-theme">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* --- PUBLIC ROUTES --- */}
                <Route path="/" element={<Index />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/join" element={<JoinPage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/community-voting" element={<CommunityVoting />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ChatBot />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
