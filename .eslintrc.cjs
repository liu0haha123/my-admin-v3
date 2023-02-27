/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  overrides: [
    // 忽略所有的单词组件名的问题
    {
      rules: {
        "vue/multi-word-component-names": "off",
      }, //给上面匹配的文件指定规则
    },
  ],
};
