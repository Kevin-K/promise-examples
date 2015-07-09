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

        function gatherAndShow(url){
            return demoUtils.ajaxGet(url).then(onDataReceived,onError);
        }

        var promises = [];
        for(var i in resources){
            promises.push(gatherAndShow(resources[i]));
        }

        Promise.all(promises).then(function(){
            alert("All done!");
        });
    });

});