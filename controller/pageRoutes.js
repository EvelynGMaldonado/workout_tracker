const router = require('express').Router();
const path = require('path');

//connect my /homepage with my index.html
router.get('/', (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../public/index.html'))
    } 
    catch(err) {
        res.status(404).json(err)
    }
});

//connect my /statspage with my stats.html
router.get('/stats', (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    }
    catch(err) {
        res.status(404).json(err)
    }
});

//connecting my /exercisepage with my excercise.html
router.get('/exercise', (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    }
    catch(err) {
        res.status(404).json(err)
    }
});

module.exports = router;