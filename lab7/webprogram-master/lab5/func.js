const nums = Array.from({length:10},()=>Math.floor(Math.random()*60))
console.log(nums)
var max = nums[0];
for(var i = 1; i < nums.length; i++) {
   var cur = nums[i];
   cur > max ? max = cur : null
}
console.log('max - ',max);

var min= nums[0];
for(var i = 1; i < nums.length; i++) {
   var cur = nums[i];
   cur < min ? min = cur : null
}
console.log('min - ',min);

let _median = arr => {
    arr.sort();
          //求中位数
    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
};

console.log('median - ',_median(nums))
var quickSort = function(arr) {

　　if (arr.length <= 1) { return arr; }

　　var pivotIndex = Math.floor(arr.length / 2);

　　var pivot = arr.splice(pivotIndex, 1)[0];

　　var left = [];

　　var right = [];

　　for (var i = 0; i < arr.length; i++){

　　　　if (arr[i] < pivot) {

　　　　　　left.push(arr[i]);

　　　　} else {

　　　　　　right.push(arr[i]);

　　　　}

　　}

　　return quickSort(left).concat([pivot], quickSort(right));

};
console.log(quickSort(nums));

// const divs = document.getElementsByTagName('div').length;
// const h4 = document.getElementsByTagName('h4').length;
// const li = document.getElementsByTagName('li').length;
// console.log('div - ', divs);
// console.log('h4 - ', h4);
// console.log('li - ', li);
const elements={};
const tags = document.getElementsByTagName('*')
Object.values(tags).forEach(t =>{
	elements[t.nodeName] = (elements[t.nodeName]||0)+1
})
console.log(elements)





//lab6
// 获取弹窗
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
// 打开弹窗的按钮对象
var btn = document.getElementById("myBtn");
 
// 获取 <span> 元素，用于关闭弹窗
var span = document.querySelector('.close'); 
var span1 = document.querySelector('.close1'); 
var Avatar = document.querySelector('.Avatar');
 
// 点击按钮打开弹窗
btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    document.body.style.position='fixed';
};
Avatar.onclick=function(){
 	modal1.style.display = "block";
    document.body.style.overflow = 'hidden';
    document.body.style.position='fixed';
};
 
// 点击 <span> (x), 关闭弹窗
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
    document.body.style.position='static';
    modal1.style.display = "none";
};
span1.onclick = function() {
    // modal.style.display = "none";
    document.body.style.overflow = 'auto';
    document.body.style.position='static';
    modal1.style.display = "none";
}
 
// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//lab7

var chat = document.getElementById("chat-btn");
var con = document.getElementsByClassName("container")[0];
var clos = document.getElementsByClassName("close2")[0];
chat.onclick = function(){
    con.style.display = "block"; 
}
clos.onclick = function(){
    con.style.display = "none";
}
var ul = document.getElementsByClassName("list-chat")[0];
var form = document.forms.namedItem("comment");
var face = '<img src="img/face1.png" width=30 style="border-radius:50%">';
var send =  document.querySelectorAll("button")[2];
var myDate = new Date();
    // 创建一个计数变量用来控制聊天框中的内容条目数
var count = 0

// 创建按钮事件监听
send.addEventListener("click", function (ev) {
        // 清除事件默认行为
    ev.preventDefault();
        // 创建新留言
    var li = document.createElement("li");
        // 判断用户输入内容是否为空
    if (form.content.value.trim().length === 0) {
        alert('请输入留言！');
            // 设置焦点在输入区域
        form.content.focus();
        return false;
    } else {
        li.innerHTML = face + form.content.value + '<span style="padding-left:10px;">'  + '</span>' + '<a href="" onclick="del(this)" style="padding-left:15px;color:coral;text-decoration:none;">delete</a>';
    }
        // 将最新留言加入到聊天框顶部
    if (ul.childElementCount === 0) {
        ul.appendChild(li);
         count += 1;
    } else {
        ul.insertBefore(li, ul.firstElementChild);
        count += 1;
    }
    setTimeout(function () {
            // 创建自动回复内容数组
        var replys = ['hello,can i help you？', 'i am siri', 'if you want say anything,please', 'tell me something', 'i am your assistant '];
            //使用Math.floor()函数取数组的元素值，Math.random()*5取0-4之间的数字
            // Math.floor()向下取整，Math.random()随机取>=0、<1的小数
        var random = replys[Math.floor(Math.random() * 5)];
        var reply = document.createElement("li");
        var sevPic = '<img src="img/face2.png" width=30 style="border-radius:50%">';
            // 随机取自动回复数组中的字符串
        reply.innerHTML = sevPic + '<span style="color:#0aa344;">' + random + '</span>' + '<span style="padding-left:10px;">'  + '</span>';
            // 将自动回复置顶到聊天窗口
        ul.insertBefore(reply, ul.firstElementChild);
        count += 1;
    }, 500);
        // 如果聊天条目超过10则清空条目
    if (count > 10) {
        ul.innerHTML = '';
        count = 0;
    }
        // 发送完毕后清空输入框并设置焦点到输入框
    form.content.value = null;
    form.content.focus();
}, false);

function del(ele) {
    this.event.preventDefault();
    return confirm('是否删除？') ? ul.removeChild(ele.parentElement) : false;
}
