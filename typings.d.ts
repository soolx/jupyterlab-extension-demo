declare module '*.css';
declare module "*.png";
declare module "*.less" {
    const content: any; 
    export default content; 
};
declare module "*.module.less" {
    const content: any; 
    export default content; 
};