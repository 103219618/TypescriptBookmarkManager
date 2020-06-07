// import {Bookmark} from 

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

        // Set the icon for the website
        let favicon = urlField.value;
        let icon = `https://s2.googleusercontent.com/s2/favicons?domain=${favicon}`;

        let img = document.createElement("img") as HTMLImageElement;
        img.setAttribute('src', icon);
        myNewElement.appendChild(img);



        let myNewElementText1 = document.createElement("h5");
        myNewElementText1.appendChild(document.createTextNode(nameField.value));
        myNewElement.appendChild(myNewElementText1);
        nameField.value = ""

        // setting url link
        let url = document.createElement("a");
        let url2 = urlField.value;
        url.setAttribute('href', url2)
        url.classList.add("urlDisplay");
        url.appendChild(document.createTextNode(url2));
        myNewElement.appendChild(url);
        urlField.value = ""

        // icon setup
        let favourIcon = document.createElement("a");
        favourIcon.href = "#";
        favourIcon.innerHTML = '<i class="far fa-heart"></i>';
        favourIcon.classList.add("favourIcon")
        myNewElement.appendChild(favourIcon);


        //favouriteIcon.innerHTML = '<i class="fas fa-heart"></i>';
        favourIcon.onclick = function () {
            let state1 = '<i class="far fa-heart"></i>';
            let state2 = '<i class="fas fa-heart"></i>';
            if (favourIcon.innerHTML == state1) {
                favourIcon.innerHTML = '<i class="fas fa-heart"></i>';
            } else if (favourIcon.innerHTML == state2) {
                favourIcon.innerHTML = '<i class="far fa-heart"></i>';
            }
        }

        // set the delete icon
        let a = document.createElement("a");
        a.href = "#";
        a.innerHTML = '<i class="fas fa-trash-alt"></i>';
        myNewElement.appendChild(a);

        elements.appendChild(myNewElement);

        // Bookmark Delete Function
        a.onclick = function () {
            let del = a.parentElement as HTMLElement;
            if (del == null) return;
            del.remove();
        }
    }
}
