$('#link1').on('click', funtion(e)){
    e.peventDefault();
    $("html, body").animate({scrollTop: $('#Redes').offset().top},100);
};
