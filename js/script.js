$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.main-nav,.header-btn').toggleClass('active');
        $('body').toggleClass('lock');
    });
});