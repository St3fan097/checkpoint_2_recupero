const container = document.querySelector(".container");
const button = document.querySelector(".button");
const result = document.querySelector(".result");


class CreateDiv {
    constructor(color) {
        this.color = color
    }
    backGround(){
        const backGroundColor = document.createElement("div");
        backGroundColor.setAttribute(`style`, `background-color:${this.color}`)
        divColor.append(backGroundColor);
    }
}


async function fetchData() {
    const res = await fetch("https://my-json-server.typicode.com/ndrx02/fakeRestAPI/colori")
    const data = await res.json()
    console.log(data);

    const numRandom = Math.floor(Math.random() * 5);

    const dataColor = new CreateDiv(numRandom);

    data.forEach((el, dataColor) => {
        const divColor = document.createElement("div");
        divColor.textContent = el[dataColor];
        result.append(divColor);
    });
}

button.addEventListener("click", fetchData);