var goTo = document.getElementById("goTo");
var curH =document.documentElement.clientHeight||document.body.clientHeight;
function fn() {
    var curT =document.documentElement.scrollTop||document.body.scrollTop;
    goTo.style.display = curT >= curH ? "block" : "none";
}
window.onscroll = fn;
goTo.onclick = function () {
    goTo.style.display = "none";
    window.onscroll = null;
    var tarT = (document.documentElement.scrollTop||document.body.scrollTop) ;
    var step = (tarT / 500) * 10;//步长
    var timer = window.setInterval(function () {
        document.documentElement.scrollTop -= step;
        document.body.scrollTop -= step;
        if ((document.documentElement.scrollTop||document.body.scrollTop) <= 0) {
            window.onscroll = fn;
            window.clearInterval(timer);
        }
    }, 10);
};