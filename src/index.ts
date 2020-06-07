let addButton = document.getElementById("addButton") as HTMLButtonElement | null;
let elements = document.getElementById("elements") as HTMLElement;
let nameField = document.getElementById("nameField") as HTMLDataElement;
let urlField = document.getElementById("urlField") as HTMLDataElement;

if (addButton == null || undefined) {
    alert("Button not found.");
}
else {

    addButton.onclick = function () {
        let myNewElement = document.createElement("div");
        myNewElement.classList.add("itemList");

        let myNewElementText1 = document.createElement("h5");
        myNewElementText1.appendChild(document.createTextNode(nameField.value));
        myNewElement.appendChild(myNewElementText1);
        nameField.value = ""

        let myNewElementText2 = document.createElement("h5");
        myNewElementText2.appendChild(document.createTextNode(urlField.value));
        myNewElement.appendChild(myNewElementText2);
        urlField.value = ""

        elements.appendChild(myNewElement);
        
        
        
        if (clrButton == null) {
            alert("Button not found.");
        }
        else {
            clrButton.onclick = function () {
                elements.innerHTML = "";
            }
        }
    }
}
