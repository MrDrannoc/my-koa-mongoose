const UtilService = require('../services/util.service');
const JwtService = require('../services/jwt.service');

module.exports = {
    async signup(ctx) {
        try {
            let { email, password } = ctx.request.body;

            if (!email) {
                ctx.throw(400, 'Vous devez saisir un E-mail');
            }
            if (!password) {
                ctx.throw(400, 'Vous devez saisir un mot de passe');
            }

            const encryptedPassword = await UtilService.hashPassword(password);
            await ctx.Models.User.create({
                email,
                password: encryptedPassword
            });
            ctx.body = 'Utilisateur enregistrée avec succès';
        }
        catch (err) {
            ctx.throw(500, err);
        }
    },

    async login(ctx) {
        try {
            let { email, password } = ctx.request.body;

            if (!email) {
                ctx.throw(400, 'Vous devez saisir un E-mail');
            }
            if (!password) {
                ctx.throw(400, 'Vous devez saisir un mot de passe');
            }

            const user = await ctx.Models.User.findOne({
                email: email
            });

            if (!user) {
                ctx.throw(500, `L'utilisateur n'existe pas!`);
            }

            const matched = await UtilService.comparedPassword(password, user.password);
            if (matched) {
                const token = JwtService.issue({
                    payload: {
                        user: user.id
                    }
                }, '1 day');

                ctx.body = { userId: user.id, email: user.email, token };

            } else {
                ctx.throw(500, 'Mot de passe invalide');
            }
        }
        catch (err) {
            ctx.throw(500, err);
        }
    }
}