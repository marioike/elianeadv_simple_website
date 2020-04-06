

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  function menuMobile() {
    var x = document.getElementById("myLinks-eia");
    if (x.style.height === "270px") {
      x.style.height="0";
    } else {
      x.style.height="270px";
    }
  }

  $(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
      $(this).toggleClass('open');
    });
  });
