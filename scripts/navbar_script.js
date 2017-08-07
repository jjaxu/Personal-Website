$(document).ready(function(){
    $('.inactive').on('click', function() {
        $('#myModal').modal('show');
    });
    
    var more_dropdown = ["gallery", "quotes", "time_capsule"];
    var page;

    if (window.location.pathname === "/") {
      page = "home";
    } else {
      var path_arr = window.location.pathname.split("/");
      page = path_arr[path_arr.length - 1].split(".html")[0];
    }

    $("#" + page).addClass("active");
    if ($.inArray(page, more_dropdown) !== -1) {
      $("#more").css("color", "yellow");
    }
    /*
    $('#' + page).on('click', function() {
        $("#" + page).addClass("active");
        alert(page);
    });
    */
});
