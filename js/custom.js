window.onload = function () {

    if(document.getElementById('slider_target')){
        var slider_items; // заголовок вкладки
        var slider_body; // блок содержащий контент вкладки
        slider_items=document.getElementsByClassName('slider_items');
        slider_wrap_tab=document.getElementsByClassName('slider_wrap_tab');
        hideTabsContent(1);
        function hideTabsContent(a) {
            for (var i=a; i<slider_wrap_tab.length; i++) {
                slider_wrap_tab[i].classList.remove('showw');
                slider_wrap_tab[i].classList.add("hede");
                slider_items[i].classList.remove('whiteborder');
            }
        }
        document.getElementById('slider_target').onclick= function (event) {
            var target=event.target;
            if (target.className=='slider_items') {
                for (var i=0; i<slider_items.length; i++) {
                    if (target == slider_items[i]) {
                        showTabsContent(i);
                        break;
                    }}}};
        function showTabsContent(b){
            if (slider_wrap_tab[b].classList.contains('hede')) {
                hideTabsContent(0);
                slider_items[b].classList.add('whiteborder');
                slider_wrap_tab[b].classList.remove('hede');
                slider_wrap_tab[b].classList.add('showw');
            }
        }
    }







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




    overflow_hid();
    function overflow_hid() {
        var close = document.getElementById('close');
        var open =  document.getElementById('open');
        var modal = document.getElementById('modal_window');
        close.onclick = function () {
            document.body.style.overflow = 'visible';
            modal.style.display = 'none';
        };
        open.onclick = function () {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };
    }

    slow_image();

    var img = document.getElementsByClassName('img_for_clide');
    var main_img = document.getElementById('main_img');
    hide_border(0);
    function hide_border(a) {
             for (var i=a; i<img.length; i++) {
                 img[i].classList.remove('br_none');
                 img[i].classList.add("br_none");

             }
        }

    function slow_image() {
        var img = document.getElementsByClassName('img_for_clide') ;
        for (var i=0; i<img.length; i++){
            var  img_click =  img[i];
            img_click.addEventListener('click', function (e) {
                var target = e.target;
                main_img.src = event.target.src;
                for (var i=0; i<img.length; i++) {
                    if (target == img[i]) {
                        showBorder(i);
                        break;
                    }
                }
            })
        }
    }

    function showBorder(b) {
        if (img[b].classList.contains('br_none')) {
            hide_border(0);
                     img[b].classList.remove('br_none');
                     img[b].classList.add('br_top');
                 }

    }


};
