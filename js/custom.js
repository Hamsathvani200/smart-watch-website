// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }
    }
});

const buttons = document.querySelectorAll('.view-btn');
const container = document.querySelector('.product-container');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.view-btn.active')?.classList.remove('active');
    btn.classList.add('active');

    // Remove existing view class
    container.className = 'product-container';

    // Add new view class
    const viewType = btn.getAttribute('data-view') + '-view';
    container.classList.add(viewType);
  });
});


/** google_map js **/





function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(9.4072, 80.4028), // பளை, கிளிநொச்சி இடம்
      zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(9.4072, 80.4028),
      map: map,
      title: "பளை, கிளிநொச்சி"
    });
  }