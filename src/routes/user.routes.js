import express from "express";
import { userController } from "../controller/index.controller.js"

const router = express.Router();

// router.post(
//     "/login",
//     passport.authenticate("login", { failureRedirect: "/faillogin" }),
//     (req, res) => {
//         res.redirect("/");
//     }
// );


// router.post(
//     "/register",
//     passport.authenticate("register", { failureRedirect: "/failregister" }),
//     (req, res) => {
//         res.redirect("/");
//     }
// );

// router.get("/failregister", (req, res) => {
//     res.render("register-error", {});
// });
// router.get("/faillogin", (req, res) => {
//     res.render("login-error", {});
// });

// router.get("/register", (req, res) => {
//     res.render("register");
// });

// router.get("/logout", (req, res) => {
//     const { username } = req.user;
//     req.logout();
//     res.render("logout", { username });
// });

// router.get("/login", Authenticated, (req, res) => {
//     res.render("login");
// });
// router.get("/", Authenticated, (req, res) => {
//     res.redirect("login");
// });

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