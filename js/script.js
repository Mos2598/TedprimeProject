let slideIndex=0;
showSlides();
function showSlides(){
let i;
let slides=document.getElementsByClassName("mySlides");
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display="none";    
}
slideIndex++;
if(slideIndex > slides.length)
{slideIndex=1}
slides[slideIndex-1].style.display="block";
setTimeout(showSlides, 2000);
}
var currentIndex=1;
showSlides(currentIndex);

function plusSlides(n){
showSlides(currentIndex += n);
}

const headers=document.getElementsByClassName("header");
      contents=document.getElementsByClassName("content");
      icons=document.getElementsByClassName("icon");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click",()=>{
    for (let j = 0; j < contents.length; j++) {
    if (i==j){
      contents[j].style.display = contents[i].style.display =="block" ? "none" : "block";
      icons[i].innerHTML=contents[i].style.display=="block"? "":"";
    }else{
     contents[j].style.display="none";
     icons[j].innerHTML=""
    }
      
    }   
});
} 

const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
const btn=document.getElementsByClassName("add-to-cart");
btn.onclick=function(){cartModalOverlay.style.display="block";}

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('#', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '#' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}

function formValidation(){
  var Email = document.getElementById("Email").value;
  var password = document.getElementById("password").value;
  if(Email.indexOf("@")> -1)
          {
              document.getElementById("div2").innerHTML="";
          }
           else
          {
              document.getElementById("div2").innerHTML="Enter the correct email address";
              document.getElementById("div2").style.color="Red";
              
          }
          if(password.length<=6)
          {
              document.getElementById("div3").innerHTML="Password is weak";
              document.getElementById("div3").style.color="Red";
          }
           else
          {
              document.getElementById("div3").innerHTML=" Successful Log In";
              document.getElementById("div3").style.color="Green";
     
          }
          
};

function formValidationTwo(){
  var mail= document.getElementById("email");
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(mail.value)) {
    document.getElementById("p4").innerHTML="<p> Email is not valid </p>"
    document.getElementById("p4").style.color="Red";
    return false;
  } 
  else {
    document.getElementById("p4").innerHTML="<p>Subscribed</p>"
    document.getElementById("p4").style.color="Green";
     
    return true;
 }
};
function yourIssue(){
  document.getElementById("p5").innerHTML="<p>Your Problem Is Being Reviewed</p>"
  document.getElementById("p5").style.color="Green";
}

