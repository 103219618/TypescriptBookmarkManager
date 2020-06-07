import { Bookmark } from "./bookmarkclasses";

let addButton = document.getElementById("addButton") as HTMLButtonElement | null;
let elements = document.getElementById("elements") as HTMLElement;
let nameField = document.getElementById("nameField") as HTMLInputElement;
let urlField = document.getElementById("urlField") as HTMLInputElement;


let google = new Bookmark("Google", "www.google.com");
google.CreateMyBookmark("Google", "www.google.com");

if (addButton == null || undefined) {
    alert("Button not found.");
}
else {

    addButton.onclick = function () {

        let mybookmark = new Bookmark(nameField.value, urlField.value);
        mybookmark.CreateMyBookmark(nameField.value, urlField.value);
    }
}
