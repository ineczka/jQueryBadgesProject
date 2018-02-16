$(function() {

  $.ajax( {
    url : 'https://www.codeschool.com/users/i_nka2001.json',
    dataType: 'jsonp',
    success: function(response){
      $.each(response.courses.completed, function(index, elem){
         var button = $('<a href='+  elem.url+' target = blank ></a>').addClass('btn btn-primary').text("See Course"),
             title = $('<h3>'+  elem.title+ '</h3>'),
             image = $('<img>').attr('src', elem.badge),
             course = ("<div></div>").addClass('course'),
             badge = course.append(title, image, button);
        $('#badges').append(course);
      });
    }
  })
});
