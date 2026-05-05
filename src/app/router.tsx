import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { PageLayout } from "./components/layout/PageLayout/PageLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.projects} element={<ProjectsPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
