import { UsuarioService } from '../../services/index.service.js';
import { sendGmail } from "../../utils/mail/gmail/EmailSender.js";
import { htmlNewUserTemplate } from "../../utils/mail/gmail/html/newUserCreateTemplate.js";

const usuarioService = UsuarioService.getInstance();
const controller = {}

controller.logInView = async (req, res) => {
    if (req.session.login) {
        res.redirect('game')
    } else {
        res.render('login', { status: false })
    }
}

controller.signUpView = async (req, res) => {
    if (req.session.login) {
        res.redirect('game')
    } else {
        res.render('signup', { status: false })
    }
}

controller.signUp = async (req, res) => {
    const { body } = req;
    const newUser = await usuarioService.createUser(body);

    if (newUser) {
        const now = new Date();
        const newUserTemplateEmail = htmlNewUserTemplate(newUser._id, now.toLocaleString());
        await sendGmail('Nuevo usuario creado', newUserTemplateEmail);
        res.redirect('game')
        // res.status(200).json({ "success": "User added with ID " + newUser._id })
    } else {
        // res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
        res.redirect('failsignup')
    }

}

controller.logIn = async (req, res) => {
    const { username, password } = req.body;
    const loggedUser = await usuarioService.loginUser({
        username: username,
        password: password
    });

    if (loggedUser) {
        req.session.login = true;
        req.session.user = username
        res.status(200).redirect('game')
    } else {
        req.session.login = false;
        res.status(400).redirect('faillogin')
    }
}


controller.homeView = async (req, res) => {
    res.render('login', { status: req.session.login })
}

controller.logOutView = async (req, res) => {
    if (!req.session.login) {
        res.redirect('usuario')
    } else {
        req.session.destroy((err) => {
            if (err) {
                res.json(err);
            } else {
                res.render('login', { status: false });
            }
        })
    }
}

export { controller as userController }