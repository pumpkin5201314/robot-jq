 
function init () {
    bindEvent();
}
function bindEvent() {
    $('#inp').keyup(function (e) {
        if (e.keyCode == 13) {
            $('#submit').trigger('click');
        }
    });
    $('#submit').click(function (e) {
        var val = $('#inp').val();
        if (val) {
            addDom('mine', val);
            getData(val);
            $('#inp').val('');
        }
    })
}

// 文字添加到页面中去
function addDom(who, val) {
    $(' <div class="' + who + '">\
    <div class="avitor"></div>\
    <div class="text">' + val + '</div>\
</div>').appendTo($('.content-box'));
    var scrollHeight = $('.content-box')[0].scrollHeight ;
    var innerHeight = $('.content-box').innerHeight();
    $('.content-box').scrollTop(scrollHeight - innerHeight);
}


function getData(val) {
    $.ajax({
        url: 'http://temp.duyiedu.com/api/chat?',
        method: 'GET',
        dataType: 'json',
        data: {
            // appkey: 'dongmeiqi_1547441744650',
            text: val
        },
        success: function (res) {
            

            
                addDom('robot', res.text);
           
        }
    })
}
init()

var p=document.documentElement.clientHeight*0.08;
var wHeight=document.documentElement.clientHeight*0.9;
var contentBox=document.documentElement.clientHeight*0.7;
var inputBox =document.documentElement.clientHeight*0.12;

$(".wrapper").css("height",wHeight+"px");

$(".content-box").css("height",contentBox+"px");
 
$(".input-box").css("height",inputBox +"px");
$("p").css("height", p+"px");
			 