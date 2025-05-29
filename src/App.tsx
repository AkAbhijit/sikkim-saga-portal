
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ContentProvider } from "./contexts/ContentContext";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Culture from "./pages/Culture";
import History from "./pages/History";
import Nature from "./pages/Nature";
import People from "./pages/People";
import Experiences from "./pages/Experiences";
import Transport from "./pages/Transport";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <ContentProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen">
              <Navigation />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/history" element={<History />} />
                <Route path="/nature" element={<Nature />} />
                <Route path="/people" element={<People />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<Admin />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </ContentProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
