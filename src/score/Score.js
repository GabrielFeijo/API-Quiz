const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
	name: String,
	email: String,
	category: String,
	correctAnswers: Number,
	score: Number,
});

mongoose.model('score', ScoreSchema);
