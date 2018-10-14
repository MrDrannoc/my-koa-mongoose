const Router = require('koa-router')

var router = new Router({
    prefix: '/api'
})

const {
    TodoController,
    UserController
} = require('../controllers')

const isAuthenticated = require('../auth/isAuthenticated');

router.get('/todo', isAuthenticated, TodoController.findAll)
router.post('/todo', isAuthenticated, TodoController.create)
router.get('/todo/:id', isAuthenticated, TodoController.findOne)
router.put('/todo/:id', isAuthenticated, TodoController.update)
router.delete('/todo/:id', isAuthenticated, TodoController.delete)

router.post('/signup', UserController.signup)
router.post('/login', UserController.login)

module.exports = router
