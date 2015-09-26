$(document).ready(function() {

  var menuButton = $('.menuB');
  var menuImage = $('.menuI');
  var menu = $('.menu');
  
  var menuClick = 0;
  
  var Start = function() {
    console.log(document.offsetHeight);
  }
  
  var OpenMenu = function() {
    menu.animate({'top': '+=100vh'}, 'slow');
    
    menuImage.removeClass('menuI').addClass('menuI-close');
  }
  
  var CloseMenu = function() {
    menu.animate({'top': '-=100vh'}, 'slow');
    
    menuImage.removeClass('menuI-close').addClass('menuI');
  }
  
  menuButton.click(function(){
    if(menuClick % 2 == 0){
      OpenMenu();
      menuClick++;
    }else{
      CloseMenu();
      menuClick++;
    }
  });
  
  menuImage.click(function(){
    if(menuClick % 2 == 0){
      OpenMenu();
      menuClick++;
    }else{
      CloseMenu();
      menuClick++;
    }
  });
    
  Start();
  
});











