const obj = new Proxy({}, {
    get(target, propkey, receiver){
        return Reflect.get(target, propkey, receiver);
    },
    set(target, propkey, value, receiver){
        return Reflect.set(target, propkey, value, receiver);
    }
})

/**
 * target参数表示所要拦截的目标对象
 * handler参数也是一个对象，用来定制拦截行为
 * 
 * 上述例子中：
 *      obj作为被代理的对象
 *      {}指向的是目标对象
 *      {}配置对象，制定一些代理的规则
*/