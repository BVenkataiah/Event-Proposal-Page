const express = require("express");
const { getAuthenticate } = require("../authentication/authentication");

const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserInfo, updateSelection} = require("../controllers/User");

router.post("/register", registerUser); // registration
router.put("/:userId", updateSelection) //add new eventproposal in selected container of userpage
router.get("/info", getAuthenticate, getUserInfo);   // get user info to display it where ever required
router.post("/login", loginUser);   //login a valid user 
router.get("/logout", logoutUser);  //logout a user 

module.exports = router;