let top7 = ["The Colosseum", "Trevi Fountain", "Vatican City", "St. Peter's Basilica", "Arc de Triumphe", "The Eiffel Tower", "The Louvre"];

function showItinerary(place1, place2, place3, place4, place5, place6, place7) {
  console.log("Visit " + place1);
  console.log("Then visit " + place2);
  console.log("Then visit " + place3);
  console.log("Then visit " + place4);
  console.log("Then visit " + place5);
  console.log("Then visit " + place6);
  console.log("Finish with a visit to " + place7);
}

showItinerary(...top7);