// 필요한 함수들 
// -> scroll animation -> nav -> web, tablet, phone
function navScroll(){
    $('nav>ul>li>a').on('click',function(e){
        let navHref = $(this).attr('href');
        console.log(navHref);

        return false;
    })
}
function mobilenav(){}
// gallery