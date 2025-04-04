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
        this.card = document.createElement("div");
        this.card.classList.add("card");
        this.card.style.marginLeft = this.margin + "%";

        this.cardImg = document.createElement("div");
        this.cardImg.classList.add("img");
        this.cardImg.style.backgroundImage = "url(" + this.img + ")";
        this.card.appendChild(this.cardImg);

        this.cardName = document.createElement("span");
        this.cardName.classList.add("name");
        this.cardName.innerHTML = this.name;
        this.card.appendChild(this.cardName);

        this.cardPrice = document.createElement("span");
        this.cardPrice.classList.add("price");
        this.cardPrice.innerHTML = this.sign + this.price;
        this.card.appendChild(this.cardPrice);

        this.cardBuy = document.createElement("button");
        this.cardBuy.classList.add("buy");
        this.cardBuy.innerHTML = this.button;
        this.card.appendChild(this.cardBuy);

        document.body.appendChild(this.card);
    }

    AddToCart()
    {
        this.cart = document.createElement("div");
        this.cart.classList.add("cart");
        document.body.appendChild(this.cart);

        this.product = document.createElement("div");
        this.product.classList.add("product");
        this.cart.appendChild(this.product);

        this.productImg = document.createElement("div");
        this.productImg.classList.add("img");
        this.productImg.style.backgroundImage = "url(" + this.img + ")";
        this.product.appendChild(this.productImg);

        this.productDetails = document.createElement("div");
        this.productDetails.classList.add("productDetails");
        this.product.appendChild(this.productDetails);

        this.productName = document.createElement("div");
        this.productName.classList.add("name");
        this.productName.innerHTML = this.name;
        this.productDetails.appendChild(this.productName);

        this.productPrice = document.createElement("div");
        this.productPrice.classList.add("price");
        this.productPrice.innerHTML = this.sign + this.price;
        this.productDetails.appendChild(this.productPrice);

        this.productCounter = document.createElement("div");
        this.productCounter.classList.add("counter");
        this.productDetails.appendChild(this.productCounter);

        this.productCounterMinus = document.createElement("button");
        this.productCounterMinus.classList.add("minus");
        this.productCounterMinus.innerHTML = "-";
        this.productCounter.appendChild(this.productCounterMinus);

        this.productCounterQuantity = document.createElement("span");
        this.productCounterQuantity.classList.add("quantity");
        this.productCounterQuantity.innerHTML = 1;
        this.productCounter.appendChild(this.productCounterQuantity);

        this.productCounterPlus = document.createElement("button");
        this.productCounterPlus.classList.add("plus");
        this.productCounterPlus.innerHTML = "+";
        this.productCounter.appendChild(this.productCounterPlus);
    }
}

let Egg = new Object("img", "Ovo de páscoa", 80, "R$", "Comprar", 0);
Egg.Instance();

let Iphone = new Object("img", "Iphone 16", 8500, "R$", "Comprar", 2);
Iphone.Instance();