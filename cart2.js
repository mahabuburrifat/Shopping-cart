const showSidebar = document.getElementById('show-sidebar');
const openSidebar = document.getElementById('open-sidebar');
const closeSidebar = document.getElementById('close-sidebar');

openSidebar.addEventListener('click', () => {
    showSidebar.classList.add('show');
})

closeSidebar.addEventListener('click', () => {
    showSidebar.classList.remove('show');
})



const  product = [
    {
        id: 0,
        image: './img/makeup.jpeg',
        title: 'Z Lipstick',
        price:  5,
    },
    {
        id: 1,
        image: './img/makeup-2.jpeg',
        title: 'Z Lipstick with packet',
        price:  8,
    },
    {
        id: 2,
        image: './img/makeup.jpeg',
        title: 'Z Lipstick',
        price:  5,
    },
    {
        id: 3,
        image: './img/makeup-2.jpeg',
        title: 'Z Lipstick with packet',
        price:  8,
    },
    {
        id: 4,
        image: './img/makeup.jpeg',
        title: 'Z Lipstick with packet',
        price:  18,
    },
    {
        id: 5,
        image: './img/makeup-2.jpeg',
        title: 'Z Lipstick with packet',
        price:  80,
    },
]

 

// -------------------------------------------------\\
        //---------- show display ------------\\
//---------------------------------------------------//\\
    

 const categories = [...new Set(product.map((item)=> {
    return item;
 }))]
    let i = 0;
     document.getElementById('root') .innerHTML = categories.map((item) => {
         var {image, title, price} = item;
         return(
              `<div class='box'>
                 <div class='img-box'>
                     <img class='images' src=${image}>
                 </div>
                 <div class='bottom'>
                     <p>${title}</p>
                     <h2>$ ${price}.00</h2>` +
                     "<button class='btn' onclick='addtocart("+ (i++) +")'>Add to Cart</button>" +
                 `</div>
              </div>`       
         )
     }).join('');



//--------------------------------------------------------------\\
        //--------- function call --------------\\
//----------------------------------------------------------------\\

     var cart = [];

     function addtocart(a){
         cart.push({...categories[a]});
         displayCart();
     };

     function delElement(a){
         cart.splice(a, 1);
         displayCart();
     }

     
//------------------------------------------------------------------\\
        //----------------show sidebar---------------------\\
//--------------------------------------------------------------------\\


     function displayCart(a){
         let j = 0; total = 0;

         document.getElementById('count') .innerHTML = cart.length;


         if(cart.length == 0){
             document.getElementById('cartItem') .innerHTML = 'Your Cart is empty';

            ////---------------- calculate price------------\\
             document.getElementById('total').innerHTML = '$ '+ 0 +'.00';

         }
         else{
             document.getElementById('cartItem') .innerHTML = cart.map((items) => {
                 var {image, title, price} = items;

                ////---------------- calculate price------------\\

                 total = total + price;
                 document.getElementById('total').innerHTML = '$ '+ total +'.00';

                //\\---------------- end caclculate price--------//

                 return(
                     `<div class='cart-item'>
                         <div class='row-img'>
                             <img class='rowimg' src=${image}>
                         </div>
                         <p style='font-size:15px;'>${title}</p>
                         <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                         "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                 )
             }).join('');
         }
     }