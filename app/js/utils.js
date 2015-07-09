var demoUtils = demoUtils || {};

demoUtils.ajaxGet = function(url){
    return new Promise(function(resolve,reject){

        $.ajax({
            type: "GET",
            url: url,
            success: function(response){
                resolve(response);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                reject(thrownError);
            }
        });
    });
};