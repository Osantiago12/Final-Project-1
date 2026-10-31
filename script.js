let count = 0

function addGrocery(item){
    count++
    const div = document.getElementById("listContainer")
    const itemHtml = `
                    <div class="listrow">
                    <p class="itemName">${count}. ${item}</p> <BUTTON onclick="purchased(this)">Purchased</BUTTON>
                </div>`

    if(div){
        div.insertAdjacentHTML(`beforeend`, itemHtml) //parses a string of HTML text and puts the resulting nodes into the DOM at a specific position depending on where i say to call it in.
                                                        //Better alternative innerHtml it says
    }
}


function purchased(item){
    item.previousElementSibling.classList.toggle("change") //Since each button is directly after the text, previousElementSibling gets that text.
}


function clearList(){
    count = 0
    document.querySelectorAll(".listrow").forEach(item => item.remove())

}

//The way toggle works, toggle(name, condition), i can use that to make it so if the item has the change class is true, then hide it and vice versa by add a !
function viewUnpurchasedOnly(){
    document.querySelectorAll(".itemName").forEach(item => {
        item.parentElement.classList.toggle("hidden", item.classList.contains("change"))
    })
}

function viewPurchasedOnly(){
    document.querySelectorAll(".itemName").forEach(item => {
        item.parentElement.classList.toggle("hidden", !item.classList.contains("change"))
    })
}

//Goes through all the rows and gets rid of the hidden class so its all viewable
function viewAll(){
    document.querySelectorAll(".listrow").forEach(row => {
        row.classList.remove("hidden")
    })
}