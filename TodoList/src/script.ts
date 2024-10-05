
// ! Local Storage ----------
let data = JSON.parse(localStorage.getItem("lsData") || "[]")
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault()
})
// ! making data globally excess able
// let lsData: string[] = [];
let inputBar = document.querySelector("input[type='text'")
let completeTodo = JSON.parse(localStorage.getItem("completedTodo") || "0");
inputBar?.addEventListener("change", (e: Event) => {
  e.preventDefault()
  let inputVal = (e.target as HTMLInputElement).value.trim();
  // console.log(inputVal);
  (inputBar as HTMLInputElement).value = "";
  data.push({ "inputValue": inputVal, "completed": false });
  localStorage.setItem("lsData", JSON.stringify(data));
  // console.log("remainingTodo : " + remainingTodo);
  showData();

})


// console.log("data length: " + data.length);


// ? Show Data 
function showData() {
  let ul = document.querySelector(".todo-list");
  ul!.innerHTML = "";
  data.forEach((value: { inputValue: string; completed: boolean }, index: number) => {
    TodoStructure(value.inputValue, index);
  });
}
function TodoStructure(value: string, index: number) {
  let li = document.createElement("li");
  var htmlData = `
    <div class="checkbox">
        <input type="checkbox" class="checkbox-input" ">

                            <div class="delect">
                          <i class="ri-delete-bin-2-line"></i>
                      </div>
    </div>
    <p class = "">${value}</p>
    `;
  li?.insertAdjacentHTML("afterbegin", htmlData)
  // Delect Functionality :
  // Delect Functionality :
  let delectBtn = li.querySelector(".delect")
  delectBtn?.addEventListener("click", (e) => {
    li.remove();
    // console.log(data);
    data.forEach((currVal: { inputValue: string; completed: boolean }, index: number) => {
      if (currVal.inputValue == value) {
        data.splice(index, 1);
        localStorage.setItem("lsData", JSON.stringify(data));


      }
    })
    if ((checkBox as HTMLInputElement).checked) {
      completeTodo = completeTodo - 1;
      localStorage.setItem("completedTodo", JSON.stringify(completeTodo));
      document.querySelector(".completed-count")!.textContent = completeTodo.toString()
      // remainingTodo(1)

    }
    if (!(checkBox as HTMLInputElement).checked) {
      remainingTodo()
    }

  });
  let checkBox = li.querySelector(".checkbox-input")
  if (data[index].completed == true) {
    li.querySelector("p")?.classList.add("line-through");
    checkBox?.setAttribute("checked", "true");
  }
  // console.log(checkBox);
  checkBox?.addEventListener("click", (e) => {
    let p = (e.target as HTMLElement).parentElement?.nextElementSibling;
    if ((e.target as HTMLInputElement).checked) {
      completeTodo++;
      console.log("Value Increase" + completeTodo);
      localStorage.setItem("completedTodo", JSON.stringify(completeTodo));
      document.querySelector(".completed-count")!.textContent = completeTodo.toString()


    }
    else {
      completeTodo--;
      console.log("Value Increase" + completeTodo);
      localStorage.setItem("completedTodo", JSON.stringify(completeTodo));
      document.querySelector(".completed-count")!.textContent = completeTodo.toString()

    }
    p?.classList.toggle("line-through");
    remainingTodo()

    // Updating in local Storage
    let target = (e.target as HTMLElement).parentElement?.nextElementSibling?.textContent;

    data.forEach((currVal: { inputValue: string; completed: boolean }, index: number) => {
      if (currVal.inputValue == target) {
        data[index].completed = !data[index].completed;
        localStorage.setItem("lsData", JSON.stringify(data));
      }
    })

  });
  remainingTodo()

  let ul = document.querySelector(".todo-list")
  ul?.append(li)
}

showData();


function remainingTodo(extra: number = 0) {
  document.querySelector(".remaining-count")!.textContent = (data.length - completeTodo + extra).toString()
}
remainingTodo()
document.querySelector(".completed-count")!.textContent = localStorage.getItem("completedTodo")


