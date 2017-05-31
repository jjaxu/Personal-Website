$(document).ready(function(){
    $("#name").fadeIn(2000);
    $("#title").fadeIn(2000);
    $("#bar").fadeIn(2000);
    $("#pics").fadeIn(2000);

    var id;
    var clr;
    
    $('.about').on('mouseover', function() {
        id = $(this).attr('id');

        if (id == "fb") {
            clr = 'blue';
        } else if (id == 'gh') {
            clr = 'purple';
        } else if (id == 'li') {
            clr = 'cyan';
        } else {
            clr = 'red';
        }

        $('#name').css(
            {color: clr,
            fontWeight:'bold'
        });
    });

    $('.about').on('mouseleave', function() {
        $('#name').css(
            {color: 'black',
            fontWeight:'normal'
        });
    });

});

/*
$(document).ready(function(){
    $("#name").fadeIn(2000,function(){
        $("#title").fadeIn(2000);
        $("#bar").fadeIn(2000,function(){
            $("#pics").fadeIn(2000);
        });
    });
});

*/
