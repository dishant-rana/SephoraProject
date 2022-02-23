//1stdiv
var saleSlideIndex = 1;
saleShowSlides(saleSlideIndex);

// Next/previous controls
function salePlusSlides(n) {
  saleShowSlides(saleSlideIndex += n);
}

// Thumbnail image controls
function saleCurrentSlide(n) {
  saleShowSlides(saleSlideIndex = n);
}

function saleShowSlides(n) {
  var i;
  var saleSlides = document.getElementsByClassName("saleMySlides");
  var saleDots = document.getElementsByClassName("saleDot");
  if (n > saleSlides.length) {saleSlideIndex = 1}
  if (n < 1) {saleSlideIndex = saleSlides.length}
  for (i = 0; i < saleSlides.length; i++) {
    saleSlides[i].style.display = "none";
  }
  for (i = 0; i < saleDots.length; i++) {
    saleDots[i].className = saleDots[i].className.replace(" saleActive", "");
  }
  saleSlides[saleSlideIndex-1].style.display = "block";
  saleDots[saleSlideIndex-1].className += " active";
}

  //2nddiv
  var saleSlideIndex2 = 1;
  saleShowSlides2(saleSlideIndex2);

// Next/previous controls
function salePlusSlides2(n) {
  saleShowSlides2(saleSlideIndex2 += n);
}

// Thumbnail image controls
function saleCurrentSlide2(n) {
  saleShowSlides2(saleSlideIndex2 = n);
}

function saleShowSlides2(n) {
  var i;
  var saleSlides2 = document.getElementsByClassName("saleMySlides2");
  var saleDots2 = document.getElementsByClassName("saleDot2");
  if (n > saleSlides2.length) {saleSlideIndex2 = 1}
  if (n < 1) {saleSlideIndex2 = saleSlides2.length}
  for (i = 0; i < saleSlides2.length; i++) {
    saleSlides2[i].style.display = "none";
  }
  for (i = 0; i < saleDots2.length; i++) {
    saleDots2[i].className = saleDots2[i].className.replace(" saleActive2", "");
  }
  saleSlides2[saleSlideIndex2-1].style.display = "block";
  saleDots2[saleSlideIndex2-1].className += " active";
}



var products = [
  {
    id: 1,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/PIXI_P-story.jpg",
  },
  {
    id: 2,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/16-feb-2022/korapstory(2).jpg",
  },
  {
    id: 3,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/ABH_P-story.jpg",
  },
  {
    id: 4,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2022/Caudalie_P-story_GETAVINOPUREPURIFYINGGELCLEANSER.jpg",
  },
  {
    id: 5,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2022/MarioBadescuP-story(1).jpg",
  },
  {
    id: 6,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/17-dec-2021/ForeoPStory.jpg",
  },
  {
    id: 7,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/12-nov-/13SEP21-HP-DearDahlia-TB-LIPSUITE-APP.jpg",
  },
  {
    id: 8,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2022/Aveda_P-story.jpg",
  },
  {
    id: 9,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2022/GlamglowP-story.jpg",
  },
  {
    id: 10,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2022/CLINIQUEP-story.jpg",
  },
  {
    id: 11,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/JuicebeautyP-story(2).jpg",
  },
  {
    id: 12,
    image: "https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/Abhatipstory.jpg",
  },

];

products.map(function (elem, index, array) {
  var div = document.createElement("div");
  var avatar = document.createElement("img");
  avatar.setAttribute("src", elem.image);
  avatar.setAttribute("id", "avatar");

  div.append(avatar);
    document.querySelector("#saleContainer").append(div);
  });