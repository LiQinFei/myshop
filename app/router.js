'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const report = app.middleware.report();
    const { router, controller } = app;
    router.resources('posts', '/api/posts', controller.posts);
    //上传图片
    router.post('/upload',controller.upload.upload)
    router.post('/userget',controller.posts.userget)
    router.get('/',report, controller.home.index);
    router.resources('banner','/api/banner',controller.banner);
    router.resources('category','/api/category',controller.category);
    router.resources('goods','/api/goods',controller.goods);

};
