import { createBrowserRouter } from "react-router-dom";
import { AuthRoutes } from "../features/auth/routes/routes";
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

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/aboutUs", element: <AboutUsPage /> },
  { path: "/notfound", element: <NotFoundingPage /> },
  { path: "/blogDetail", element: <BlogDetailPage /> },
  { path: "/blogsPage", element: <BlogsPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/coaches", element: <CoachesPage /> },
  { path: "/coachesDetail", element: <CoachesDetailPage /> },
  { path: "/compareCourse", element: <CompareCoursePage /> },
  { path: "/contactUs", element: <ContactUsPage /> },
  { path: "/courseDetail", element: <CourseDetailPage /> },
  { path: "/courses", element: <CoursesPage /> },
  
  ...AuthRoutes,
]);

export default router;
