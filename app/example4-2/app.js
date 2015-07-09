/**
 * Created by kjk on 7/9/15.
 */
$(document).ready(function(){
    var gatherHelloOnce, gatherBadOnce;
    var resources = ["/json/hello.json", "/json/thiswill404.json", "/json/world.json", "/json/pizza.json"];
    function onDataReceived(data){
        $('#myDiv').append(data + " ");
    }

    function onError(err){
        $('#myErrorDiv').append("Error: " + err + " ");
    }

    $('#myButton').click(function (){
        var promiseChain = Promise.resolve();
        function addToChain(url){
            return promiseChain.then(function(){
                    return demoUtils.ajaxGet(url);
                }).then(onDataReceived,onError);
        }

        for(var i in resources){
            promiseChain = addToChain(resources[i]);
        }
    });

});