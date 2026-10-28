let count = 1

function addGrocery(item){
    count++
    const div = document.getElementById("list")
    const itemHtml = `
                    <div class="listrow" id="list">
                    <p class="itemName">${count}. ${item}</p> <BUTTON onclick="purchased(this)">Purchased</BUTTON>
                </div>`

    if(div){
        div.insertAdjacentHTML(`beforeend`, itemHtml)
    }
}

function purchase(){
    
}

function remove(){

}

function clearList(){
    const clear = document.getElementById("list")

    if (clear){
        clear.remove()
    }
}

