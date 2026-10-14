import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { ContactPage } from "./pages/ContactPage.tsx";
import { EpisodesPage } from "./pages/EpisodesPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { ShowNotesPage } from "./pages/ShowNotesPage.tsx";
import { SourcesPage } from "./pages/SourcesPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="episodes" element={<EpisodesPage />} />
        <Route path="episodes/:slug" element={<ShowNotesPage />} />
        <Route path="sources" element={<SourcesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
