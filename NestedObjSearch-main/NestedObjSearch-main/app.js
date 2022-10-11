var products = {
    Wallets: {
        Bifold: {
            title: "Bifold Wallet",
            leatherType: "Veg-Tanned leather",
            price: "3000Rs"
        },
        Long: {
            title: "Long Wallet",
            leatherType: "Oil Pull-up leather",
            price: "3500Rs"
        }
    },

    Bags: {
        File: {
            title: "File Bag",
            leatherType: "Grain-Real leather",
            price: "15000Rs"
        },
        Satchel: {
            title: "Satchel Bag",
            leathherType: "Grain-Real leather",
            price: "21000Rs"
        }
    },

    Belts: {
        Casual: {
            title: "Machine-Waxed Belt",
            size: "35mm",
            price: "4000Rs"
        },
        Formal: {
            title: "Buffalo Leather Belt",
            size: "40mm",
            price: "5000Rs"
        },
        ExtraFormal: {
            title: "Italian Imported Belt",
            size: "40mm",
            price: "6000Rs"

        }

    }

}



let productType = document.getElementById('productType')
let productCategory = document.getElementById('productCategory')
let productKeys = Object.keys(products) //walets bags
var productValues
var searchItem
var ptInd, pcInd;

function fillProductType() {
    console.log(productKeys)
    // productType.innerHTML += `<option id="temp">Product Type</option>`

    for (i = 0; i < productKeys.length; i++) {
        productType.innerHTML += `<option>${productKeys[i]}</option>`
    }
    ptInd = productType.selectedIndex
console.log(ptInd)
}
fillProductType();

// if(ptInd==0){
//     productType.addEventListener('onclick',function(){
//         productValues = Object.keys(Object.values(products)[ptInd]) //{bifold: {…}, long: {…}}
//         productCategory.disabled = false;
    
//         for (i = 0; i < productValues.length; i++) {
//             productCategory.innerHTML += `<option>${productValues[i]}</option>`
//         }
    
//         let search = document.getElementById('search')
//         search.disabled = false;
    

//     })
// }

var executed=false
function fillProductCategory() {
//   if(executed=false){
//     var temp=document.getElementById('temp')
//    console.log(temp)

//    temp.remove();
//    executed=true;
// }
productCategory.innerHTML=""

        ptInd = productType.selectedIndex
        productValues = Object.keys(Object.values(products)[ptInd]) //{bifold: {…}, long: {…}}
        productCategory.disabled = false;
    
        for (i = 0; i < productValues.length; i++) {
            productCategory.innerHTML += `<option>${productValues[i]}</option>`
        }
    
        let search = document.getElementById('search')
        search.disabled = false;
    



    }


function searchfunc() {
    search.disabled = true;
    productCategory.disabled = true;
// fillProductType();
    var pcInd = productCategory.selectedIndex
    let productSpecs = Object.values(Object.values(products)[ptInd])[pcInd]
    // console.log(productKeys, productValues, productSpecs)

    let specsTitle = Object.keys(productSpecs)
    let specsValues = Object.values(productSpecs)
    console.log(specsValues)
    let values = document.getElementById('values')
    for (i = 0; i < specsValues.length; i++) {
        var li = document.createElement('li')
        var lip= document.createElement('p')
        lip.innerHTML = (specsValues[i])
        li.appendChild(lip)
        values.appendChild(li)
    
    } 
    productCategory.innerHTML=""

}

