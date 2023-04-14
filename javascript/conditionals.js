// if, else if. else
let place = "third";

if (place == "first") {
  console.log("Gold");
} else if (place == "second") {
  console.log("Silver");
} else if (place == "third") {
  console.log("Bronze");
} else {
  console.log("No Medal");
}


// switch
let place2 = "second";

switch (place2) {
  case "first":
    console.log("Gold Medal");
    break;
  case "second":
    console.log("Silver Medal");
    break;
  case "third":
    console.log("Bronze Medal");
    break;
  case "fourth":
    console.log("Off the podium.");
    break;
  default:
    console.log("No medal.");
}