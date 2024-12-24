
//?  Declaring Global Variable and Data 
let form = document.querySelector("#inventory-form")
let inventory: { name: string, quantity: string }[] = JSON.parse(localStorage.getItem("inventoryDetails") ?? "[]");

// ? Local Storage
let setItem = () => {
    return localStorage.setItem("inventoryDetails", JSON.stringify(inventory))
}
form?.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let itemName = document.querySelector("#item-name") as HTMLInputElement;
    let itemQuantity = document.querySelector("#item-quantity") as HTMLInputElement;
    inventory.push({ "name": itemName.value.toUpperCase(), "quantity": itemQuantity.value });
    setItem()
    itemName.value = ""
    itemQuantity.value = ""
    document.querySelector("#inventory-body")!.innerHTML = "";
    showData()
})

function showData() {
    inventory.forEach((singleItem: { name: string, quantity: string }, index: number) => {
        let row = document.createElement("tr")
        let item = document.createElement("td")
        let quantity = document.createElement("td")
        let action = document.createElement("td")
        let editBtn = document.createElement("button")
        let delBtn = document.createElement("button")
        //    ? Adding inner Text
        item.innerText = singleItem.name
        quantity.innerText = singleItem.quantity
        editBtn.innerText = "Edit"
        delBtn.innerText = "Delect"
        // ? Setting ID Attribute
        row.setAttribute("id", `${index}`)
        // ? Adding Class List
        editBtn.classList.add("edit-btn")
        delBtn.classList.add("delete-btn")
        action.classList.add("actions")
        // ?Appending in to Row
        row.append(item)
        row.append(quantity)
        action.append(editBtn)
        action.append(delBtn)
        row.append(action)
        document.querySelector("#inventory-body")?.append(row)

        // Delect Function
        delBtn.addEventListener("click", () => {
            delFunc(row, index);
        })

        // Edit Function
        editBtn.addEventListener("click", () => {
            console.log("Edit Click");
            editIcon(singleItem, row, index)
        })
    })
}

function delFunc(row: Element, index: number) {
    row.remove()
    inventory.splice(index, 1)
    setItem()
    document.querySelector("#inventory-body")!.innerHTML = "";
    showData()
}

function editIcon(obj: { name: string, quantity: string }, row: Element, index: number) {
    let itemName = document.querySelector("#item-name") as HTMLInputElement;
    let itemQuantity = document.querySelector("#item-quantity") as HTMLInputElement;
    itemName.value = obj.name;
    itemQuantity.value = obj.quantity;
    delFunc(row, index)
}


function sort() {
    inventory.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        else if (a.name < b.name) {
            return -1
        }
        else {
            return 0
        }
    })
    console.log(inventory);

    document.querySelector("#inventory-body")!.innerHTML = ""
    showData()
}
document.querySelector("#sort")?.addEventListener("click", () => {
    // e.preventDefault()
    // console.table(inventory);
    sort()
    setItem()
    // console.table(inventory);
    console.log();

})

showData()