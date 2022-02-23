productData = [
    {
        imgURL: "https://cdn07.nnnow.com/web-images/medium/styles/XIFN4DSF1J7/1559120900591/1.jpg",
        logoURL: "https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png",
        logoText: "Offer",
        label: "Anastasia Beverly Hills",
        desc: "DIPBROW® Pomade - Dark Brown",
        price: "Rs. 2,280",
        offers: "2 more offers"
    },

    {
        imgURL: "https://cdn07.nnnow.com/web-images/medium/styles/XIFN4DSF1J7/1559120900591/1.jpg",
        logoURL: "https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png",
        logoText: "Offer",
        label: "Anastasia Beverly Hills",
        desc: "DIPBROW® Pomade - Medium Brown",
        price: "Rs. 2,280",
        offers: "2 more offers"
    },


    {
        imgURL: "https://cdn02.nnnow.com/web-images/medium/styles/U3FC9E8QWIR/1559112464196/1.jpg",
        logoURL: "https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png",
        logoText: "Offer",
        label: "Anastasia Beverly Hills",
        desc: "Brow Definer - Dark Brown",
        price: "Rs. 2,400",
        offers: "2 more offers"
    },


    {
        imgURL: "https://cdn05.nnnow.com/web-images/medium/styles/RIONCQSTS84/1583404677068/1.jpg",
        logoURL: "https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png",
        logoText: "Offer",
        label: "Anastasia Beverly Hills",
        desc: "Luminous Foundation - 332C",
        price: "Rs. 3,150",
        offers: "2 more offers"
    },

    {
        imgURL: "https://cdn12.nnnow.com/web-images/medium/styles/5F2V3YMAGIN/1559299830707/1.jpg",
        logoURL: "https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png",
        logoText: "Offer",
        label: "Anastasia Beverly Hills",
        desc: "Soft Glam Eye Shadow Palette",
        price: "Rs. 4,350",
        offers: "2 more offers"
    },

    {
        imgURL: "https://cdn16.nnnow.com/web-images/medium/styles/HNO9JRGQ114/1559300926518/1.jpg",
        logoURL: "https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png",
        logoText: "Offer",
        label: "Anastasia Beverly Hills",
        desc: "Norvina Eye Shadow Palette",
        price: "Rs. 4,350",
        offers: "2 more offers"
    },
]

productData.map(function (elem) {
    var div = document.createElement("div")
    var div1 = document.createElement("div")
    var prodImage = document.createElement("img")
    prodImage.setAttribute("id", "product")
    prodImage.setAttribute("src", elem.imgURL)

    var div2 = document.createElement("div")
    div2.setAttribute("id", "content")
    var logoImage = document.createElement("img")
    logoImage.setAttribute("src", elem.logoURL)

    var logoText = document.createElement("span")
    logoText.innerText = elem.logoText

    var label = document.createElement("h5")
    label.innerText = elem.label

    var desc = document.createElement("p")
    desc.innerText = elem.desc

    var price = document.createElement("p")
    price.setAttribute("id", "price")
    price.innerText = elem.price

    var offers = document.createElement("p")
    offers.innerText = elem.offers


    div.append(div1)
    div1.append(prodImage)
    div2.append(div1, logoImage, logoText, label, desc, price, offers)

    document.querySelector("#fourth-div").append(div2)
})








