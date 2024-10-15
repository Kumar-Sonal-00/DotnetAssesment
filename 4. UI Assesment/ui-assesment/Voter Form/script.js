document.getElementById("voterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const result = document.getElementById("result");

    if (age >= 18) {
        result.textContent = name + " is eligible to vote.";
        result.classList.remove("not-eligible");
    } else {
        result.textContent = name + " is not eligible to vote.";
        result.classList.add("not-eligible");
    }
});