$('.dropdown').hover(function () {
    // Check whether device can hover just like css media query [https://dev.to/niorad/detecting-hover-and-touch-in-css-and-js-4e42]
    const canHover = window.matchMedia('(hover: hover)').matches;

    if (!canHover) {
        // If can't hover, ensure that the dropdown-toggle has the data-bs-toggle set to 'dropdown' so that it can be opened on click instead of on hover
        $(this).find('.dropdown-toggle').attr("data-bs-toggle", "dropdown");
    } else {
        // Disable dropdown on click by removing data-toggle [https://stackoverflow.com/questions/15697968/how-to-disable-bootstraps-button-dropdown]
        $(this).find('.dropdown-toggle').attr("data-bs-toggle", "dropdown--disabled");

        // The following ensures that the dropdown isn't open already after being clicked
        $(this).find('.dropdown-menu').removeClass('show');
        $(this).find('.dropdown-toggle').removeClass('show');

        // Opens the dropdown when hovered over.
        $(this).addClass('show--hover');
        $(this).find('.dropdown-toggle').addClass('show--hover');
        $(this).find('.dropdown-toggle').attr("aria-expanded", true);
        $(this).find('.dropdown-menu').addClass('show--hover');
    }
}, function () {
    // Closes the dropdown when not hovering and enables click to open dropdown again just incase.
    $(this).removeClass('show--hover');
    $(this).find('.dropdown-toggle').removeClass('show--hover');
    $(this).find('.dropdown-toggle').attr("aria-expanded", false);
    $(this).find('.dropdown-menu').removeClass('show--hover');

    $(this).find('.dropdown-toggle').attr("data-bs-toggle", "dropdown");
});
