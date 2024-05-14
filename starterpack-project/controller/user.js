require("dotenv").config();
const Division = require("../model/Division");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = process.env.TOKEN_SECRET_KEY;
const cloudinary = require("../util/cloudinary_config");
const fs = require("fs");

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: [
        "id",
        "fullName",
        "nim",
        "angkatan",
        "profilePicture",
        "divisionId",
      ],
      include: {
        model: Division,
        attributes: ["name"],
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil semua data pengguna",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: {
        model: Division,
        attributes: ["name"],
      },
    });

    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "Pengguna tidak ditemukan",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil data pengguna",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const postUser = async (req, res) => {
  try {
    const { fullName, nim, angkatan, email, password, division } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_division = await Division.findOne({ where: { name: division } });

    if (!user_division) {
      return res.status(400).json({
        status: "Error",
        message: `Divisi ${division} tidak ditemukan!`,
      });
    }

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      angkatan,
      nim,
      divisionId: user_division.id,
      role: "MEMBER",
    });

    const token = jwt.sign(
      {
        userId: newUser.id,
        role: newUser.role,
        divisionId: newUser.divisionId,
      },
      key,
      {
        algorithm: "HS256",
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      status: "success",
      message: "Pendaftaran berhasil!",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const currentUser = await User.findOne({ where: { email } });

    if (!currentUser) {
      return res.status(400).json({
        status: "Error",
        message: "Email atau password salah",
      });
    }

    const checkPassword = await bcrypt.compare(password, currentUser.password);
    if (!checkPassword) {
      return res.status(400).json({
        status: "Error",
        message: "Email atau password salah",
      });
    }

    const token = jwt.sign(
      { userId: currentUser.id, role: currentUser.role },
      key,
      { algorithm: "HS256", expiresIn: "1h" }
    );

    res.status(200).json({
      status: "Success",
      message: "Login berhasil!",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    let token;
    if (authorization && authorization.startsWith("Bearer ")) {
      token = authorization.substring(7);
    } else {
      return res.status(403).json({
        status: "Error",
        message: "Anda harus login",
      });
    }

    const decoded = jwt.verify(token, key);
    if (decoded.role !== "ADMIN") {
      return res.status(403).json({
        status: "Error",
        message: "Anda tidak memiliki akses",
      });
    }

    const { userId } = req.params;
    const result = await User.destroy({ where: { id: userId } });
    if (!result) {
      return res.status(404).json({
        status: "Error",
        message: `Pengguna dengan id ${userId} tidak ditemukan`,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Pengguna berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getUserByToken = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    let token;
    if (authorization && authorization.startsWith("Bearer ")) {
      token = authorization.substring(7);
    } else {
      return res.status(400).json({
        status: "Error",
        message: "Anda harus login",
      });
    }

    const decoded = jwt.verify(token, key);
    const loggedUser = await User.findOne({
      where: { id: decoded.userId },
      include: {
        model: Division,
        attributes: ["name"],
      },
    });

    if (!loggedUser) {
      return res.status(404).json({
        status: "Error",
        message: `Pengguna dengan id ${decoded.userId} tidak ditemukan`,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil data pengguna",
      user: {
        id: loggedUser.id,
        fullname: loggedUser.fullName,
        angkatan: loggedUser.angkatan,
        divisi: loggedUser.Division.name,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const editUserAccount = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    let token;
    if (authorization && authorization.startsWith("Bearer ")) {
      token = authorization.substring(7);
    } else {
      return res.status(403).json({
        status: "Error",
        message: "Anda harus login",
      });
    }

    const decoded = jwt.verify(token, key);
    const currentUser = await User.findOne({ where: { id: decoded.userId } });
    if (!currentUser) {
      return res.status(404).json({
        status: "Error",
        message: `Pengguna dengan id ${decoded.userId} tidak ditemukan`,
      });
    }

    let imageUrl = currentUser.profilePicture;
    if (req.file) {
      const file = req.file;
      const uploadOption = {
        folder: "Profile_Member/",
        public_id: `user_${currentUser.id}`,
        overwrite: true,
      };
      const uploadFile = await cloudinary.uploader.upload(
        file.path,
        uploadOption
      );
      imageUrl = uploadFile.secure_url;
      fs.unlinkSync(file.path);
    }

    await User.update(
      {
        fullName: req.body.fullName,
        nim: req.body.nim,
        angkatan: req.body.angkatan,
        profilePicture: imageUrl,
      },
      { where: { id: decoded.userId } }
    );

    res.status(200).json({
      status: "Success",
      message: "Data pengguna berhasil diubah",
      user: {
        id: currentUser.id,
        fullName: req.body.fullName,
        nim: req.body.nim,
        angkatan: req.body.angkatan,
        profilePicture: imageUrl,
        division: currentUser.Division.name,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  postUser,
  deleteUser,
  loginHandler,
  getUserByToken,
  editUserAccount,
};
