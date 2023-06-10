require('./Question');
const mongoose = require('mongoose');
const Questions = mongoose.model('questions');

module.exports = {
	async indexAll(_, res) {
		Questions.find({})
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async indexByCategory(req, res) {
		Questions.findOne({
			category: { $regex: req.params.category, $options: 'i' },
		})
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async add(req, res) {
		const questions = new Questions({
			category: req.body.category,
			questions: req.body.questions,
		});
		questions
			.save()
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async update(req, res) {
		Questions.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				category: req.body.category,
				questions: req.body.questions,
			}
		)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async deleteById(req, res) {
		Questions.findByIdAndRemove(req.params.id)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
