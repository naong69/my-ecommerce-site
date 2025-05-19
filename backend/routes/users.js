const express = require('express');
const router = express.Router();
const userService = require('../services/userServices');

router.post('/:aciton', (req, res) => {
    const action = req.params.aciton;
    if(action==='login'){
        const response = userService.login(req.body)
    } else if (action==='register') {
        const response = userService.register(req.body)
    } else if (action==='logout'){
        const response = userService.logout(req.body)
    }
    
})

module.exports = router;
