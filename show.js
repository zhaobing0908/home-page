function show() {
    var vote = document.getElementsByClassName("vote");
    var num = document.getElementsByClassName("num");


    for (var i=0; i<vote.length; i++){
        ~function(k){
            vote[k].onclick = function() {
                vote[k].style.color = "#a5c512";
                num[k].innerHTML++;
                data[i]._span++;
                vote[k].onclick=null;
            }

        }(i)
    }
}
show();

