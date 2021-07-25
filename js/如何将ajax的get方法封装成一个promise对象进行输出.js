/*
* 如何将Ajax的get方法封装成一个promise对象进行输出？
* */

const PromiseAjax = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.response);
            }else if (xhr.readyState === 4 && xhr.status !== 200){
                reject("error");
            }
        }
    })
}