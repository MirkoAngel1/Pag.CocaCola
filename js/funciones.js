jQuery(document).ready(listo);


function listo()
{
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");

    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open");

        jQuery(".hamb i").romeveClass("fa-times");

        var dev = jQuery(this).attr("href");

        jQuery("html,body").animated({

            "scrollTop":jQuery(dev).offset().top - 76
        });
    })
}