import express from "express";
const router = express.Router();
import { UsuarioDao } from '../daos/index.dao.js';
import { sendGmail } from "../mail/gmail/EmailSender.js";
import { htmlNewUserTemplate } from "../mail/gmail/html/newUserCreateTemplate.js";

const userDao = new UsuarioDao();

// post
router.post('/signup', async (req, res) => {
    const { body } = req;
    const newUser = await userDao.createUser(body);

    if (newUser) {
        const now = new Date();
        const newUserTemplateEmail = htmlNewUserTemplate(newUser._id, now.toLocaleString());
        // Descomentar si has llenado el .env con tu email y password.
        await sendGmail('Nuevo usuario creado', newUserTemplateEmail);
        res.redirect('game')
    } else {
        res.redirect('failsignup')
    }

})


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const loggedUser = await userDao.loginUser({
        username: username,
        password: password
    });
    if (loggedUser) {
        req.session.login = true;
        res.status(200).redirect('game')
    } else {
        req.session.login = false;
        res.status(400).redirect('faillogin')
    }
})


// Get
router.get('/login', async (req, res) => {
    if (req.session.login) {
        res.redirect('game')
    } else {
        res.render('login', { status: false })
    }
})

router.get('/signup', (req, res) => {
    if (req.session.login) {
        res.redirect('game')
    } else {
        res.render('signup', { status: false })
    }
})

router.get("/failsignup", (req, res) => {
    res.render("signup-error");
});

router.get("/faillogin", (req, res) => {
    res.render("login-error");
});

router.get('/logout', async (req, res) => {
    if (!req.session.login) {
        res.redirect('login')
    } else {
        req.session.destroy((err) => {
            if (err) {
                res.json(err);
            } else {
                res.render('login', { status: false });
            }
        })
    }
})

router.get('/game', (req, res) => {
    // res.render('home',{ username: req.user.username })
    res.render('home')
})

router.get('/', (req, res) => {
    res.redirect('login')
})

export { router as userRouter };