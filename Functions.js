//在界面加载图片
function setPriImgSource() {
    priImg.source = ""  //先清除已有的qurl，类似刷新操作
    priImg.source = "image://mypixmap/"+Math.random()   //？？？//必须加上后面的Math.random()才能刷新图片
}

//截取屏幕
function captureScreen(){
    root.visible = false;
    cutTimer.interval += arguments[0];
    cutTimer.start();
}

//截图选中区域
function cutArea(x,y,w,h){
    shotFullScreen(x+1,y+1,w-3,h-3);
    setPriImgSource();
}
function calculatePrmWidthChangeScale()
{
    var diaplayWidth;
    var trueWidth=getCurrentPixmapWidth();
    if(showAnnotationToolClickTimes == 0)
    {
        diaplayWidth=leftContent.width;
    }
    return diaplayWidth/trueWidth;
}
function calculatePrmHeightChangeScale()
{
    var diaplayHeight;
    var trueHeight=getCurrentPixmapHeight();
    if(showAnnotationToolClickTimes == 0)
    {
        diaplayHeight=leftContent.height;
    }
    return diaplayHeight/trueHeight;
}
//加载备截取截图
function setSelectImg(){
    selectWin.sImg.source = ""
    selectWin.sImg.source = "image://mypixmap/"+Math.random()
}

//改变qml端文字输入框状态
function inputStatusChange()
{
    painter.currentGraphical=4;
    textarea.text="ctrl+S保存";
}
function backInputInitialStatus()
{
    painter.currentGraphical=4;
    textarea.text="ctrl+S保存";
}
