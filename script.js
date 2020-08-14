$(document).ready(function(){

    $('.page-scroll').on('click', function(event) {

        let tujuanHref = $(this).attr('href');
        let elemenTujuan = $(tujuanHref)

        // console.log(elemenTujuan.offset().top);


        // console.log ($('body').scrollTop());

        $('html,body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1000, 'swing'
        )

    //    event.preventDefault();
     })

     $('nav').on('click', function(params) {
         if(Window.screenX <= 1061) {
             $('nav').toggleClass('fixed-top')
         }

     })

    

})

// const pageScroll = document.getElementsByClassName('page-scroll')

// pageScroll.addEventListener('click', function(event){
//     console.log('hello')
// })
