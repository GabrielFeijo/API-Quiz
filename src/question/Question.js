const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
	category: String,
	questions: Object,
});

mongoose.model('questions', questionsSchema);
