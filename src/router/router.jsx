import { createBrowserRouter } from "react-router-dom";
import {
  LandingPage,
  AboutUsPage,
  NotFoundingPage,
  BlogDetailPage,
  BlogsPage,
  CartPage,
  CoachesPage,
  CoachesDetailPage,
  CompareCoursePage,
  ContactUsPage,
  CourseDetailPage,
  CoursesPage,
} from "../pages/index";
import { AuthRoutes } from "../features/auth/routes/routes";
import { DashboardRoutes } from "./dashboardRouter";
import PageLayout from "../components/layout/PageLayout/PageLayout";
import DetermineLevel from "../features/determineLevel/introduction/DetermineLevel";
import LayOut from "../features/determineLevel/LayOut/LayOut";
import SiteReport from "../features/determineLevel/siteReport/SiteReport";
import ProgrammingKnowledge from "../features/determineLevel/ProgrammingKnowledge/ProgrammingKnowledge";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/aboutUs", element: <AboutUsPage /> },
      { path: "/blogDetail/:newsId", element: <BlogDetailPage /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/coaches", element: <CoachesPage /> },
      { path: "/coachesDetail/:teacherId", element: <CoachesDetailPage /> },
      { path: "/compareCourse", element: <CompareCoursePage /> },
      { path: "/contactUs", element: <ContactUsPage /> },
      { path: "/courseDetail/:id", element: <CourseDetailPage /> },
      { path: "/courses", element: <CoursesPage /> },
      { path: "*", element: <NotFoundingPage /> },
    ],
  },
  {
    element: <LayOut />,
    children: [
      { path: "/determineLevel", element: <DetermineLevel /> },
      { path: "/howDidYouFindUs", element: <SiteReport /> },
      { path: "/programmingKnowledge", element: <ProgrammingKnowledge /> },
    ],
  },
  ...AuthRoutes,
  ...DashboardRoutes,
]);

export default router;
