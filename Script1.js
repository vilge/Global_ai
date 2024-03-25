
$(document).ready(function(){
    $(".vote-btn").click(function(){
        var photo = $(this).siblings("img"); // Butona ait kardeþ img elemanýný seçelim
        if (photo.hasClass("enlarge")) { // Eðer fotoðraf zaten büyütülmüþse
            photo.removeClass("enlarge"); // Büyütme sýnýfýný kaldýralým
        } else {
            $(".photo img").removeClass("enlarge"); // Diðer fotoðraflarýn büyütme sýnýfýný kaldýralým
            photo.addClass("enlarge"); // Seçili fotoðrafý büyütelim
        }
    });
});