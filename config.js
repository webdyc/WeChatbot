// 定义机器人的名称，这里是为了防止群聊消息太多，所以只有艾特机器人才会回复，
export const botName = '小飞蛾'

// 根据正则匹配是否自动通过好友验证
export const friendShipRule = /webdyc|小飞蛾|飞蛾/

// 开启会后收到ChatGPT的自动回复
// export const autoReply = true

// 群聊白名单，白名单内的群聊才会自动回复
export const roomWhiteList = ['小飞蛾交流群']

// 联系人白名单，白名单内的联系人才会自动回复
export const aliasWhiteList = ['张三']
