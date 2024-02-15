let count=1;
let total=0;

const cards=document.querySelectorAll('.card');
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('click',function(){
      const titleText=card.querySelector('h3');
      const title=titleText.innerText
     
      //add title to the title container
      const titleContainer=document.getElementById('title-container');
      const p=document.createElement('p');
      p.innerText=count+'.'+title;
      titleContainer.appendChild(p);
      count++;


      //get the price of the card
      const priceText=card.querySelector('span')
    const price=parseFloat(priceText.innerText.split(' ')[1]);
    total+=price;
    console.log(total)

    //set total price into the price section
    const totalPriceText=document.getElementById('totalPrice');
    totalPriceText.innerText=total;
    })
}

document.getElementById('apply-btn').addEventListener('click',function(){
    const getInputText=document.getElementById('input-field')
   const getInputValue=getInputText.value.split("").join("").toUpperCase();

   let discount=0;
//    console.log(getInputValue);
   if(total>=200 && getInputValue==='SELL200'){
    discount=total*0.2;
    document.getElementById('discountPrice').innerText=discount.toFixed(2);
   }
   else{
    alert('aro taka kama beta');
   }

   const finalTotal=document.getElementById('total');
   const finalTotatText=finalTotal.innerText;
   finalTotal.innerText=(total-discount);
})


//add modal with the purchess button

