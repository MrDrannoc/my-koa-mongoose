module.exports = {
    async findAll(ctx) {
        try {
            ctx.body = await ctx.Models.Todo.find({})
        }
        catch (error) {
            ctx.throw(500, error)
        }
    },
    async create(ctx) {
        try {
            ctx.body = await ctx.Models.Todo.create({
                name: ctx.request.body.name
            })
        }
        catch (error) {
            ctx.throw(500, error)
        }
    },
    async findOne(ctx) {
        try {
            ctx.body = await ctx.Models.Todo.findOne({ _id: ctx.params.id })
        }
        catch (error) {
            ctx.throw(500, error)
        }
    },
    async update(ctx) {
        try {
            ctx.body = await ctx.Models.Todo.updateOne({ _id: ctx.params.id }, {
                name: ctx.request.body.name
            })
        }
        catch (error) {
            ctx.throw(500, error)
        }
    },
    async delete(ctx) {
        try {
            ctx.body = await ctx.Models.Todo.deleteOne({ _id: ctx.params.id })
        }
        catch (error) {
            ctx.throw(500, error)
        }
    }
}