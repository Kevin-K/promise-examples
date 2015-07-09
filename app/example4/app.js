/**
 * Created by kjk on 7/9/15.
 */
$(document).ready(function(){
    var gatherHelloOnce, gatherBadOnce;

    function onDataReceived(data){
        $('#myDiv').append(data + " ");
    }

    function onError(err){
        $('#myErrorDiv').append("Error: " + err + " ");
    }

    $('#myButton').click(function (){
        demoUtils.ajaxGet("/json/hello.json")
            .then(onDataReceived,onError)
            .then(function(){
                return demoUtils.ajaxGet("/json/thiswill404.json")
            })
            .then(onDataReceived,onError)
            .then(function(){
                return demoUtils.ajaxGet("/json/world.json")
            })
            .then(onDataReceived,onError)
    });

});