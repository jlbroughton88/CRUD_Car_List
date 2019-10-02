let submitBtn = document.getElementById("submitBtn");
let clickViewPrompt = document.getElementById("clickViewPrompt")
submitBtn.addEventListener("click", (e) => {
    let prompt = document.createElement("p");
    prompt.style.color = "#e4e4e4";
    prompt.style.position = "absolute";
    prompt.style.alignSelf = "center";
    prompt.textContent = "Car added!"
    clickViewPrompt.appendChild(prompt)
})