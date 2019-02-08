module.exports = {
  async findAll(ctx) {
    try {
      ctx.body = await ctx.Models.Todo.find({});
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async findAllByUser(ctx) {
    try {
      ctx.body = await ctx.Models.Todo.find().where({
        userId: ctx.params.userId
      });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async create(ctx) {
    try {
      ctx.body = await ctx.Models.Todo.create({
        title: ctx.request.body.title,
        complete: ctx.request.body.complete,
        userId: ctx.request.body.userId
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async findOne(ctx) {
    try {
      ctx.body = await ctx.Models.Todo.findOne({ _id: ctx.params.id });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async update(ctx) {
    try {
      ctx.body = await ctx.Models.Todo.updateOne(
        { _id: ctx.params.id },
        {
          title: ctx.request.body.title,
          complete: ctx.request.body.complete,
          userId: ctx.request.body.userId
        }
      );
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async delete(ctx) {
    try {
      ctx.body = await ctx.Models.Todo.deleteOne({ _id: ctx.params.id });
    } catch (error) {
      ctx.throw(500, error);
    }
  }
};
