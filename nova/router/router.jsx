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
  CompairCoursPage,
  ContactUsPage,
  CourseDetailPage,
  CoursesPage,
} from "../pages/index";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/aboutus", element: <AboutUsPage /> },
  { path: "/notfound", element: <NotFoundingPage /> },
  { path: "/blogdetail", element: <BlogDetailPage /> },
  { path: "/blogspage", element: <BlogsPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/coaches", element: <CoachesPage /> },
  { path: "/coachesdetail", element: <CoachesDetailPage /> },
  { path: "/compaircours", element: <CompairCoursPage /> },
  { path: "/contactus", element: <ContactUsPage /> },
  { path: "/coursdetail", element: <CourseDetailPage /> },
  { path: "/courses", element: <CoursesPage /> },
  
  ...AuthRoutes,
]);

export default router;
