$(document).ready(
    function (){
        $("#clickbtn").click( function (){
            alert('btn pressed');
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://165.227.17.104:8000/product", false);
            xhr.send();

            console.log("Status: " + xhr.status);
            console.log("Text: " + xhr.statusText);
            $("#allProducts").text(xhr.status + " " + xhr.statusText)
        });

});
