const Controller = require('egg').Controller;


class CategoryController extends Controller {
    async create() {
        const ctx = this.ctx;
        let data = ctx.request.body
        data.created_at = new Date()
        let result = await ctx.service.category.create(data);
        ctx.body = result
    }
    async index() {
        const ctx = this.ctx;
        let data = ctx.query
        let result = await ctx.service.category.index(data);
        ctx.body = result
    }
    async show() {
        const ctx = this.ctx;
        let data = ctx.params;
        let result = await ctx.service.category.show(data);
        ctx.body = result
    }
    async update(){
        const ctx = this.ctx;
        let data = ctx.request.body;

        let result = await ctx.service.category.update(data);
        ctx.body = result
    }
    async destroy(){
        const ctx = this.ctx;
        let data = ctx.params;
        let result = await ctx.service.category.destroy(data);
        ctx.body = result
    }
    async edit (){
        const ctx = this.ctx;
        let data = ctx.params;
        ctx.body = data
    }
}

module.exports = CategoryController;