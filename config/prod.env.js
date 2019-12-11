module.exports = {
  NODE_ENV: '"production"',
  env : '"' + process.env.env + '"' // 最后一个env属性就是我们在package.json中配置的env后面的参数
}
