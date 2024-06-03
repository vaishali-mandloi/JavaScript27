function addItem() {
    const item = document.getElementById("item").value;

    if(item !== "") {
        document.getElementById("error").textContent = "";
        document.getElementById("itemDescription").style.display = "none";

        const parent = document.getElementById("groceryList");

        const newInput = document.createElement('li');
        // <li>Sugar <button>Edit</button><button>Delete</button></li>
        newInput.textContent = item;
    
        const editBtn = document.createElement('button');
        editBtn.setAttribute("onclick", "editItem(this)");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
    
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute("onclick", "deleteItem(this)");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";
    
        newInput.appendChild(editBtn);
        newInput.appendChild(deleteBtn);
    
        parent.appendChild(newInput);
    
        document.getElementById("item").value = "";
    } else {
        document.getElementById("error").textContent = "Please Enter a value then Submit!!!";
    }
   
}

function deleteItem(btn) {
    var groceryList = document.getElementById("groceryList");
    var item = btn.parentNode;
    groceryList.removeChild(item);

}

function editItem(btn) {
   const val = btn.parentNode.textContent.slice(0, -10);
   document.getElementById("item").value = val;

   const parent = document.getElementById("groceryList");
   parent.removeChild(btn.parentNode);

   const newValue = document.getElementById("item").value;

    const x = btn.parentNode;
    x.textContent = newValue;
}