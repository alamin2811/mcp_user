$(document).ready(function () {
    $('#userMenuBtn').click(function () {
        $('#sideMenu').addClass('active');
        $('#sideMenu').removeClass('hide');
        $('.user-body-section').addClass('active');
    });
    $('.side-menu .side-menu-list .accordion-button, .side-menu .side-menu-list a').hover(function () {
        $('#sideMenu').addClass('active');
        $('#sideMenu').removeClass('hide');
        $('.user-body-section').addClass('active');
    });
    $('#sideMenuCloseBtn').click(function () {
        $('#sideMenu').toggleClass('hide');
        $('#sideMenu').addClass('active');
        $('.user-body-section').removeClass('active');
    });
});



$(document).ready(function () {
    $('#complete-payment-btn').click(function () {
        $('.payment-modal-content1').hide();
        $('.payment-modal-content2').show();
    });
    $('#confirm-payment-btn').click(function () {
        $('.payment-modal-content2').hide();
        $('.payment-modal-content3').show();
    });
    $('.renew-btn').click(function () {
        $('.payment-modal-content2').hide();
        $('.payment-modal-content3').hide();
        $('.payment-modal-content1').show();
    });
});

// $(document).ready(function() {
//     $('div').click(function() {
//       $('div').removeClass('active'); // Remove the "active" class from all divs
//       $(this).addClass('active'); // Add the "active" class to the clicked div
//     });
//   });

document.addEventListener('DOMContentLoaded', function () {
    var countElement = document.getElementById('count');
    var incrementButton = document.getElementById('increment');
    var decrementButton = document.getElementById('decrement');

    var count = 0;

    // Increment the count when the "+" button is clicked
    incrementButton.addEventListener('click', function () {
        count++;
        countElement.textContent = count;
    });

    // Decrement the count when the "-" button is clicked
    decrementButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
            countElement.textContent = count;
        }
    });
});



