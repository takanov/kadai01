// jsを記述する際はここに記載していく
//テキストカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {
    easing: 'easeInOut',
    duration: 1000,
    strokeWidth: 0.2,
    color: '#555',
    trailWidth: 0.2,
    trailColor: '#bbb',
    text: {
        style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',
            transform: 'translate(-50%,-50%)',
            'font-size':'2rem',
            color: '#fff',
        },
        autoStyleContainer: false
    },
    step: function(state, bar) {
        bar.setText(Math.round(bar.value()*100)+'%');
    }
});

bar.animate(1.0, function() {
    $("#splash_text").fadeOut(10);
    $(".loader_cover-up").addClass("coveranime");
    $(".loader_cover-down").addClass("coveranime");
    $("#splash").fadeOut();
});


// header 
var beforePos = 0;
function ScrollAnime() {
    var elemTop = $('#about').offset().top;
    var scroll = $(window).scrollTop();
    
    if(scroll == beforePos) {
    }else if(elemTop > scroll || 0 > scroll - beforePos){
        $('#header').removeClass('UpMove');
        $('#header').addClass('DownMove');
    }else{
        $('#header').removeClass('DownMove');
        $('#header').addClass('UpMove');
    }
    beforePos = scroll;
}
$(window).scroll(function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

$(window).on('load', function () {
    ScrollAnime();
});

var headerH = $('#header').outerHeight(true);
$('#g-nav .nav-list .nav-item a').click(function(){
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top-headerH;
    $('body, html').animate({scrollTop: pos}, 1000);
    return false;
});

