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
        gatherHelloOnce = gatherHelloOnce || demoUtils.ajaxGet("/json/hello.json");
        gatherHelloOnce.then(onDataReceived,onError);
    });

    $('#myBadButton').click(function (){
        gatherBadOnce = gatherBadOnce || demoUtils.ajaxGet("/json/thiswill404.json");
        gatherBadOnce.then(onDataReceived,onError);
    });
});