 //Click on any li in ul with class 'navbar-nav'
 $('ul.navbar-nav li').click(function(e) {
    var $this = $(this); // Declare variable for current li that we click
    $('ul.navbar-nav').find('li.active').last().removeClass('active') //Find all li that class class active and remove
    $('ul.navbar-nav').find('li.menuActive').last().removeClass('menuActive')
    $this.addClass('active menuActive'); //Add 'active' class to current li.
  });