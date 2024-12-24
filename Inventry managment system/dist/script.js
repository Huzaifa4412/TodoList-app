"use strict";
{ // // Get elements
    // const inventoryForm = document.getElementById("inventory-form");
    // const itemNameInput = document.getElementById("item-name");
    // const itemQuantityInput = document.getElementById("item-quantity");
    // const inventoryBody = document.getElementById("inventory-body");
    // // Store inventory in memory
    // let inventory = [];
    // // Function to render inventory
    // function renderInventory() {
    //   // Clear the table body
    //   inventoryBody.innerHTML = "";
    //   // Loop through inventory and create rows
    //   inventory.forEach((item, index) => {
    //     const row = document.createElement("tr");
    //     // Item Name
    //     const nameCell = document.createElement("td");
    //     nameCell.textContent = item.name;
    //     row.appendChild(nameCell);
    //     // Item Quantity
    //     const quantityCell = document.createElement("td");
    //     quantityCell.textContent = item.quantity;
    //     row.appendChild(quantityCell);
    //     // Actions
    //     const actionsCell = document.createElement("td");
    //     actionsCell.classList.add("actions");
    //     const editButton = document.createElement("button");
    //     editButton.textContent = "Edit";
    //     editButton.classList.add("edit-btn");
    //     editButton.onclick = () => editItem(index);
    //     actionsCell.appendChild(editButton);
    //     const deleteButton = document.createElement("button");
    //     deleteButton.textContent = "Delete";
    //     deleteButton.classList.add("delete-btn");
    //     deleteButton.onclick = () => deleteItem(index);
    //     actionsCell.appendChild(deleteButton);
    //     row.appendChild(actionsCell);
    //     // Add the row to the table
    //     inventoryBody.appendChild(row);
    //   });
    // }
    // // Function to add an item
    // function addItem(event) {
    //   event.preventDefault();
    //   const itemName = itemNameInput.value;
    //   const itemQuantity = itemQuantityInput.value;
    //   if (itemName && itemQuantity) {
    //     // Add new item to inventory
    //     inventory.push({
    //       name: itemName,
    //       quantity: itemQuantity,
    //     });
    //     // Clear inputs
    //     itemNameInput.value = "";
    //     itemQuantityInput.value = "";
    //     // Render the updated inventory
    //     renderInventory();
    //   }
    // }
    // // Function to delete an item
    // function deleteItem(index) {
    //   inventory.splice(index, 1);
    //   renderInventory();
    // }
    // // Function to edit an item
    // function editItem(index) {
    //   const item = inventory[index];
    //   // Pre-fill the form with item details
    //   itemNameInput.value = item.name;
    //   itemQuantityInput.value = item.quantity;
    //   // Remove the old item and wait for the user to submit the updated data
    //   inventory.splice(index, 1);
    //   renderInventory();
    // }
    // // Event listener for adding an item
    // inventoryForm.addEventListener("submit", addItem);
}
{
    // {let inventoryForm = document.querySelector("#inventory-form");
    // // let inventory: [{ name: string, quantity: string }][] = [];
    // let inventory = JSON.parse(localStorage.getItem("inventoryDetails") || "[]");
    // inventoryForm?.addEventListener("submit", (e: Event) => {
    //     e.preventDefault();
    //     let itemNameInput = (e.target as HTMLElement).querySelector("#item-name") as HTMLInputElement;
    //     let inputNameValue = itemNameInput.value;
    //     let itemQuantityInput = (e.target as HTMLElement).querySelector("#item-quantity") as HTMLInputElement;
    //     let itemQuantityValue = itemQuantityInput.value;
    //     itemNameInput.value = "";
    //     itemQuantityInput.value = "";
    //     inventory.push({ name: inputNameValue, quantity: itemQuantityValue });
    //     console.log(inventory);
    //     localStorage.setItem("inventoryDetails", JSON.stringify(inventory));
    //     // sortData()
    //     document.querySelector("#inventory-body")!.innerHTML = ""
    //     showItems();
    // });
    // /**
    //  * Creates table rows for each item in the inventory and appends them to the #inventory-body element
    //  */
    // function showItems() {
    //     inventory.forEach((item: { name: string, quantity: string }, index: number) => {
    //         let row = document.createElement("tr");
    //         row.classList.add(`row-${index}`)
    //         let nameCell = document.createElement("td");
    //         let quantityCell = document.createElement("td")
    //         let action = document.createElement("td");
    //         // console.log(action);
    //         let editBtn = document.createElement("button")
    //         editBtn.classList.add("edit-btn")
    //         // console.log(editBtn);
    //         editBtn.textContent = "Edit";
    //         let delBtn = document.createElement("button")
    //         delBtn.classList.add("delete-btn")
    //         delBtn.textContent = "Delect";
    //         action.append(editBtn)
    //         action.append(delBtn)
    //         // console.log(action);
    //         nameCell.textContent = item.name;
    //         quantityCell.textContent = item.quantity;
    //         row.append(nameCell)
    //         row.append(quantityCell)
    //         row.append(action)
    //         delBtn?.addEventListener("click", (e: Event) => {
    //             e.preventDefault()
    //             inventory = inventory.filter((name: { name: string, quantity: string }) => {
    //                 return name.name !== item.name
    //             })
    //             localStorage.setItem("inventoryDetails", JSON.stringify(inventory));
    //             // sortData()
    //             // console.log(inventory);
    //             row.remove();
    //         })
    //         editBtn.addEventListener("click", (e: Event) => {
    //             document.querySelector("#item-name")!.value = item.name;
    //             document.querySelector("#item-quantity")!.value = item.quantity;
    //             inventory = inventory.filter((name: { name: string, quantity: string }) => {
    //                 return name.name !== item.name
    //             })
    //             localStorage.setItem("inventoryDetails", JSON.stringify(inventory));
    //             // sortData()
    //         })
    //         document.querySelector("#inventory-body")?.append(row);
    //     })
    // }
    // // showItems()
    // function sortData() {
    //     inventory.sort((a: any, b: any) => {
    //         console.log(a, b);
    //         if (a.name > b.name) {
    //             return 1
    //         }
    //         else if (a.name < b.name) {
    //             return -1
    //         }
    //         else {
    //             return 0
    //         }
    //     })
    //     console.log(inventory);
    //     localStorage.setItem("inventoryDetails", JSON.stringify(inventory));
    //     document.querySelector("#inventory-body")!.innerHTML = "";
    //     showItems()
    // }
    // document.querySelector(".sort-data")?.addEventListener("click", () => {
    //     sortData()
    // })
}
//?  Declaring Global Variable and Data 
let form = document.querySelector("#inventory-form");
let inventory = JSON.parse(localStorage.getItem("inventoryDetails") ?? "[]");
// ? Local Storage
let setItem = () => {
    return localStorage.setItem("inventoryDetails", JSON.stringify(inventory));
};
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let itemName = document.querySelector("#item-name");
    let itemQuantity = document.querySelector("#item-quantity");
    inventory.push({ "name": itemName.value.toUpperCase(), "quantity": itemQuantity.value });
    setItem();
    itemName.value = "";
    itemQuantity.value = "";
    document.querySelector("#inventory-body").innerHTML = "";
    showData();
});
function showData() {
    inventory.forEach((singleItem, index) => {
        let row = document.createElement("tr");
        let item = document.createElement("td");
        let quantity = document.createElement("td");
        let action = document.createElement("td");
        let editBtn = document.createElement("button");
        let delBtn = document.createElement("button");
        //    ? Adding inner Text
        item.innerText = singleItem.name;
        quantity.innerText = singleItem.quantity;
        editBtn.innerText = "Edit";
        delBtn.innerText = "Delect";
        // ? Setting ID Attribute
        row.setAttribute("id", `${index}`);
        // ? Adding Class List
        editBtn.classList.add("edit-btn");
        delBtn.classList.add("delete-btn");
        action.classList.add("actions");
        // ?Appending in to Row
        row.append(item);
        row.append(quantity);
        action.append(editBtn);
        action.append(delBtn);
        row.append(action);
        document.querySelector("#inventory-body")?.append(row);
        // Delect Function
        delBtn.addEventListener("click", () => {
            delFunc(row, index);
        });
        // Edit Function
        editBtn.addEventListener("click", () => {
            console.log("Edit Click");
            editIcon(singleItem, row, index);
        });
    });
}
function delFunc(row, index) {
    row.remove();
    inventory.splice(index, 1);
    setItem();
    document.querySelector("#inventory-body").innerHTML = "";
    showData();
}
function editIcon(obj, row, index) {
    let itemName = document.querySelector("#item-name");
    let itemQuantity = document.querySelector("#item-quantity");
    itemName.value = obj.name;
    itemQuantity.value = obj.quantity;
    delFunc(row, index);
}
function sort() {
    inventory.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        else if (a.name < b.name) {
            return -1;
        }
        else {
            return 0;
        }
    });
    console.log(inventory);
    document.querySelector("#inventory-body").innerHTML = "";
    showData();
}
document.querySelector("#sort")?.addEventListener("click", () => {
    // e.preventDefault()
    // console.table(inventory);
    sort();
    setItem();
    // console.table(inventory);
    console.log();
});
showData();
