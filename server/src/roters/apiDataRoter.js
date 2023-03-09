const express = require('express');
const getDataFunction = require('../utils/getDataFunction');

const apiDataRouter = express.Router();

apiDataRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getDataFunction(id);
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = apiDataRouter;
