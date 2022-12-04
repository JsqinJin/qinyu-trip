export const getAssetURl = (image)=>{
    // vite 获取路径特殊方法
    // 参数一相对路径
    // 参数二当前路径
    return new URL(`../assets/img/${image}`, import.meta.url).href
}