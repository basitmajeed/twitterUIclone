const writeBox = document.querySelector(".write");
const postTextBox = document.querySelector("#postTextBox");
const everyoneReply = document.querySelector("#everyoneReply");
const postButton = document.querySelector("#postButton");
const searchBar = document.querySelector("#searchBar");
const searchBox = document.querySelector("#searchBox");

postTextBox.addEventListener("click", () => {
    everyoneReply.classList.remove("hidden");
    everyoneReply.classList.add("flex");
    writeBox.classList.add("border-b-[0.5px]", "border-b-gray-500");
});

postTextBox.addEventListener("input", () => {
    if (postTextBox.value.length > 0) {
        postButton.classList.remove("bg-gray-500");
        postButton.classList.add("bg-white");
    } else {
        postButton.classList.remove("bg-white");
        postButton.classList.add("bg-gray-500");
    }
});

searchBox.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBar.classList.remove("border-gray-500");
    searchBar.classList.toggle("border-blue-400");
});

document.addEventListener("click", () => {
    searchBar.classList.remove("border-blue-400");
    searchBar.classList.add("border-gray-500");
});
