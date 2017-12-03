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


    // slider();
    // function slider() {
    //     document.getElementById('slider_items1').style.backgroundColor='#ffa687';
    //     document.getElementById('slider_items1').style.color='#ffffff';
    //     var getelem = document.getElementById('slider_bott_ul');
    //     var  count = getelem.childElementCount;
    //     var fnd = getelem.children;
    //     for (var i =0; i<count; i++){
    //         fnd[i].onclick = showDiv;
    //     }
    // }

    slow_image();

    function slow_image() {

        var img = document.getElementsByClassName('img_for_clide');
        var main_img = document.getElementById('main_img');
        console.log(main_img.src);
        for (var i=0; i<img.length; i++){
            var  img_click =  img[i];
            img_click.addEventListener('click', function (e) {

                main_img.src = event.target.src;
            })
        }


    }


};
