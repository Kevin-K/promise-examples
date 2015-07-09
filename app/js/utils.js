var demoUtils = demoUtils || {};

demoUtils.ajaxGet = function(url){
    return new Promise(function(resolve,reject){

        $.get(url,function(data,status){
            if(status === 404){
                reject(status);
            } else {
                resolve(data);
            }
        });
    });
}