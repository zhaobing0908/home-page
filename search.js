var search = document.getElementById("search");
var _this;

function abc(data) {
    //得到所有的关键字数组
    var words = data.s;
    var ul = document.getElementById('content');
    ul.innerHTML = "";
    var frag = document.createDocumentFragment();
    ul.onmousedown = function (e) {
        e = e || window.event;
        search.value = e.target.innerHTML;
        _this=search.value;
        console.log(search.value);
        ul.style.display = "none";
    };

    document.body.onclick = function (e) {
        e=e||window.event;
        var tar= e.target|| e.srcElement;
        if(tar.id=="search"){
            ul.style.display = "block";
        }else{
            ul.style.display = "none";
        }


    };
    words.forEach(function (word) {
        var li = document.createElement('li');
        li.innerHTML = word;
        frag.appendChild(li);
        li.style.listStyle = "none";

    });
    ul.appendChild(frag);
    if (ul.innerHTML != "") {
        ul.style.border = "1px solid #ccc";
    }

    var but = document.getElementById("name");
    but.onmouseup = function () {
        search.value!="" ? window.open('http://www.baidu.com/s?wd=' + search.value) : null;

    }
}
function change() {
    //输入的关键字
    var keyword = document.getElementById('search').value;
    //拼出来百度URL
    /*console.log("keyword1")*/
    var url = 'http://suggestion.baidu.com/su?wd=' + keyword + '&cb=abc';
    //创建一个脚本元素
    var script = document.createElement('script');

    //指定URL
    var val=keyword.replace(/(^ +| +$)/g,"");
    console.log(keyword);
    if(val!=""){
        script.src = url;
    }
    //把当前的脚本追 加到当前页面上
    document.body.appendChild(script);

}




