// // TODO: In order to demonstrate this rule.We need to enable this rule.This rule is not turn on by default in the eslint-config-js-ts
// import { CODE_TABS } from "../constants/codeExamples";

// class Rectangle {
//   public width: number;
//   public height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// function badCode(): string {
//   // BAD CODE
//   const instance = new Rectangle(10, 20);
//   const getAreaFn = instance.getArea;

//   try {
//     return "[BAD CODE] Area of Rectangle is: " + getAreaFn();
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       return e.message;
//     } else {
//       return "Unknown error";
//     }
//   }
// }

// function goodCode(): string {
//   // GOOD CODE
//   const instance = new Rectangle(10, 20);
//   const getAreaFn = instance.getArea.bind(instance);
//   try {
//     return "[GOOD CODE] Area of Rectangle is: " + getAreaFn();
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       return e.message;
//     } else {
//       return "Unknown error";
//     }
//   }
// }

// export default {
//   [CODE_TABS.BAD_CODE]: badCode,
//   [CODE_TABS.GOOD_CODE]: goodCode,
// };
