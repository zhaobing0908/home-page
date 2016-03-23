var col = document.getElementById("list-box");
var But = document.getElementById("but");

var total = 0, totalPage = 0, pageNum = 8, curPage = 1;

u.ajax("data1.txt", function (data)
{
    total = data.length;
    totalPage = Math.ceil(total / pageNum);
    bindData(curPage, data);
    mar();
    show(data);
    var page=1;
    curPage = page;

    But.onclick= function (e) {
        e = e || window.event;
        var tar = e.target || e.srcElement;
        if (tar.tagName.toLowerCase() === "li") {

            if (tar.id === "li1") {
                curPage = 1;
            } else if (tar.id === "li2") {
                curPage = 2;

            } else if (tar.id === "li3") {
                curPage = 3;

            } else if (tar.id === "li4") {
                curPage = 4;

            }  else if (tar.id === "next") {
                if (curPage === totalPage) {
                    return;
                }else{curPage++;}

            }else if(tar.id==="last"){
                curPage=totalPage;
            }
        }
        bindData(curPage, data);
        bindPage();
        mar();
        show(data);
    };
});
//1页 0-11 2页 12-23  3页 24-35  n也  n*pageNum-12-n*pageNum-1
function bindData(page, data) {
    var sIndex = (page - 1) * pageNum, eIndex = page * pageNum - 1;
    var str = "";
    for (var i = sIndex; i <= eIndex; i++) {
        var cur = data[i];
        if (cur) {
            str += '<li class="div1 _div">';
            str += '<div>';
            str += '<div class="_img"><img src="'+cur.img+'" alt=""/></div>';
            str += '<p class="state">'+cur.state+'</p>';
            str+='<p class="price">'+cur.price+'';
            str+='<span>'+cur.span+'</span></p>';
            str+='<p class="buy"><a href="">'+cur.buy+'<i class="iconfont">'+cur.icon+'</i></a>';
            str+='<span class="_span"><span class="num">'+cur._span+'</span>';
            str+='<i class="iconfont vote" >'+cur.i+'</i></span></p>';
            str += "</div>";
            str += "</li>"
        }
    }
    col.innerHTML = str;

}


/*最右边一列的margin-right等于0*/
function mar(){
    var List=document.getElementById("list-box").getElementsByTagName("li");
    for(var i=0;i<List.length;i++){
        if(List[i].className=="div1 _div"){
            var z=i+1;
            if(z%4===0){
                List[i].style.marginRight=0;

            }}
    }
}

function bindPage(){
    var oPageLis=document.getElementById("but").getElementsByTagName("li");

    for(var i=0;i<4;i++){
            oPageLis[i].className=i===(curPage-1)?"select":null;

        }
}

/*
window.onload=function() {
    var vote = document.getElementsByClassName("vote");
    var num = document.getElementsByClassName("num");
    for (var i=0; i<vote.length; i++){
        ~function(k){
            vote[k].onclick = function() {
            vote[k].style.color = "#a5c512";
            num[k].innerHTML++;
            vote[k].onclick=null;
            }

        }(i)
    }
}
*/



function show(data) {
    var vote = document.getElementsByClassName("vote");
    var num = document.getElementsByClassName("num");
    for (var i=0; i<vote.length; i++){
        ~function(k){
            vote[k].onclick = function() {
                vote[k].style.color = "#a5c512";
                num[k].innerHTML++;
                vote[k].onclick=null;

              data[(curPage*8-8+k)]._span++;


            }

        }(i)
    }
}
























