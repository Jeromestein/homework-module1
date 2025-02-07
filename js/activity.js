$(document).ready(function() {
    $('table td').not(':contains("Not Available")').not(':first-child').css('cursor', 'pointer');
    
    $('table td').not(':contains("Not Available")').not(':first-child').click(function() {
        $(this).toggleClass('highlighted');
    });
}); 