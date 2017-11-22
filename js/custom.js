window.onload = function () {


    function showDiv(eventObj) {
        var elem = eventObj.target.id;
        var y = document.getElementById(elem + 't');
        switch (y.id){
            case 'slider_items1t':
                document.getElementById('slider_items1').style.backgroundColor='#ffa687';
                document.getElementById('slider_items1').style.color='#ffffff';
                document.getElementById('slider_items2').style.backgroundColor='';
                document.getElementById('slider_items2').style.color='#555555';
                document.getElementById('slider_items1t').style.display='flex';
                document.getElementById('slider_items2t').style.display='none';
                break;
            case 'slider_items2t':
                document.getElementById('slider_items2').style.backgroundColor='#ffa687';
                document.getElementById('slider_items2').style.color='#ffffff';
                document.getElementById('slider_items1').style.backgroundColor='';
                document.getElementById('slider_items1').style.color='#555555';
                document.getElementById('slider_items1t').style.display='none';
                document.getElementById('slider_items2t').style.display='flex';
        }




    }
    function slidertop() {
        var slides = document.querySelectorAll('.slider .slide');
        var curentSlide = 0;
        var  slideInterval = setInterval(init, 4000);
        var list2 = document.getElementsByClassName('list_slide');

        function init() {
            list2[curentSlide].className = 'list_slide';
            slides[curentSlide].className = 'slide';
            curentSlide = (curentSlide + 1)%slides.length;
            slides[curentSlide].className = 'slide  showing';
            list2[curentSlide].className = 'list_slide red';
        }

        var next = document.getElementById('next');
        var prev = document.getElementById('previos');
        function nextSlide() {
            gotoslide(curentSlide + 1);
        }

        function prevSlide() {
            gotoslide(curentSlide - 1);
        }


        next.onclick = function () {
            nextSlide();
        };
        prev.onclick = function () {
            prevSlide();
        };

        function gotoslide(n) {
            list2[curentSlide].className = 'list_slide';
            slides[curentSlide].className = 'slide';
            curentSlide = (n + slides.length)%slides.length;
            slides[curentSlide].className = 'slide showing';
            list2[curentSlide].className = 'list_slide red';
        }
    }

    slidertop();

    openmenu();
    function  openmenu() {
        var selector = document.getElementsByName('ancor');
        for (var t = 0; t < selector.length; t++) {
            selector[t].className = 'menu_icons_open';
        }
        var myTag = document.getElementsByClassName('menu_icons_o');
        for (var i = 0; i < myTag.length; i++) {
            myTag[i].onclick = function (event) {
                if (event.target.className === '' || event.target.className == 'menu_icons_close') {
                    event.target.className = 'menu_icons_open ';
                } else {
                    event.target.className = 'menu_icons_close';
                }

            }
        }
    }


    slider();
    function slider() {
        document.getElementById('slider_items1').style.backgroundColor='#ffa687';
        document.getElementById('slider_items1').style.color='#ffffff';
        var getelem = document.getElementById('slider_bott_ul');
        var  count = getelem.childElementCount;
        var fnd = getelem.children;
        for (var i =0; i<count; i++){
            fnd[i].onclick = showDiv;
        }
    }


};
