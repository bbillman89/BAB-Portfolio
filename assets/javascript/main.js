/*

Brett Billman
Portfolio site
main.js
December 2018

*/


$(document).ready(function(){

    //Smooth Scroll to selected anchor
    $( "a.scrollLink" ).click(function( event ) {

        event.preventDefault();
        
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);

    });


});
