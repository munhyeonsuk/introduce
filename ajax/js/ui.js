$(function(){
    $(window).on('scroll', function(){ //화살표 함수에서는 this 사용불가
        // $("body").attr("data-scrollps", $(this).scrollTop()) scrollTop 컨텐츠의 위치
        let scrpos = $(this).scrollTop();
        if(scrpos > 80){ //스크롤이 아래로
            $("#hd").addClass('bg-dark border-bottom border-white').removeClass('bg-white')
        } else {
            $("#hd").removeClass('bg-dark border-bottom border-white').addClass('bg-white')
        }
    })
})