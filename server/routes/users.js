const mysql = require("../config/db");
const router = require('koa-router')()
const uuidv1 = require('uuid/v1');
const nameArray = require("../config/initialName");

router.prefix('/users');

//用户登录函数

//用户短信发送函数

//用户换头像

//用户改名

//用户开发手机的时候，根据设备id先在用户表中添加一条数据，作为本地数据
//deviceId --->设备id
//username 自动随机生成
//uuid 自动随机生成
//rank 默认为1
//phone 为空
router.post("/pre/login", async (ctx) => {
  let deviceId = ctx.request.body.deviceId;

  //先查询是否已经添加过用户数据了
  let insertResult = await mysql("user")
    .select(
      "uuid",
      "username",
      "rank",
      "phone"
    )
    .where("deviceId", "=", deviceId);
  if (insertResult.length === 0) {
    const UserId = await mysql("user").insert({
      uuid: uuidv1(),
      username: nameArray[Math.floor(Math.random() * (nameArray.length))],
      rank: 1,
      deviceId: deviceId
    });
    if (UserId) {
      //查询此条数据然后存储到客户端
      let userData = await mysql.select(
        "uuid",
        "username",
        "rank",
        "phone"
      ).from("user")
        .where("id", "=", UserId);
      ctx.state.code = 1;
      ctx.state.data = userData[0];
    } else {
      ctx.state.code = 0;
      ctx.state.data = {
        mess: "发生错误"
      };
    }
  } else {
    ctx.state.code = 1;
    ctx.state.data = insertResult[0];
  }
});

module.exports = router;
