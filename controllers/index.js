const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage');
const dashboardRoutes = require('./dashboard');

const { route } = require('./homepage');

router.use('/dashboard', dashboardRoutes);
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;