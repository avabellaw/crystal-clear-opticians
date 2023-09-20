// Check whether device can hover just like css media query [https://dev.to/niorad/detecting-hover-and-touch-in-css-and-js-4e42]
$('.dropdown').hover(function () {
    // Check whether device can hover just like css media query [https://dev.to/niorad/detecting-hover-and-touch-in-css-and-js-4e42]
    const canHover = window.matchMedia('(hover: hover)').matches;

    if (!canHover) {
        // Disable dropdown on click [https://stackoverflow.com/questions/15697968/how-to-disable-bootstraps-button-dropdown]
        $(this).find('.dropdown-toggle').attr("data-bs-toggle", "dropdown");
    } else {
        $(this).find('.dropdown-toggle').attr("data-bs-toggle", "dropdown--disabled");
        $(this).find('.dropdown-menu').removeClass('show');
        $(this).find('.dropdown-toggle').removeClass('show');
    }

    $(this).addClass('show--hover');
    $(this).find('.dropdown-toggle').addClass('show--hover');
    $(this).find('.dropdown-toggle').attr("aria-expanded", true);
    $(this).find('.dropdown-menu').addClass('show--hover');
}, function () {
    $(this).removeClass('show--hover');
    $(this).find('.dropdown-toggle').removeClass('show--hover');
    $(this).find('.dropdown-toggle').attr("aria-expanded", false);
    $(this).find('.dropdown-menu').removeClass('show--hover');

    $(this).find('.dropdown-toggle').attr("data-bs-toggle", "dropdown");
});
