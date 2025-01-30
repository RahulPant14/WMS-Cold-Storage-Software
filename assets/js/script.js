$(document).ready(function() {
    // Counter Animation
    $('.counter').each(function () {
        var value = $(this).text().replace(/[^0-9]/g, ''); // Remove non-numeric characters
        $(this).prop('Counter', 0).animate({
            Counter: value
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + (isNaN(parseInt($(this).text())) ? '' : '+'));
            }
        });
    });

    // Smooth Scroll
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Contact Form Validation
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }
        alert("Your message has been sent successfully!");
        $("#contact-form")[0].reset();
    });
});



