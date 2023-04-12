$(document).ready(function() {
    // Toggle show/hide dropdown list
    $("#toggleBtn").click(function() {
        $("#dropdownList").fadeToggle();
        $("#toggleBtn i").toggleClass("fa-chevron-up fa-chevron-down");
    });
    
    $(".toggle-btn").click(function() {
        $(".dropdown-list").fadeToggle("fast");
        $(".toggle-btn").toggleClass("active");
    });
});
