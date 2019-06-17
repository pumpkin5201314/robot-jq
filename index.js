 
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

 // var paras = "key= 72a5507158ff4ca5aa05043d4c24ce55&info="+sayContent;

function getData(val) {
        var paras = "key= 72a5507158ff4ca5aa05043d4c24ce55&info="+val;
         ajax('POST',"http://www.tuling123.com/openapi/api",success, paras, true)
          function success(data){
            // console.log(data)
          da=eval("("+data+")")
          addDom('robot', da.text);
          }
    
}
init()