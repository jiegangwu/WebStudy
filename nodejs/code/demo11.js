// 引入自定义时间模块

const Time = require('../modules/module_time');

// 调用方法

const dt = new Date();

console.log(dt);
console.log("===============")

const newDt = Time.dataFormat(dt);
console.log(newDt)