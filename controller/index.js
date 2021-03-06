const router = require('express').Router();
const pageRoutes = require('./pageRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/', pageRoutes);
router.use('/', apiRoutes);

module.exports = router;