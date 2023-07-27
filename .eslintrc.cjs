
//ESLint（包括其他一些 lint 工具）的主要功能包含代码格式和代码质量的校验。
//Prettier 是一款代码格式化工具，用于检测代码中的格式问题，比如单行代码长度、tab长度、空格、逗号表达式等。
//在功能职责上，ESlint 偏向于把控项目的代码质量，而 Prettier 更偏向于统一项目的编码风格。

//在 ESlint 推出 --fix 参数前，ESLint 并没有自动化格式代码的功能，要对一些格式问题做批量格式化只能用 Prettier 这样的工具。
//并且，Prettier 在代码风格的检测上比 ESlint 更全面，所以两者通常是结合在一起使用的。

//eslint-config-prettier:关闭不必要的或者可能和Prettier冲突的规则
//yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
//yarn add prettier --dev  需要用prettier对代码的格式进行检查和修正，下载prettier包
//yarn add @typescript-eslint eslint-plugin-react --dev

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',//作为基本规则集,继承eslint官方推荐的一些配置
    'plugin:react/recommended',//作为基本规则集
    'plugin:@typescript-eslint/recommended',//作为基本规则集,继承了一个由typesript官方提供的适合于ts代码检查的配置
    'prettier',//由于eslint和prettier都具备代码格式化的功能，并且可能出现冲突,所以继承eslint-config-prettier
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',//作为ESlint的解析器，将Ts代码纳入ESLint校验范围,因为eslint默认的parser智能解析js,所以配置了parser
  parserOptions: {//对parser进行配置
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
     '@typescript-eslint', 
     'prettier', //注册eslint-plugin-prettier插件
     'import',
     'eslint-plugin-react',//注册插件,React 代码规范的校验规则
     //react/jsx-key:用来检查是否声明了 key 属性
     //no-array-index-key:用来检查是否使用了数组索引声明 key 属性
     "react-hooks",//React hooks 代码规范的校验规则
     //rules-of-hooks: 用来检查 Hook 的规则(不能 if/循环中使用 Hooks)
    //exhaustive-deps 规则，此规则会在useEffct添加错误依赖时发出警告并给出修复建议
    ],
  rules: {
    //开启eslint-plugin-prettier中的prettier规则
    //开启这条规则后，会将prettier的校验规则传递给eslint，这样eslint就可以按照prettier的方式来进行代码格式的校验
    'prettier/prettier': 'error',//表示被prettier标记的地方抛出错误信息。
    "quotes": ['error'],// // 字符串必须使用双引号，否则报错
    "react/jsx-boolean-value": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "semi": ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
};
