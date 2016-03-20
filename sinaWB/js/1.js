var movieList = document.getElementById("movieList");
var oLis = movieList.getElementsByTagName("li");
var overBefore = movieList.getElementsByClassName("overBefore");
var overAfter = movieList.getElementsByClassName("overAfter");

for (var i = 0; i < oLis.length; i++) {
    var cur = oLis[i];
    cur.index = i;
    cur.onmouseenter = function () {
        for(var i=0;i<oLis.length;i++){
            oLis[i].className="";
        }
        this.className="select";
    };
}
