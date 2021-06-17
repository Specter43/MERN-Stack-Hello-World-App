module.exports = (app) => {
    const controller = require('../controllers/controller');
    app.get('/getData', controller.getData);
};
