const Controller = require('egg').Controller;


class BannerController extends Controller {
    async create() {
        const ctx = this.ctx;
        let data = ctx.request.body
        data.created_at = new Date()
        let result = await ctx.service.banner.create(data);
        ctx.body = result
    }

    async index() {
        const ctx = this.ctx;
        let data = ctx.query
        let result = await ctx.service.banner.index(data);
        ctx.body = result
    }

    async show() {
        const ctx = this.ctx;
        let data = ctx.params;
        let result = await ctx.service.banner.show(data);
        ctx.body = result
    }
    async update(){
        const ctx = this.ctx;
        let data = ctx.request.body;
        console.log(data)
        let result = await ctx.service.banner.update(data);
        ctx.body = result
    }
    async destroy(){
        const ctx = this.ctx;
        let data = ctx.params;
        let result = await ctx.service.banner.destroy(data);
        ctx.body = result
    }
}

module.exports = BannerController;