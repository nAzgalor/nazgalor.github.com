$(function () {
  var descriptions = $('.description');
  var LG = 230;
  var MD = 170;
  for (var i = 0; i < descriptions.length; i++) {
    if ($(window).width() >= 1200) {
      if($(descriptions[i]).text().length > LG) {
        var newText = $(descriptions[i]).text().slice(0, LG) + ' ... ' + '<a href="#" class="read-more">Read More</a>';
        $(descriptions[i]).empty().append(newText);
      };
    } else if (($(window).width() >= 768) && ($(window).width() < 1200)) {
      if($(descriptions[i]).text().length > MD) {
        var newText = $(descriptions[i]).text().slice(0, MD) + ' ... ' + '<a href="#" class="read-more">Read More</a>';
        $(descriptions[i]).empty().append(newText);
      };
    };
  };
});