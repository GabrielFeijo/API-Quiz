const express = require('express');
const router = express.Router();

const scoreController = require('./score/scoreController');
const questionController = require('./question/questionController');

router.get('/score', scoreController.indexAll);
router.post('/score', scoreController.add);
router.put('/score/:id', scoreController.update);
router.delete('/score/:id', scoreController.deleteById);

router.get('/question', questionController.indexAll);
router.get('/question/:category', questionController.indexByCategory);
router.post('/question', questionController.add);
router.put('/question/:id', questionController.update);
router.delete('/question/:id', questionController.deleteById);

module.exports = router;
