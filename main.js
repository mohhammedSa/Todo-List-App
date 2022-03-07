let input = document.querySelector(".text");
let submit = document.querySelector(".sub");

submit.onclick = function () {
    let value = input.value;
    input.value = "";
    let div = document.createElement("div");
    div.classList.add("output");
    let paragraph = document.createElement("p");
    paragraph.classList.add("para");
    let deleted = document.createElement("span");
    deleted.classList.add("delete");
    deleted.style.cursor = "pointer"
    deleted.textContent = "Delete";

    paragraph.innerHTML = value;

    div.appendChild(paragraph);
    div.appendChild(deleted);
    document.body.append(div);

    deleted.addEventListener("click", removeDiv);
    function removeDiv() {
        div.remove();
    }
};

