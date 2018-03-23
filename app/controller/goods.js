const Controller = require('egg').Controller;


class GoodsController extends Controller {
    async create() {
        const ctx = this.ctx;
        let data = ctx.request.body
        data.created_at = new Date()
        let result = await ctx.service.goods.create(data);
        ctx.body = result
    }
    async index() {
        const ctx = this.ctx;
        let data = ctx.query
        let result = await ctx.service.goods.index(data);
        ctx.body = result
    }
    async show() {
        const ctx = this.ctx;
        let data = ctx.params;
        let result = await ctx.service.goods.show(data);
        ctx.body = result
    }
    async update(){
        const ctx = this.ctx;
        let data = ctx.request.body;

        let result = await ctx.service.goods.update(data);
        ctx.body = result
    }
    async destroy(){
        const ctx = this.ctx;
        let data = ctx.params;
        let result = await ctx.service.goods.destroy(data);
        ctx.body = result
    }

}

module.exports = GoodsController;