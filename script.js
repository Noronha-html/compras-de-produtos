let itemsQuantity = 0;

class Object
{
    constructor(objImg, objName, objPrice, objSign, objButton, objMargin, objMarginTop)
    {
        this.img = objImg;
        this.name = objName;
        this.price = objPrice;
        this.sign = objSign;
        this.button = objButton;
        this.margin = objMargin;
        this.marginTop = objMarginTop;

        this.cardBuy;

        this.productQuantity = 1;

        this.alreadyOnCart = false;
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
        this.cardBuy.addEventListener("click", () => {
            if(!this.alreadyOnCart)
            {
                this.cart = document.getElementById("noCart");

                if(this.cart.classList.contains("noCart"))
                {
                    this.cart.classList.remove("noCart");
                    this.cart.classList.add("cart");
                }
        
                this.product = document.createElement("div");
                this.product.classList.add("product");
                this.cart.appendChild(this.product);
                itemsQuantity ++;
        
                this.productImg = document.createElement("div");
                this.productImg.classList.add("img");
                this.productImg.style.backgroundImage = "url(" + this.img + ")";
                this.product.appendChild(this.productImg);
        
                this.productDetails = document.createElement("div");
                this.productDetails.classList.add("productDetails");
                this.product.appendChild(this.productDetails);

                this.productCancel = document.createElement("button");
                this.productCancel.classList.add("cancel");
                this.productCancel.innerHTML = "X";
                this.product.appendChild(this.productCancel);
        
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
                this.productCounterQuantity.innerHTML = this.productQuantity;
                this.productCounter.appendChild(this.productCounterQuantity);
        
                this.productCounterPlus = document.createElement("button");
                this.productCounterPlus.classList.add("plus");
                this.productCounterPlus.innerHTML = "+";
                this.productCounter.appendChild(this.productCounterPlus);

                this.alreadyOnCart = true;

                this.TakeOfCounter();
                this.AddToCounter();
                this.CancelItem();
            }
            else if(this.alreadyOnCart)
            {
                this.productQuantity ++;
                this.productCounterQuantity.innerHTML = this.productQuantity;
            }
        });
    }

    TakeOfCounter()
    {
        this.productCounterMinus?.addEventListener("click", () => {
            if(this.productQuantity > 1)
            {
                this.productQuantity --;
                this.productCounterQuantity.innerHTML = this.productQuantity;
            }
        });
    }

    AddToCounter()
    {
        this.productCounterPlus?.addEventListener("click", () => {
            this.productQuantity ++;
            this.productCounterQuantity.innerHTML = this.productQuantity;
        }); 
    }

    CancelItem()
    {
        this.productCancel?.addEventListener("click", () => {
            this.product.remove();
            itemsQuantity --;
            this.alreadyOnCart = false;
            this.productQuantity = 1;

            if(itemsQuantity === 0)
            {
                this.cart.classList.remove("cart");
                this.cart.classList.add("noCart");
            }
        });
    }
}

let Egg = new Object("img", "Ovo de páscoa", 80, "R$", "Comprar", 0, 0);
Egg.Instance();
Egg.AddToCart();

let Iphone = new Object("img", "Iphone 16", 8500, "R$", "Comprar", 2, 20);
Iphone.Instance();
Iphone.AddToCart();