require('./Score');
const mongoose = require('mongoose');
const Score = mongoose.model('score');

module.exports = {
	async indexAll(_, res) {
		Score.find({})
			.sort({ score: 'descending' })
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async add(req, res) {
		const existente = await Score.findOne({
			email: req.body.email,
			category: req.body.category,
		});

		if (!existente) {
			const score = new Score({
				name: req.body.name,
				email: req.body.email,
				category: req.body.category,
				correctAnswers: req.body.correctAnswers,
				score: req.body.score,
			});
			score
				.save()
				.then((data) => {
					res.send(data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			res.status(409).send('Email já cadastrado');
		}
	},
	async update(req, res) {
		Score.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				name: req.body.name,
				email: req.body.email,
				category: req.body.category,
				correctAnswers: req.body.correctAnswers,
				score: req.body.score,
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
		Score.findByIdAndRemove(req.params.id)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
