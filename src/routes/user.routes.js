import express from "express";
import { userController } from "../controller/index.controller.js"

const router = express.Router();

router.get('/login', userController.logInView);
router.get('/signup', userController.signUpView);
router.get('/', userController.homeView);
router.get('/logout', userController.logOutView);

router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);

router.get('/game', (req, res) => {
    if (req.session.login) {
        let user = req.session.user
        res.render('home',{ username: user })
    }else{
        res.redirect('login')
    }
})


export { router as userRouter };