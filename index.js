

$(function () {
    initBodyHeight();
    resizeWindow();
});

function resizeWindow() {
    $(window).resize(function () {

        initBodyHeight();
    });
}


function initBodyHeight() {
    console.log('init');

    var windowHeight = $(window).height();//窗体的高度，值的是用来显示页面的窗体内容
    var headerHeight = $('#header').outerHeight(true);  //头部的高度,包括border,padding,margin的高度

    var divHeight = windowHeight - headerHeight;

    $('#main-content').height(divHeight);

}