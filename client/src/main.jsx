import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import SearchMentor from './pages/SearchMentor'
import MentorDetail from './pages/mentorDetail'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/mentorDetail/:id",
    element: <MentorDetail />,
  },
  // tambahkan path nya di bawah sini, contohnya ini, jangan lupa import page nya
  {
    path: "/searchMentor",
    element: <SearchMentor />,
  },
  // {
  //   path: "/beAMentor",
  //   element: <BeAMmentor />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
