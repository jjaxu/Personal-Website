$.ajax({
  url: '/resources/puns.json',
  dataType: 'json',
  type: 'get',
  cache: true,
  success: function (data) {
    var puns_math = [];
    var puns_science = [];
    var puns_cs = [];
    var puns_music = [];
    var puns_other = [];

    $(data).each(function (index, value) {
      if (value.category === "MATH") {
        puns_math.push('<li class="lead">' + value.content + '</li>');
      } else if (value.category === "PHYSICS" ||
                value.category === "CHEMISTRY" ||
                value.category === "BIOLOGY") {
        puns_science.push('<li class="lead">' + value.content + '</li>');
      } else if (value.category === "COMP-SCI") {
        puns_cs.push('<li class="lead">' + value.content + '</li>');
      } else if (value.category === "MUSIC") {
        puns_music.push('<li class="lead">' + value.content + '</li>');
      } else {
        puns_other.push('<li class="lead">' + value.content + '</li>');
      }
    });
    $("#list_math").html(puns_math);
    $("#list_science").html(puns_science);
    $("#list_cs").html(puns_cs);
    $("#list_music").html(puns_music);
    $("#list_other").html(puns_other);
  },
  error: function(XMLHttpRequest, textStatus, errorThrown) {
    console.error ("Failed to load puns :(");
    $("#list_math").html("<h2 class=text-center>Failed to load puns :(</h2>");
    $("#list_science").html("<h2 class=text-center>Failed to load puns :(</h2>");
    $("#list_cs").html("<h2 class=text-center>Failed to load puns :(</h2>");
    $("#list_music").html("<h2 class=text-center>Failed to load puns :(</h2>");
    $("#list_other").html("<h2 class=text-center>Failed to load puns :(</h2>");
  }
});
