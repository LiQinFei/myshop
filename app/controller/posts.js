// app/controller/topics.js
const Controller = require('egg').Controller;


class TopicController extends Controller {
    async index() {
        const ctx = this.ctx;
        ctx.body = {
            topic_id: '090909',
        };
        ctx.status = 201;
    }
    async new() {
        const ctx = this.ctx;
        ctx.body = {
            topic_id: 'new',
        };
        ctx.status = 201;
    }
    async userget(){
        // let ctx = this.ctx
        // const user = await ctx.service.user.find(1);
        //
        // ctx.body = user;
    }
}
module.exports = TopicController;