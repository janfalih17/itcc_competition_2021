$(document).ready(function(){
    $(window).scroll(function(){
        let header = $('#header');
        let height = $(window).scrollTop();
        if(height > 70){
            header.addClass('scrollActive');
        } else {
            header.removeClass('scrollActive');
        }
    });
    // Category Slider Animate
    $('#right-button-category').click(function(e) {
        e.preventDefault();
        $('#list-category').animate({
          scrollLeft: "+=200px"
        });
      });
    $('#left-button-category').click(function(e) {
      e.preventDefault();
      $('#list-category').animate({
        scrollLeft: "-=200px"
      });
    });

    // Course Slider Animate
    $('#right-button-course').click(function(e) {
        e.preventDefault();
        $('#list-course').animate({
          scrollLeft: "+=200px"
        });
      });
    $('#left-button-course').click(function(e) {
      e.preventDefault();
      $('#list-course').animate({
        scrollLeft: "-=200px"
      });
    });
    // Question Slider Animate
    $('#right-button-question').click(function(e) {
      e.preventDefault();
      $('#list-question').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#left-button-question').click(function(e) {
      e.preventDefault();
      $('#list-question').animate({
        scrollLeft: "-=200px"
      });
    });
    
    // Question Slider Animate
    $('#right-button-video').click(function(e) {
      e.preventDefault();
      $('#list-video').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#left-button-video').click(function(e) {
      e.preventDefault();
      $('#list-video').animate({
        scrollLeft: "-=200px"
      });
    });

    $('#recomendation-course-detail-right').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-detail').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#recomendation-course-detail-left').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-detail').animate({
        scrollLeft: "-=200px"
      });
    });

    
    $('#recomendation-course-1-right').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-1').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#recomendation-course-1-left').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-1').animate({
        scrollLeft: "-=200px"
      });
    });
    
    $('#recomendation-course-2-right').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-2').animate({
        scrollLeft: "+=200px"
      });
    });
    $('#recomendation-course-2-left').click(function(e) {
      e.preventDefault();
      $('#recomendation-course-2').animate({
        scrollLeft: "-=200px"
      });
    });
})