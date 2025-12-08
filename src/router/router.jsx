import { createBrowserRouter } from "react-router-dom";
import {LandingPage,AboutUsPage,NotFoundingPage,BlogDetailPage,BlogsPage,CartPage,CoachesPage,CoachesDetailPage,CompareCoursePage,ContactUsPage,CourseDetailPage,CoursesPage,} from "../pages/index";
import { AuthRoutes } from "../features/auth/routes/routes";
import { DashboardRoutes } from "./dashboardRouter";
import PageLayout from "../components/layout/PageLayout/PageLayout";
import DetermineLevel from "../features/determineLevel/DetermineLevel";

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
  { path: "/determineLevel", element: <DetermineLevel/> },
  ...AuthRoutes,
  ...DashboardRoutes,
]);

export default router;