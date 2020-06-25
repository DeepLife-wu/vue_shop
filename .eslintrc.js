module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "indent": ["off"],
    "space-before-function-paren": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    "no-unused-vars": [2, { 
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none" 
    }],
    // 关闭语句强制分号结尾
    "semi": ["off"],
    // 空行最多不能超过100行
    "no-multiple-empty-lines": [0, {"max": 100}],
    // 关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    "no-irregular-whitespace": "off",
    "no-mixed-spaces-and-tabs": ["off", false],

  }


}
