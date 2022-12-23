window.addEventListener('load', function () {
    //��ȡԪ��
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var banner = document.querySelector('.banner');
    var bannerWith = banner.offsetWidth;
    //��꾭��bannerͼ������ʾ���صİ�ť
    banner.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        //�����ʱ������
        timer = null;
    })
    banner.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //�ֶ����õ���¼�
            arrow_r.click();
        }, 1500);
    })
    //��̬����СԲȦ���м���ͼƬ�����ɼ���
    var ul = banner.querySelector('ul');
    var ol = banner.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        //����li
        var li = document.createElement('li');
        //��li����ol
        ol.appendChild(li);
        //ͨ���Զ������Լ�¼��ǰСԲȦ��������
        li.setAttribute('index', i);

        //���li��Ϊ��ɫ��������li����
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //��ol�����li��������Ϊcurrent(��Ϊ��ɫ)
            this.className = 'current';
            //���СԲ�㣬�ƶ�ͼƬ(�ƶ�ul)  index:��ǰli��������
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * bannerWith);
        });
    }
    ol.children[0].className = 'current';
    // ��¡��һ��ͼƬ���ŵ�ul֮��
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //����Ҳఴť��ͼƬ����һ��
    var num = 0;
    //circle����СԲȦ����
    var circle = 0;
    //�Ҳఴť
    arrow_r.addEventListener('click', function () {
        //���ͼƬ��ʾ�����һ�ţ���������һ��
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
    //��ఴť
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
    //�Զ������ֲ�ͼ
    var timer = setInterval(function () {
        //�ֶ����õ���¼�
        arrow_r.click();
    }, 1500);
    //�����˵�
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