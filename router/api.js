const express = require('express');
const router = express.Router();
const DBConnectionManager = require('../service/DBConnectionManager');

// 投票
router.post('/vote/:voteId', (req, res) => {
    // 投票実行
    const db = DBConnectionManager.getConnection();
    const collection = db.collection('votes');
    console.log(req.body);
    collection.insertMany(req.body, function(err, result) {
        if (err) console.log(err)
	console.log(result);
        res.send(`${req.params.voteId}`);
    });
});

router.delete('')

// 投票結果
router.get('/votes', (req, res) => {
    // 投票結果返却
    const db = DBConnectionManager.getConnection();
    const collection = db.collection('votes');
    console.log(req.body);
    collection.find({}).toArray(function(err, result) {
        if (err) console.log(err)
        console.log(result);
	
        res.send(result);
    });
});

module.exports = router;
