
var $$        = Dom7;
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}


// Init App
var app = new Framework7({
  id: 'com.itm.palm_scanner_gimmick',
  root: '#app',
  theme: theme,
  view: {
    animate: true,
    xhrCache: false,
    pushState: true,
  },
  touch: {
    tapHold: true
  },
  routes: routes,
  dialog: {
    title: 'Pesan',
  },
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  on: {
    init: function(){
      try{
        window.plugins.insomnia.keepAwake();
      }catch(e){
        console.log("plugin keepawake tidak tersedia");
      }
        // var myVideo = document.getElementById("my-video"); 
        // myVideo.play();
    },
    pageInit: function(page){
      var router = page.router;
      
        var myVideo = document.getElementById("my-video"); 
        myVideo.pause();
        myVideo.currentTime = 0; 

        $$('.page-content').touchstart(function(e){
        // $$('.page-content').on('taphold', function () {
          if (e.touches.length > 0) {
            
            myVideo.play();
            navigator.vibrate([1000, 1000, 1000, 1000, 1000]);
          }
           /*if (myVideo.paused){
              myVideo.play();
              navigator.vibrate([1000, 1000, 1000, 1000, 1000]);
            }else{
              myVideo.pause(); 
              navigator.vibrate(0);
            } */
        });

        $$('.page-content').touchend(function(){
          myVideo.pause(); 
          myVideo.currentTime = 0; 
          navigator.vibrate(0);
        });

        $$('.page-content').mouseleave(function(){
          myVideo.pause(); 
          myVideo.currentTime = 0; 
          navigator.vibrate(0);
        });

        $$('.page-content').mouseout(function(){
          myVideo.pause(); 
          myVideo.currentTime = 0; 
          navigator.vibrate(0);
        });

    }
  }
});

var mainView = app.views.create('.view-main');