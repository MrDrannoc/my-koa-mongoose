const JwtService = require('../services/jwt.service');

module.exports = async (ctx, next) => {

    let token = '';
    if (ctx.req.headers && ctx.req.headers.authorization) {
        token = ctx.req.headers.authorization;
    } else {
        ctx.throw(401, 'Autorization header is missing');
    }

    const decodedToken = JwtService.verify(token);

    const user = await ctx.Models.User.findOne({ 
        _id: decodedToken.payload.user
        });
    if (user) {
        ctx.state.user = user.id;
        await next();
    } else {
        ctx.throw(401, 'Unauthorized');
    }
};
