import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import SearchMentor from './pages/SearchMentor'
import MentorDetail from './pages/mentorDetail'
import CourseMentor from './pages/CourseMentor'
import CourseUser from './pages/CourseUser'
import BecomeAMentor from './pages/BecomeAMentor'
import ProfileMentor from "./pages/ProfileMentor";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/mentorDetail/:id",
    element: <MentorDetail />,
  },
  {
    path: "/searchMentor",
    element: <SearchMentor />,
  },
  {
    path: "/courseMentor",
    element: <CourseMentor />,
  },
  {
    path: "/courseUser",
    element: <CourseUser />,
  },
  {
    path: "/BecomeAMentor",
    element: <BecomeAMentor />,
  }
    path: "/profileMentor/:id",
    element: <ProfileMentor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
