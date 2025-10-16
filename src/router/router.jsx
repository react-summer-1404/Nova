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
      { path: "/aboutus", element: <AboutUsPage /> },
      { path: "/blogdetail", element: <BlogDetailPage /> },
      { path: "/blogspage", element: <BlogsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/coaches", element: <CoachesPage /> },
      { path: "/coachesdetail", element: <CoachesDetailPage /> },
      { path: "/compaircours", element: <CompairCoursPage /> },
      { path: "/contactus", element: <ContactUsPage /> },
      { path: "/coursdetail", element: <CourseDetailPage /> },
      { path: "/courses", element: <CoursesPage /> },
    ],
  },
  ...AuthRoutes,
  { path: "*", element: <NotFoundingPage /> },
]);

export default router;
