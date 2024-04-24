require("dotenv").config();
const Mentee = require("../model/Mentee");
const Mentor = require("../model/Mentor");
const Saved = require("../model/Saved");
const Comment = require("../model/Komentar");
const Course = require("../model/Course");
const CourseRelationship = require("../model/CourseRelationship");
const Skills = require("../model/Skills");
const SkillsRelationship = require("../model/SkillsRelationship");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = process.env.TOKEN_SECRET_KEY;
const cloudinary = require("../util/cloudinary_config");
const fs = require("fs");

// Register
async function registerMentee(req, res) {
  try {
    const { fullName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newMentee = await Mentee.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const token = jwt.sign({ userId: newMentee.id, role: "MENTEE" }, key, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "success",
      message: "Mentee registration successful!",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}

// Begin as mentor
async function registerMentor(req, res) {
  try {
    const { menteeId } = req.body;
    const newMentor = await Mentor.create({
      id_mentee: menteeId,
    });
    res.status(201).json(newMentor);
  } catch (error) {
    console.error("Error registering mentor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function saveRelationship(req, res) {
  try {
    const { menteeId, mentorId } = req.body;
    const newSavedRelationship = await Saved.create({
      mentee: menteeId,
      mentor: mentorId,
    });
    res.status(201).json(newSavedRelationship);
  } catch (error) {
    console.error("Error saving relationship:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function addComment(req, res) {
  try {
    const { menteeId, body } = req.body;
    const newComment = await Comment.create({ id_mentee: menteeId, body });
    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getAllMentors(req, res) {
  try {
    const mentors = await Mentor.findAll();
    res.status(200).json(mentors);
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  registerMentee,
  registerMentor,
  saveRelationship,
  addComment,
  getAllMentors,
};
