export class Bookmark {

    nameField: string;
    urlField: string;
    icon: string;
    favourite: boolean = false;

    constructor(title: string, url: string) {
        this.nameField = title;
        this.urlField = url;
        this.icon = "";
    }

    CreateMyBookmark(nameField1: string, urlField1: string) {

        let elements = document.getElementById("elements") as HTMLElement;

        let webName = nameField1;
        let webUrl = urlField1;


        let myNewElement = document.createElement("div");
        myNewElement.classList.add("itemList");

        // Set the icon for the website
        //let favicon = nameField2.value;
        let icon = `https://s2.googleusercontent.com/s2/favicons?domain=${webUrl}`;

        let img = document.createElement("img") as HTMLImageElement;
        img.setAttribute('src', icon);
        myNewElement.appendChild(img);



        let myNewElementText1 = document.createElement("h5");
        myNewElementText1.appendChild(document.createTextNode(webName));
        myNewElement.appendChild(myNewElementText1);

        // setting url link
        let url = document.createElement("a");
        let url2 = webUrl;
        url.setAttribute('href', url2)
        url.classList.add("urlDisplay");
        url.appendChild(document.createTextNode(url2));
        myNewElement.appendChild(url);

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