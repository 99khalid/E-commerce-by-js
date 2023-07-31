let cartContainer = document.getElementById('cartContainer')
let xobjs = localStorage.getItem('myArray')

var objs = JSON.parse(xobjs || [])


var x=objs.length
document.getElementById("badge").innerHTML = x
document.getElementById("totalItem").innerHTML = ('Total Items: ' + x)



document.addEventListener('DOMContentLoaded',()=>{
    let boxContainerDiv = document.createElement('div')
    boxContainerDiv.id = 'boxContainer'
var ax=0;
    for(var i of objs){
        ax=ax+i.price;
        let boxDiv = document.createElement('div')
        boxDiv.id = 'box'
        let boxImg = document.createElement('img')
        let boxh3 = document.createElement('h3')
        let h3Text = document.createTextNode(i.title)
        boxh3.appendChild(h3Text)

        let boxh4 = document.createElement('h4')
        let h4Text = document.createTextNode('price:' + i.price)
        boxh4.appendChild(h4Text)
        h4Text.id="pr"
        boxImg.src=`${i.thumbnail}`
        
       let aa=document.createElement('button')
        aa.id="aa"
        aa.textContent="Remove"
        aa.onclick=function(){
            boxDiv.remove();
            objs.splice(i,1);
            localStorage.setItem('myArray', JSON.stringify(objs));
            var x=objs.length
document.getElementById("badge").innerHTML = x
document.getElementById("totalItem").innerHTML = ('Total Items: ' + x)


location.reload(true);

}

        boxDiv.append(boxImg,boxh3,boxh4,aa)
        boxContainerDiv.append(boxDiv)
        cartContainer.append(boxContainerDiv)
    }
    let totalContainerDiv=document.createElement('div')
    totalContainerDiv.id = 'totalContainer'

    let totalDiv = document.createElement('div')
    totalDiv.id = 'total'

    let totalh2 = document.createElement('h2')

    let h2Text = document.createTextNode('Total Amount')
    totalh2.append(h2Text)
    totalDiv.append(totalh2)
    totalContainerDiv.append(totalDiv)
    cartContainer.append(totalContainerDiv)
    let totalh4 = document.createElement('h4')
    var totalh4Text = document.createTextNode('Amount: Rs ' + ax)
    totalh4Text.id = 'toth4'
    totalh4.appendChild(totalh4Text)
    totalDiv.appendChild(totalh4)
    totalDiv.appendChild(buttonDiv)})

   buttonDiv=document.createElement('button')
   buttonDiv.id="palce"
   buttonDiv.textContent="Place Order"
   buttonDiv.onclick=function(){
    window.location.href="orderPlaced.html"; 

   }












    let lo = localStorage.getItem('user');
    let loo = JSON.parse(lo);
    let us=document.getElementById('us')
    us.innerHTML=loo


    const menuIcon = document.getElementById('menuIcon');
        const menu = document.getElementById('menu');
        
        menuIcon.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });