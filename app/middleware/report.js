module.exports = options => {
    return async function report(ctx, next) {
        if(ctx.query.id != 1){
            ctx.body = '没登录'
        }else {
           return next()
        }
    }
}
