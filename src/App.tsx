import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Archive from "./pages/Archive";
import ProjectDetail from "./pages/ProjectDetail";
import PersonProfile from "./pages/PersonProfile";
import PeoplePage from "./pages/PeoplePage";
import CompanyProfile from "./pages/CompanyProfile";
import CompaniesPage from "./pages/CompaniesPage";
import Timeline from "./pages/Timeline";
import Contribute from "./pages/Contribute";
import DocsPage from "./pages/DocsPage";
import ReadmeDocPage from "./pages/docs/ReadmeDocPage";
import CodeOfConductPage from "./pages/docs/CodeOfConductPage";
import LicensePage from "./pages/docs/LicensePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/person/:id" element={<PersonProfile />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/company/:id" element={<CompanyProfile />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/readme" element={<ReadmeDocPage />} />
          <Route path="/docs/conduct" element={<CodeOfConductPage />} />
          <Route path="/docs/license" element={<LicensePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
