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
  // CompareCoursePage,
  ContactUsPage,
  CourseDetailPage,
  CoursesPage,
} from "../pages/index";
import { AuthRoutes } from "../features/auth/routes/routes";
import PageLayout from "../components/layout/PageLayout/PageLayout";

const router = createBrowserRouter([
  {
    element: <PageLayout />, 
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/aboutUs", element: <AboutUsPage /> },
      { path: "/blogDetail", element: <BlogDetailPage /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/coaches", element: <CoachesPage /> },
      { path: "/coachesDetail", element: <CoachesDetailPage /> },
      // { path: "/compareCourse", element: <CompareCoursePage /> },
      { path: "/contactUs", element: <ContactUsPage /> },
      { path: "/courseDetail", element: <CourseDetailPage /> },
      { path: "/courses", element: <CoursesPage /> },
    ],
  },
  ...AuthRoutes,
  { path: "*", element: <NotFoundingPage /> },
]);

export default router;
