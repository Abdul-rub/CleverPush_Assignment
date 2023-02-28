const photoModel = require("../models/photos.model")



const axios = require('axios');

exports.search = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://pixabay.com/api/?key=27707939-e4e4e78352150d2383e43b767&q=${query}&image_type=photo&pretty=true`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};