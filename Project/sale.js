//1stdiv
var saleSlideIndex = 0;
saleShowSlides();

function saleShowSlides() {
    var i;
    var saleSlides = document.getElementsByClassName("saleMySlides");
    var saleDots = document.getElementsByClassName("saleDot");
    
    for (i = 0; i < saleSlides.length; i++) {
        saleSlides[i].style.display = "none";
    }
    
    saleSlideIndex++;
    if (saleSlideIndex > saleSlides.length) { saleSlideIndex = 1 }
    saleSlides[saleSlideIndex - 1].style.display = "block";

    setTimeout(saleShowSlides, 2000); // Change image every 2 seconds
}
//2nd div
var saleSlideIndex2 = 0;
saleShowSlides2();

function saleShowSlides2() {
    var i;
    var saleSlides2 = document.getElementsByClassName("saleMySlides2");
    var saleDots2 = document.getElementsByClassName("saleDot2");
    
    for (i = 0; i < saleSlides2.length; i++) {
        saleSlides2[i].style.display = "none";
    }
    
    saleSlideIndex2++;
    if (saleSlideIndex2 > saleSlides2.length) { saleSlideIndex2 = 1 }
    saleSlides2[saleSlideIndex2 - 1].style.display = "block";

    setTimeout(saleShowSlides2, 2000); // Change image every 2 seconds
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
 //}