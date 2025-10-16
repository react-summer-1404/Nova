import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/PageLayout";
import {
  LandingPage,
  AboutUsPage,
  NotFoundingPage,
  BlogDetailPage,
  BlogsPage,
  CartPage,
  CoachesPage,
  CoachesDetailPage,
  CompairCoursPage,
  ContactUsPage,
  CourseDetailPage,
  CoursesPage,
} from "../pages/index";
import { AuthRoutes } from "../features/auth/routes/routes";

const router = createBrowserRouter([
  {
    element: <PageLayout />, 
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/aboutUs", element: <AboutUsPage /> },
      { path: "/blogDetail", element: <BlogDetailPage /> },
      { path: "/blogsPage", element: <BlogsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/coaches", element: <CoachesPage /> },
      { path: "/coachesDetail", element: <CoachesDetailPage /> },
      { path: "/compareCourse", element: <CompairCoursPage /> },
      { path: "/contactUs", element: <ContactUsPage /> },
      { path: "/courseDetail", element: <CourseDetailPage /> },
      { path: "/courses", element: <CoursesPage /> },
    ],
  },
  ...AuthRoutes,
  { path: "*", element: <NotFoundingPage /> },
]);

export default router;
