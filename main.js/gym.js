// Initialize and add the map
function initMap() {
  // The location of cairo
const cairo = { lat: 30.044420, lng: 31.235712 };
  // The map, centered at cairo
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: cairo,
});
  // The marker, positioned at cairo
const marker = new google.maps.Marker({
    position: cairo,
    map: map,
});
}

window.initMap = initMap;













let navbar = document.getElementById('navbar');
addEventListener('scroll', function (){
  if(scrollY > 300){
    navbar.style.opacity= 0.8;
  }else{
    navbar.style.opacity= 1;
  }
} );


$(`#navbar a, .btn`).on("click", function(event){
  if(this.hash !== ""){
    event.preventDevault();
    const hash = this.hash;
    $(`html, body`).animate({scrollTop: $(hash).offset().top - 100},800);
  }
});



let batn = document.getElementById("batn");

addEventListener("scroll", function(){
  if(scrollY > 300 )
  {
    batn.style.display='block';
  }else{
    batn.style.display='none';
  }
});















