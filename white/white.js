// 工具封装,根据id来获取元素
function $(id) {
    return document.getElementById(id);
}

// 创建div, className是其类名
function createDiv(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}
var clock = null;
var state = 0;
var speed = 3;
var flag = false;

//点击开始游戏按钮 开始游戏
function start() {
    if (!flag) {
        init();
    } else(
        alert('游戏已经开始，无需再次点击！')
    )
}

// 初始化 init
function init() {
    flag = true;
    for (var i = 0; i < 4; i++) {
        createRow();
    }
    // 添加onclick事件
    $('main').onclick = function(ev) {
            ev = ev || event;
            judge(ev);
        }
        // 定时器 每30毫秒调用一次move()
    clock = window.setInterval('move()', 30)
}

// 判断是否点击黑块、白块
function judge(ev) {
    if (ev.target.className.indexOf('black') == -1 &&
        ev.target.className.indexOf('cell') !== -1) {
        ev.target.parentNode.pass1 = 1;
    }
    if (ev.target.className.indexOf('black') !== -1) {
        ev.target.className = 'cell';
        ev.target.parentNode.pass = 1;
        score();
    }
}

// 判断游戏是否结束
function over() {
    var rows = con.childNodes;
    if (rows.length == 5 && rows[rows.length - 1].pass !== 1) {
        fail()
    }
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].pass1 == 1) {
            fail();
        }
    }
}

// 游戏结束
function fail() {
    clearInterval(clock);
    flag = false;
    confirm('你的最终得分为' + parseInt(document.getElementById('score').innerHTML));
    var con = document.getElementById('con');
    con.innerHTML = '';
    document.getElementById('score').innerHTML = 0;
    con.style.top = '-408px';
}

// 创造一个<div class="row">并且有四个子节点<div class="cell">
function createRow() {
    var con = document.getElementById('con');
    var row = createDiv('row');
    var arr = createCell();
    con.appendChild(row);
    for (var i = 0; i < 4; i++) {
        row.appendChild(createDiv(arr[i]))
    }
    if (con.firstChild == null) {
        con.appendChild(row);
    } else {
        con.insertBefore(row, con.firstChild);
    }
}


// 创建一个类名的数组，其中一个为cell black, 其余为cell
function createCell() {
    var temp = ['cell', 'cell', 'cell', 'cell'];
    var i = Math.floor(Math.random() * 4);
    temp[i] = 'cell black';
    return temp;
}

//让黑块动起来
function move() {
    var con = document.getElementById('con');
    var top = parseInt(window.getComputedStyle(con, null)['top']);
    if (speed + top > 0) {
        top = 0;
    } else {
        top += speed;
    }
    con.style.top = top + 'px';
    over();
    if (top == 0) {
        createRow();
        con.style.top = '-102px';
        delRow()
    }
}

// 加速函数
function speedUp() {
    speed += 2;
    if (speed == 20) {
        alert('你超神了');
    }
}

//删除某行
function delRow() {
    var con = document.getElementById('con');
    if (con.childNodes.length == 6) {
        con.removeChild(con.lastChild);
    }
}

//记分
function score() {
    var newScore = parseInt($('score').innerHTML) + 1;
    $('score').innerHTML = newScore;
    if (newScore % 10 == 0) {
        speedUp();
    }
}