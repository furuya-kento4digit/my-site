$(function () {
    // var------------------
    age = $('.age');
    scrollTop = 0;
    // var------------------
    
    // on------------------
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        
        // animation------------------
        ageMoveIn(1, 'h2', "0"); //291
        ageMoveIn(2, 'i#game', "0"); //383.5
        ageMoveIn(2, 'i#tv', "0");
        ageMoveIn(2, 'i#child', "-4.5vw");
        
        // animation------------------

    });
    $(window).on('load resize', function () {
        getSection();
    });
    // on------------------
    
    getSection();
    
    ageText = age.find('h2').text();

    // function------------------
    function offtop(obj){
        offTop = obj.offsetTop;
        return offTop;
    }
    function getSection(){
        sections = [];
        sectionTops = [];
        sectionHeights = [];
        $('section').each(function(){
            sections.push(this);
            if ($(this).hasClass('age') != true) {
                $(this).addClass('sec');
            }
        });
        for (let s of sections) {
            sectionTops.push(offtop(s));
            sectionHeights.push(s.clientHeight);
        }
    }
    function ageMoveIn(n, youso, takasa){
        if (scrollTop > sectionTops[n] - sectionHeights[1]) {
            $('section').eq(n).find($(youso)).animate({
                top: takasa,
                opacity: 1
            }, 1500);
        }
    }
    // function------------------
    
    // console------------------
    console.log(scrollTop);
    // console------------------
});