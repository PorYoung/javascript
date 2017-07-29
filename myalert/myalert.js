/**
 * Created by PorYoung on 2017/7/28.
 * use this alert to replace javascript default alert
 * 参数设置
 * ①alert类型
 *  >可拖动、可最小化？
 *  >prompt型
 *  >颜色、背景、图标
 * ②文字是否可复制
 */
function myalert(titleString,textString) {
    titleString = typeof(titleString.toLocaleString())==="string"?titleString.toLocaleString()===""?"ALERT":titleString.toLocaleString():"ALERT";
    textString = typeof(textString.toLocaleString())==="string"?textString.toLocaleString()===""?"This is a alert":textString.toLocaleString():"This is a alert.";
    //设置body为模糊
    document.body.style.filter = "blur(2px)";
    //创建一个div作为遮罩层
    var wrap = document.createElement('div');
    //设置wrap样式
    wrap.style.position = "fixed";
    wrap.style.left = 0;
    wrap.style.right = 0;
    wrap.style.top = 0;
    wrap.style.bottom = 0;
    wrap.style.zIndex = "9999";
    wrap.style.backgroundColor = "#fff";
    wrap.style.opacity = ".7";
    //禁用右键菜单
    wrap.oncontextmenu = function() { return false; };
    document.documentElement.appendChild(wrap);
    //创建一个div作为alert窗口
    var DIV = document.createElement('div');
    DIV.innerHTML = "<span></span><p></p><i></i>";
    var title = DIV.getElementsByTagName('span')[0],
        text = DIV.getElementsByTagName('p')[0],
        btn = DIV.getElementsByTagName('i')[0];
    title.innerHTML = titleString;
    text.innerHTML = textString;
    //设置title样式
    title.style.display = "block";
    title.style.textAlign = "center";
    title.style.fontSize = "30px";
    title.style.height = "40px";
    title.style.lineHeight = "40px";
    title.style.color = "#000";
    //设置btn样式
    btn.style.position = "absolute";
    btn.style.bottom = "5px";
    btn.style.left = "50%";
    btn.innerHTML = "OK";
    btn.style.fontSize = "20px";
    btn.style.padding = "6px 6px";
    btn.style.marginLeft = "-16px";
    btn.style.borderRadius = "50%";
    btn.style.backgroundColor = "rgba(231,241,245,.7)";
    btn.style.cursor = "pointer";
    //设置文本样式
    text.style.fontSize = "25px";
    text.style.marginBottom = "40px";
    text.style.marginTop = 0;
    text.style.padding = "30px 10px";
    text.style.wordBreak = "break-all";
    text.style.textIndent = "20px";
    text.style.textShadow = "1px 1px 3px #fff";
    //设置alert窗口位置、大小和样式
    DIV.style.width = "300px";
    DIV.style.maxHeight = "250px";
    DIV.style.backgroundColor = "rgba(199,179,229,.9)";
    DIV.style.position = "absolute";
    DIV.style.left = "50%";
    DIV.style.top = "50%";
    DIV.style.borderRadius = "5px";
    //将该div添加到wrap结点下
    wrap.appendChild(DIV);
    var wid = DIV.offsetWidth, hei = DIV.offsetHeight;
    DIV.style.marginLeft = 0 - wid/2 + 'px';
    DIV.style.marginTop = 0 - hei/2 + 'px';
    //为btn添加事件
    btn.addEventListener('click',function () {
        document.body.style.filter = "";
        wrap.style.display = "none";
        wrap.parentNode.removeChild(wrap);
    },false)
}