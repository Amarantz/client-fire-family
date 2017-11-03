$(document).ready(
    function (){
        $("#clickbtn").click( function (){
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://www.google.com", false);
            xhr.send();

            console.log(xhr.status);
            console.log(xhr.statusText);
            $("#allProducts").text(xhr.status + " " + xhr.statusText)
        });

});
