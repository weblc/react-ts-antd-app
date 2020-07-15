/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-07-14 18:02:10
 */
// TestDecorator.tsx
function Log(target: any, name: string, descriptor: any): any {
    // 这里是缓存原始值，用于在拦截器最后运行原始方法
    console.log(target)
      // 最后返回一个新的描述器
    return descriptor;
  };

  export default Log;
