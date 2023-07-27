/// <reference types="react-scripts" />


//找不到模块“./index.module.less”或其相应的类型声明。

declare module "*.module.less" {
    const classes: {
      readonly [key: string]: string;
    };
    export default classes;
    declare module "*.less";
  }
  