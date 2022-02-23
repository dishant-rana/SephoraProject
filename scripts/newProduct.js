
newProductData = [
    { imgURL: "https://logan.nnnow.com/content/dam/nnnow-project/07-feb-2022/sugar/SmashboxNOTB.jpg" },
    { imgURL: "https://logan.nnnow.com/content/dam/nnnow-project/09-jan-2022/JuicebeautyNOTB.jpg" },
    { imgURL: "https://logan.nnnow.com/content/dam/nnnow-project/16-feb-2022/Kora_NOTB.jpg" },
    { imgURL: "https://logan.nnnow.com/content/dam/nnnow-project/o1-feb-2022/AbhatiNOTB.jpg" },
    { imgURL: "https://logan.nnnow.com/content/dam/nnnow-project/o1-feb-2022/WishfulNOTB(1).jpg" },
    { imgURL: "https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/SCNOTB.jpg" },
];

newProductData.map(function (elem) {
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src", elem.imgURL)
    image.setAttribute("id", "seventh")
    div.append(image)
    document.querySelector("#seventh-div").append(div)
})






