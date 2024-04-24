const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

// Routes for Mentee
router.post("/mentee/register", UserController.registerMentee);

// Routes for Mentor
router.post("/mentor/register", UserController.registerMentor);
router.get("/mentors", UserController.getAllMentors);

// Routes for Relationship
router.post("/relationship/save", UserController.saveRelationship);

// Routes for Comments
router.post("/comment/add", UserController.addComment);

module.exports = router;
