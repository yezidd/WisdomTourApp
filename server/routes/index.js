const fs = require('fs');

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

//文件上传接口
router.post("/upload", async (ctx, next) => {
  const file = ctx.request.body.files.files; // 获取上传文件
  const reader = fs.createReadStream(file.path); // 创建可读流
  const ext = file.name.split('.').pop(); // 获取上传文件扩展名
  let timestamp = new Date().getTime();
  const upStream = fs.createWriteStream(`upload/${timestamp}.${ext}`); // 创建可写流
  reader.pipe(upStream); // 可读流通过管道写入可写流
  return ctx.body = {
    code: 1,
    message: '上传成功',
    fileUrl: ctx.request.origin + "/" + timestamp + "." + ext
  };
});

module.exports = router;
