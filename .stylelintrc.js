
// //https://github.com/lq782655835/blogs/issues/1


// /**
//  * 
//  *  "stylelint-config-prettier": "^9.0.5",
//     "stylelint-config-recess-order": "^4.0.0",
//     "stylelint-config-standard": "^30.0.1",
//     "stylelint-prettier": "^3.0.0",
//  */

module.exports = {
   // 继承一系列规则集合
    extends: [
    'stylelint-config-standard',
  ],
  rules: {
        "indentation": 4,//# 缩进 4 个空格
        "string-quotes": "double",//使用双引号
        "declaration-block-trailing-semicolon": "always",//每个属性声明末尾都要加分号
        "declaration-empty-line-before": [//第一条属性声明前不允许有空行
          "never",
          { ignore: [ "after-declaration" ] }
        ],
        "rule-empty-line-before": [//每个样式规则前后都有空行，除了第一条规则与规则前有注释
          "always",
          { except: [ "after-single-line-comment", "first-nested" ] }
        ],
        "max-empty-lines": 1,//不允许超过一行的空行
        "no-eol-whitespace": true,//每行句末不允许有多余空格
        "no-missing-end-of-source-newline": true,//文件末尾需要有一个空行
        //大小写处理
        "unit-case": "lower",
        "color-hex-case": "upper",
        "value-keyword-case": "lower",
        "function-name-case": "lower",
        "property-case": "lower",
        "at-rule-name-case": "lower",
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-element-case": "lower",
        "selector-type-case": "lower",
        "media-feature-name-case": "lower",
        /****** */
        "block-opening-brace-newline-after": ["always"],
        "block-closing-brace-newline-before": ["always"],
        /**
         * demo 
         * 正确
         * a{
         * color:red
         * }
         * 
         * 错误
         * a{color:red}
         * a{color:red
         * }
         * a{
         * color:red}
         */
         /****** */
       // "selector-class-pattern":"^[a-z][a-zA-Z0-9]+$",//className命名为小驼峰
  },
  // 忽略其他文件，只校验样式相关的文件
  ignoreFiles: [
    "node_modules/**/*",
    "public/**/*",
    "build/**/*",
    "**/*.js",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
  ],
  // overrides: [
  //   {
  //     files: ['**/*.less'],
  //     customSyntax: 'postcss-less',
  //     rules: {
  //       'prettier/prettier': true,
  //     }
  //   }
  // ]
};
