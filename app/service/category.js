
const Service = require('egg').Service;
class CategoryService extends Service {
    async show(data) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const result = await this.app.mysql.get('s_category', data );
        return  {result};
    }
    async create(data){
        const result = await this.app.mysql.insert('s_category',data)
         return result
    }

    async index(data) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const result = await this.app.mysql.select('s_category',{ // 搜索 post 表
            orders: [['created_at','desc'], ['id','desc']], // 排序方式
            limit: data.num, // 返回数据量
            offset: 0, // 数据偏移量
        });
        return  {result};
    }


    async update(data){
        const result = await this.app.mysql.update('s_category',data)
        return result
    }
    async destroy(data){
        const result = await  this.app.mysql.delete('s_category',data)
        return result
    }





}
module.exports = CategoryService;