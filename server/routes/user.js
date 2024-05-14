const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload_file");
const {
  postUser,
  loginHandler,
  getUserProfile,
  editUserAccount,
} = require("../controller/user");

// Routes for Mentee

router.post("/users/registerUser", postUser);

router.post("/users/loginUser", loginHandler);

router.get("/users/profileUser", getUserProfile);

router.put(
  "/users/editUserProfile",
  upload.single("profilePict"),
  editUserAccount
);

module.exports = router;

/*
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
  },
  {
    path: "/profileMentor/:id",
    element: <ProfileMentor />,
  },
  {
    path: "/profileUser/:id", Done
    element: <ProfileUser />,
  },
  {
    path: "/loginUser", Done
    element: <LoginUser />,
  },
  {
    path: "/registerUser", Done
    element: <RegisterUser />,
  },
]);
*/
