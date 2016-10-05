(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

    $(document).onCommaKeyDown(launch, $.easyKey.options.withControlPressed);
    function launch(){
  window.open('https://docs.google.com/document/d/PAGEID/edit')
}
