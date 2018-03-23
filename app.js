module.exports = app => {

    app.once('server', server => {
        // websocket
    });
    app.on('error', (err, ctx) => {
        // report error
    });
    app.on('request', ctx => {
        // log receive request
        // console.log('request')
    });
    app.on('response', ctx => {
        // ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;
        // console.log(used)
        // log total cost
    });
    app.beforeStart(async () => {
        // const ctx = app.createAnonymousContext();
        // preload before app start
        // await ctx.service.posts.load();
        // console.log(app.cache.get(this.ctx.query.id))
        console.log(9)
    });
};

