let xxx=localStorage.getItem('ob')
 let contentDetails=JSON.parse(xxx);
 dynamicContentDetails(contentDetails)

 
console.clear()
let kh=document.getElementById('uss')
let kd=localStorage.getItem('user')
let kdd=JSON.parse(kd)
kh.innerHTML=kdd
let xobjs = localStorage.getItem('myArray')

var objs = JSON.parse(xobjs || [])


var x=objs.length
document.getElementById("badge").innerHTML = x

let id = location.search.split('?')[1]
console.log(id)




function dynamicContentDetails(ob)
{
    let mainContainer = document.createElement('div')
    mainContainer.id = 'containerD'
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div')
    imageSectionDiv.id = 'imageSection'

    let imgTag = document.createElement('img')
     imgTag.id = 'imgDetails'
     imgTag.src = ob.thumbnail

    imageSectionDiv.appendChild(imgTag)

    let productDetailsDiv = document.createElement('div')
    productDetailsDiv.id = 'productDetails'


    let h1 = document.createElement('h1')
    let h1Text = document.createTextNode(ob.title)
    h1.appendChild(h1Text)

    let h4 = document.createElement('h4')
    let h4Text = document.createTextNode(ob.brand)
    h4.appendChild(h4Text)
    console.log(h4);

    let detailsDiv = document.createElement('div')
    detailsDiv.id = 'details'

    let h3DetailsDiv = document.createElement('h3')
    let h3DetailsText = document.createTextNode('Rs ' + ob.price)
    h3DetailsDiv.appendChild(h3DetailsText)

    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode('Description')
    h3.appendChild(h3Text)

    let para = document.createElement('p')
    let paraText = document.createTextNode(ob.description)
    para.appendChild(paraText)

    let productPreviewDiv = document.createElement('div')
    productPreviewDiv.id = 'productPreview'

    let h3ProductPreviewDiv = document.createElement('h3')
    let h3ProductPreviewText = document.createTextNode('Product Preview:'+ob.rating)
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText)
    productPreviewDiv.appendChild(h3ProductPreviewDiv)

    let i;
    for(i=0; i<ob.images.length; i++)
    {
        let imgTagProductPreviewDiv = document.createElement('img')
        imgTagProductPreviewDiv.id = 'previewImg'
        imgTagProductPreviewDiv.src = ob.images[i]
        imgTagProductPreviewDiv.onclick = function(event)
        {
            console.log("clicked" + this.src)
            imgTag.src = ob.images[i]
            document.getElementById("imgDetails").src = this.src 
            
        }
        productPreviewDiv.appendChild(imgTagProductPreviewDiv)
    }

    let buttonDiv = document.createElement('div')
    buttonDiv.id = 'button'

    let buttonTag = document.createElement('button')
    buttonDiv.appendChild(buttonTag)

    buttonText = document.createTextNode('Add to Cart')
    buttonTag.onclick  =   function()
    {
     

        let existingArray = JSON.parse(localStorage.getItem('myArray')) || [];

        existingArray.push(ob);

        localStorage.setItem('myArray', JSON.stringify(existingArray));
        let xxobjs = localStorage.getItem('myArray')

        var ddobjs = JSON.parse(xxobjs || [])
        
        
        var xxx=ddobjs.length
        document.getElementById("badge").innerHTML = xxx        
        
    }
    buttonTag.appendChild(buttonText)


    console.log(mainContainer.appendChild(imageSectionDiv));
    mainContainer.appendChild(imageSectionDiv)
    mainContainer.appendChild(productDetailsDiv)
    productDetailsDiv.appendChild(h1)
    productDetailsDiv.appendChild(h4)
    productDetailsDiv.appendChild(detailsDiv)
    detailsDiv.appendChild(h3DetailsDiv)
    detailsDiv.appendChild(h3)
    detailsDiv.appendChild(para)
    productDetailsDiv.appendChild(productPreviewDiv)
    
    
    productDetailsDiv.appendChild(buttonDiv)


    return mainContainer
}



// let httpRequest = new XMLHttpRequest()
// {
//     httpRequest.onreadystatechange = function()
//     {
//         if(this.readyState === 4 && this.status == 200)
//         {
//             console.log('connected!!');
//             let contentDetails = JSON.parse(this.responseText)
//             {
//                 console.log(contentDetails);
//                 dynamicContentDetails(contentDetails)
//             }
//         }
//         else
//         {
//             console.log('not connected!');
//         }
//     }
// }

// httpRequest.open('GET', 'https://dummyjson.com/products/'+id, true)
// httpRequest.send()  


