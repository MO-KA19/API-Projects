let adviceNums = document.querySelector(".txt h4");
let advice = document.querySelector(".txt p");
let btn = document.querySelector("button");
let counter = 1;



async function api() {
    url = "https://api.adviceslip.com/advice";
    const get = await fetch (url);
    const data = await get.json();
    
    
    let randomAdv = data["slip"]["advice"];
    advice.innerHTML = `"${randomAdv}"`;
    counter +=1
}



btn.onclick = async function setData() {
    api();
    adviceNums.innerHTML = `Advice #${counter}`;
    console.log(true);
}