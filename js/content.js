let b = localStorage.getItem('myArray')

var m = JSON.parse(b || [])


var y=m.length
document.getElementById("badge").innerHTML = y



    var xhr = new XMLHttpRequest(); 

xhr.open("Get", 'https://dummyjson.com/products'); 

xhr.send(); 
  
var arr;
var d=document.getElementById("bb");
xhr.onreadystatechange = function () {
    console.log(xhr.readyState); 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText).products;
        arr = data;
        console.log(arr);
        for (var i = 0; i < data.length; i++) {

           d.appendChild(dynamicClothingSection(data[i]))

        }

    }
}
let lo = localStorage.getItem('user');
        let loo = JSON.parse(lo);
        let us=document.getElementById('us')
        us.innerHTML=loo

        const menuIcon = document.getElementById('menuIcon');
        const menu = document.getElementById('menu');
        
        // Add a click event listener to the icon
        menuIcon.addEventListener('click', () => {
          // Toggle the 'hidden' class on the menu to show/hide it
          menu.classList.toggle('hidden');
        });
        

let contentTitle;

console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  boxLink.href = "contentDetails.html" ;
  boxLink.onclick=function(){
  localStorage.setItem('ob', JSON.stringify(ob));
  }
  let imgTag = document.createElement("img");
  
  imgTag.src = ob.thumbnail;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.title);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("rs  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}
let sea=document.getElementById('button')
sea.onclick=function(){
    var text = document.getElementById('input').value

    d.innerHTML=' '
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
            d.appendChild(dynamicClothingSection(arr[i]))

        }


    }
}
var se=document.getElementById('cars')
se.onchange=function (){
let de=se.value
d.innerHTML=' '
for (var i = 0; i < arr.length; i++) {
    if (arr[i].category.toLowerCase().indexOf(de.toLowerCase()) > -1) {
        d.appendChild(dynamicClothingSection(arr[i]))

    }
}

}
