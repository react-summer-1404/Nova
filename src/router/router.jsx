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
      { path: "/blogsPage", element: <BlogsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/coaches", element: <CoachesPage /> },
      { path: "/coachesDetail", element: <CoachesDetailPage /> },
      // { path: "/compareCourse", element: <CompareCoursePage /> },
      { path: "/contactUs", element: <ContactUsPage /> },
      { path: "/courses/courseDetail:id", element: <CourseDetailPage /> },
      { path: "/courses", element: <CoursesPage /> },
  { path: "*", element: <NotFoundingPage /> },

    ],
  },
  ...AuthRoutes,
]);

export default router;
