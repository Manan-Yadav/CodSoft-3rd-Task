let output = document.getElementById("output");
let btn = document.querySelectorAll("button");
let data = " ";
const button = Array.from(btn);
button.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "AC") {
            data = " "
            output.value = data;
        }

        else if (e.target.innerHTML == "Del") {
            data = data.substring(0, data.length - 1);
            output.value = data;

        }
        else if (e.target.innerHTML == "=") {
            data = eval(data)
            output.value = data;
        }
        else {
            data += e.target.innerHTML;
            output.value = data;
        }

    })
})