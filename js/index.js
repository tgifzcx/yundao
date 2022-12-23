window.addEventListener('load', function () {
    //获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var banner = document.querySelector('.banner');
    var bannerWith = banner.offsetWidth;
    //鼠标经过banner图，就显示隐藏的按钮
    banner.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        //清除定时器变量
        timer = null;
    })
    banner.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            arrow_r.click();
        }, 1500);
    })
    //动态生成小圆圈，有几个图片就生成几个
    var ul = banner.querySelector('ul');
    var ol = banner.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        //创建li
        var li = document.createElement('li');
        //将li插入ol
        ol.appendChild(li);
        //通过自定义属性记录当前小圆圈的索引号
        li.setAttribute('index', i);

        //点击li变为白色，其他的li不变
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //将ol里面的li设置类名为current(变为白色)
            this.className = 'current';
            //点击小圆点，移动图片(移动ul)  index:当前li的索引号
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * bannerWith);
        });
    }
    ol.children[0].className = 'current';
    // 克隆第一张图片，放到ul之后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //点击右侧按钮，图片滚动一张
    var num = 0;
    //circle控制小圆圈播放
    var circle = 0;
    //右侧按钮
    arrow_r.addEventListener('click', function () {
        //如果图片显示到最后一张，则跳到第一张
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * bannerWith);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        circleChange();
    });
    //左侧按钮
    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            ul.style.right = 0;
            num = ul.children.length - 1;
        }
        num--;
        animate(ul, -num * bannerWith);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();
    });
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[circle].className = 'current';
    }
    //自动播放轮播图
    var timer = setInterval(function () {
        //手动调用点击事件
        arrow_r.click();
    }, 1500);
    //下拉菜单
    var ul_1 = document.querySelector('.ul_1');
    var lis = ul_1.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseover', function () {
            this.children[1].style.display = 'block';
            this.children[1].style.zIndex = 999;
        })
        lis[i].addEventListener('mouseout', function () {
            this.children[1].style.display = 'none';
        })
    }
})