class Object
{
    constructor(objImg, objName, objPrice, objSign, objButton, objMargin)
    {
        this.img = objImg;
        this.name = objName;
        this.price = objPrice;
        this.sign = objSign;
        this.button = objButton;
        this.margin = objMargin;
    }

    Instance()
    {
        this.cardEgg = document.createElement("div");
        this.cardEgg.classList.add("card");

        this.cardImgEgg = document.createElement("div");
        this.cardImgEgg.classList.add("img");
        this.cardEgg.appendChild(this.cardImgEgg);

        this.cardNameEgg = document.createElement("span");
        this.cardNameEgg.classList.add("name");
        this.cardEgg.appendChild(this.cardNameEgg);

        this.cardPriceEgg = document.createElement("span");
        this.cardPriceEgg.classList.add("price");
        this.cardEgg.appendChild(this.cardPriceEgg);

        this.cardBuyEgg = document.createElement("button");
        this.cardBuyEgg.classList.add("buy");
        this.cardEgg.appendChild(this.cardBuyEgg);

        document.body.appendChild(this.cardEgg);

        /*this.cardEgg.classList.remove("noCard");
        this.cardEgg.classList.add("card");
        this.cardEgg.style.marginLeft = this.margin + "%";

        this.cardImgEgg.classList.remove("noImg");
        this.cardImgEgg.classList.add("img");

        this.cardNameEgg.classList.remove("noName");
        this.cardNameEgg.classList.add("name");
        this.cardNameEgg.innerHTML = this.name;

        this.cardPriceEgg.classList.remove("noPrice");
        this.cardPriceEgg.classList.add("price");
        this.cardPriceEgg.innerHTML = this.sign + this.price;

        this.cardBuyEgg.classList.remove("noBuy");
        this.cardBuyEgg.classList.add("buy");
        this.cardBuyEgg.innerHTML = this.button;*/
    }
}

let Egg = new Object("img", "Ovo de páscoa", 80, "R$", "Comprar", 0);
Egg.Instance();

let Iphone = new Object("img", "Iphone 16", 8500, "R$", "Comprar", 2);
Iphone.Instance();