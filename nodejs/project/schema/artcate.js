const joi = require('joi');

// 定义验证规则
const name = joi.string().required();
const alias = joi.string().alphanum().required();


// 向外共享验证规则
exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
};