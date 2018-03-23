const path = require('path');
const images = require('images');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
var fs=require('fs');

class UploaderController extends Controller {
    async upload() {
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        let lastNameNum = stream.filename.lastIndexOf('.');
        let lastName = stream.filename.slice(lastNameNum);
        let domName ='upload/'+ Date.now()+lastName;
        const name = 'app/public/' +domName;
        let buffer =stream._readableState.buffer.head.data;
        function write() {
            return new Promise((resolve, reject) => {
                fs.writeFile(name,buffer, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                });
            })
        }
        try {
            // await images(stream._readableState.buffer.tail.data).save(name)
          var isTr = await write()
            // result = await ctx.oss.put(name, stream);
        } catch (err) {
            // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
            await sendToWormhole(stream);
            throw err;
        }

        if(isTr){
            ctx.body = {
                status:1,
                url: domName
            };
        }else {
            ctx.body = {
               status:0
            };
        }

    }
}

module.exports = UploaderController;