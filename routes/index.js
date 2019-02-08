const Router = require('koa-router')

var router = new Router({
    prefix: '/api'
})

const {
    TodoController,
    UserController
} = require('../controllers')

const isAuthenticated = require('../auth/isAuthenticated');

router.get('/todolist', isAuthenticated, TodoController.findAll)
router.post('/todolist', isAuthenticated, TodoController.create)
router.get('/todolistbyuser/:userId', isAuthenticated, TodoController.findAllByUser);
router.get('/todolist/:id', isAuthenticated, TodoController.findOne)
router.put('/todolist/:id', isAuthenticated, TodoController.update)
router.delete('/todolist/:id', isAuthenticated, TodoController.delete)

router.post('/signup', UserController.signup)
router.post('/login', UserController.login)

module.exports = router
