import "./Camp.scss";
import $ from "jquery";
//import { Row, Col, Container } from "react-bootstrap";
const Camp = () => {
  "use strict";
$(document).ready(function() {

  var rows = 3; //change this also in css
  var cols = 3; //change this also in css
  var staggerTime = 110;

  var urls = [
    "https://attisquare.s3.amazonaws.com/atti-images/camp-2.webp",
    "https://attisquare.s3.amazonaws.com/atti-images/camp-4.webp",
    "https://attisquare.s3.amazonaws.com/atti-images/camp-5.webp",
    "https://attisquare.s3.amazonaws.com/atti-images/camp-6.webp",
    "https://attisquare.s3.amazonaws.com/atti-images/camp-7.webp",
    "https://attisquare.s3.amazonaws.com/atti-images/camp-8.webp",
    "https://drive.google.com/uc?export=view&id=1RLwYtgITpsvRPAYCrL6UoI_bWsVQ0BmP",
    "https://drive.google.com/uc?export=view&id=1aH8bSlnBi4DwuwRLwtK5Qh_XBxBk6dH-",
   " https://drive.google.com/uc?export=view&id=1N824-tXOP7Y2J1a780AtcTMrB9dpGCG-"
    
  ];

  var $gallery = $(".demo__gallery");
  var $help = $(".demo__help");
  var partsArray = [];
  var reqAnimFr = (function() {
    return window.requestAnimationFrame || function(cb) {
      setTimeout(cb, 1000 / 60);
    }
  })();

  
  $gallery.html('');
  for (let row = 1; row <= rows; row++) {
    partsArray[row - 1] = [];
    for (let col = 1; col <= cols; col++) {
      $gallery.append(`<div class="show-front demo__part demo__part-${row}-${col}" row="${row}" col="${col}"><div class="demo__part-back"><div class="demo__part-back-inner"></div></div><div class="demo__part-front"></div></div>`);
      partsArray[row - 1][col - 1] = new Part();
    }
  }
  
  var $parts = $(".demo__part");
  var $image = $(".demo__part-back-inner");
  var help = true;

  for (let i = 0; i < $parts.length; i++) {
    $parts.find(".demo__part-front").eq(i).css("background-image", `url(${urls[i]})`);
  }

  $gallery.on("click", ".demo__part-front", function() {

    $image.css("background-image", $(this).css("background-image"));
    if (help) {
      $help.html("Champaigs");
      help = false;
    }

    let row = +$(this).closest(".demo__part").attr("row");
    let col = +$(this).closest(".demo__part").attr("col");
    waveChange(row, col);
  });

  $gallery.on("click", ".demo__part-back", function() {
    if (!isShowingBack()) return;

    $help.html(`Campaigns`);

    setTimeout(function() {
      for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
          partsArray[row - 1][col - 1].showing = "front";
        }
      }
    }, staggerTime + $parts.length * staggerTime / 10);
    
    
    showFront(0, $parts.length);
    
  });
  
  function showFront(i, maxI) {
    if (i >= maxI) return;
    $parts.eq(i).addClass("show-front");
    
    reqAnimFr(function() {
      showFront(i + 1);
    });
  }

  function isShowingBack() {
    return partsArray[0][0].showing == "back" && partsArray[0][cols - 1].showing == "back" && partsArray[rows - 1][0].showing == "back" && partsArray[rows - 1][cols - 1].showing == "back";
  }

  function Part() {
    this.showing = "front";
  }

  function waveChange(rowN, colN) {
    if (rowN > rows || colN > cols || rowN <= 0 || colN <= 0) return;
    if (partsArray[rowN - 1][colN - 1].showing == "back") return;
    $(".demo__part-" + rowN + "-" + colN).removeClass("show-front");
    partsArray[rowN - 1][colN - 1].showing = "back";
    setTimeout(function() {
      waveChange(rowN + 1, colN);
      waveChange(rowN - 1, colN);
      waveChange(rowN, colN + 1);
      waveChange(rowN, colN - 1);
    }, staggerTime);
  }
});
  return (
    // <Container>
    

    <div className="colo">
     <div class="demo">
  <div class="demo__help">
    Champaigns
  </div>
  <div class="demo__res">
  <div class="demo__gallery">
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    <div class="demo__placeholder"></div>
    
  </div>  </div>
</div>
    </div>
  );
};

export default Camp;
