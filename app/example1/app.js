/**
 * Created by kjk on 7/9/15.
 */
$(document).ready(function(){
    function buttonClickHandler(){
        demoUtils.ajaxGet("/json/hello.json").then(function(data){
            $('#myDiv').append(data);
        });
    }
    $('#myButton').click(buttonClickHandler);



});