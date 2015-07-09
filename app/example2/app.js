/**
 * Created by kjk on 7/9/15.
 */
$(document).ready(function(){
    var gatherOnce;

    function onDataReceived(data){
        $('#myDiv').append(data + " ");
    }

    function buttonClickHandler(){
        gatherOnce = gatherOnce || demoUtils.ajaxGet("/json/hello.json");
        gatherOnce.then(onDataReceived);
    }
    $('#myButton').click(buttonClickHandler);
});