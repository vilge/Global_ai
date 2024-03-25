
$(document).ready(function(){
    $(".vote-btn").click(function(){
        var photo = $(this).siblings("img"); // Butona ait karde� img eleman�n� se�elim
        if (photo.hasClass("enlarge")) { // E�er foto�raf zaten b�y�t�lm��se
            photo.removeClass("enlarge"); // B�y�tme s�n�f�n� kald�ral�m
        } else {
            $(".photo img").removeClass("enlarge"); // Di�er foto�raflar�n b�y�tme s�n�f�n� kald�ral�m
            photo.addClass("enlarge"); // Se�ili foto�raf� b�y�telim
        }
    });
});