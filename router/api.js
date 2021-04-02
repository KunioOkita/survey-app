const express = require('express');
const router = express.Router();
const DBConnectionManager = require('../service/DBConnectionManager');

// 投票
router.post('/vote/:voteId', (req, res) => {
    // 投票実行
    // 内容を DB に登録する。
    const db = DBConnectionManager.getConnection();
    console.log(req.body);
    res.send(`${req.params.voteId}`);
});

router.delete('')

// 投票結果
router.get('/votes/:voteId', (req, res) => {
    // 投票結果返却
    res.send(`${req.params.voteId}`);
});

module.exports = router;