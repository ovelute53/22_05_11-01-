import $ from "jquery";
import 'material-icons/iconfont/material-icons.css';

$(function(){
    let windowW = $(window).width();
    console.log(windowW);
    if(windowW >=1320){
      nav();
      subMenu();
      topScroll();
    }
    else if(windowW <1320 && windowW >=980){
      nav();
      subMenu();
      topScroll();
    }
    else if(windowW <980 && windowW >=580){
      mobileNav();
      gallery();
    }
    else if(windowW <580){
      mNav();
      gallery();
    }
  });

  // icon 

    function nav(){
      $('nav>ul>li>a').on('click', function(e){
        let navHref = $(this).attr('href');
        // console.log(navHref);
        let aPos = $(navHref).offset().top;
        console.log(aPos);
        $('html,body').animate({scrollTop:aPos},800);

        return false;
      });
    }

    function subMenu(){
        $('aside ul>li>a').on('click',function(e){
            let navHref = $(this).attr('href');
            let aPos = $(navHref).offset().top;
            console.log(aPos);
            $('html,body').animate({scrollTop:aPos},800);
        });
    }

    function topScroll(){
      $('aside .top').on('click',function(e){
        $('html,body').animate({scrollTop:0},800);
      });
    }
    // tab mobile
    function mobileNav(){
      $('header p#btn').on('click',function(e){
        $('nav').animate({left:'0'},800);
        $(this).hide();
      });
      $('nav>ul>li>a').on('click',function(e){
        let navHref = $(this).attr('href');
        // console.log(navHref);
        let aPos = $(navHref).offset().top;
        $('nav').css('left','-480px');
        console.log(aPos);
        $('html,body').animate({scrollTop:aPos},800);
        $('header p#btn').show();  
        
        return false;
      });
      $('nav .close').on('click',function(e){
        $('nav').animate({left:'-480px'},300);
        $('header p#btn').show();
      });
    }
      function mNav(){
        let navWidth = $('nav').innerWidth();
        //headet btn
          $('#btn').on('click',function(e){
              $('header nav').animate({left:'0'},800);
              $(this).hide();
          });
          //nav a
          $('nav li>a').on('click',function(e){
            let navHref =$(this).attr('href');
            let aPos = $(navHref).offset().top;
            $('html,body').animate({scrollTop:mNav},800);
            $('nav').css('left','-'+navWidth+ 'px');
            $('#btn').show();
            
            return false; 
          });
          //nav close
          $('nav .close').on('click',function(e){
            $('nav').animate({left:'-'+navWidth+'px'})
            $('#btn').show();
          });
      }
     //gallery
     function gallery(){
       //준비하기

       let fWidth = $('#all>figure').outerWidth(true)
      //  console.log(fWidth);
      $('#all>figure:last').prependTo('#all');
      $('#all').css('margin-left','-'+fWidth+'px')


       //이벤트
       $('#box05 .next').on('click',function(e){
         $('body').css('background-color','red');
         //animate
         $('#all').animate({marginLeft:'+='+fWidth+'px'},800,function(){
           $('#all>figure:last').prependTo('#all');
           $('#all').css('margin-left','-'+fWidth+'px')
         });
        });
         //준비하기
         $('#box05 .prev').on('click',function(e){
          $('#all').animate({marginLeft:'+='+fWidth+'px'},800,function(e){
            $('#all>figure:first').appendTo('#all');
            $('#all').css('margin-left','-'+fWidth+'px')
          });
         });
     }
  
