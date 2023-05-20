const express = require("express");
const Proposal = require("../models/Proposal");
const router = express.Router();
const { getAuthenticate } = require("../authentication/authentication");
const { createProposal, getProposal, updateProposal, deleteProposal, getAllProposal, getAProposal } = require("../controllers/Proposal");

router.post("/add", getAuthenticate, createProposal);// creation proposal
router.get("/info", getAuthenticate, getProposal);//post info on vendor page

router.get("/all", getAuthenticate, getAllProposal);  //to get all proposal data  and display in user mainpage
router.delete("/:proposalId", deleteProposal);//deleting vendor proposal
router.get("/:proposalId", getAuthenticate, getAProposal);//vendor proposal update and user selection

router.put("/:proposalId", updateProposal);//updating vendor proposal


module.exports = router;