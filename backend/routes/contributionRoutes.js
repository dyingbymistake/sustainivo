// backend/routes/contributionRoutes.js
const express = require('express');
const router = express.Router();
const Contribution = require('../models/Contribution');

// POST a new contribution
router.post('/', async (req, res) => {
  try {
    const newContribution = new Contribution(req.body);
    await newContribution.save();
    res.status(201).send(newContribution);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET all contributions
router.get('/', async (req, res) => {
  try {
    const contributions = await Contribution.find();
    res.status(200).send(contributions);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
      