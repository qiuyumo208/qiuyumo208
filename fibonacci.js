const fibonacci = (n)=> {
    if(n==1|n==2){
        return 1;}
        //因为斐波那契数列格式为：1、1、2、3、5、8、13、21、34、......,n=1和n=2的时候都是输出1
        return fn(n-1)+fn(n-2);
        //不断调用自身函数，n-1是穿进去的参数的前一次，就是最后n的前一个数字。所以n-2是最后传入参数的前两个数字。
        }
}

module.exports = fibonacci


