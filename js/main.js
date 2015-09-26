$(document).ready(function() {

  var menuButton = $('.menuB');
  var menuImage = $('.menuI');
  var menu = $('.menu');
  
  var menuClick = 0;
  
  var Start = function() {
  }
  
  var OpenMenu = function() {
    menu.animate({'top': '+=100vh'}, 'slow');
    
    
  }
  
  var CloseMenu = function() {
    menu.animate({'top': '-=100vh'}, 'slow');
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











