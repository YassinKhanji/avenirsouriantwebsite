
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./app/Layout.tsx";
import App from "./app/App.tsx";
import CoursesPage from "./app/pages/CoursesPage.tsx";
import ActivitiesPage from "./app/pages/ActivitiesPage.tsx";
import CourseDetail from "./app/pages/CourseDetail.tsx";
import ActivityDetail from "./app/pages/ActivityDetail.tsx";
import ContactPage from "./app/pages/ContactPage.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";
import { LanguageProvider } from "./app/i18n.tsx";
import { ThemeProvider } from "./app/theme-provider.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="activities" element={<ActivitiesPage />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="activity/:id" element={<ActivityDetail />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </ThemeProvider>
);
