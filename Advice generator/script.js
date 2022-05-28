let adviceNums = document.querySelector(".txt h4");
let advice = document.querySelector(".txt p");
let btn = document.querySelector("button");
let counter = 1;


async function AdviceApi() {
    url = "https://api.adviceslip.com/advice";
    const get = await fetch (url);
    const data = await get.json();
    
    
    let randomAdv = data["slip"]["advice"];
    advice.innerHTML = `"${randomAdv}"`;
    counter +=1
}



btn.onclick = async function setData() {
    AdviceApi();
    adviceNums.innerHTML = `Advice #${counter}`;
    advice.style.cssText = ("font-size: 18px;");
}



let translate = document.querySelector("#trans");
let copy = document.querySelector("#copy");



translate.onclick = async function TranslateApi() {
    let lang =  "en|ar";
    let url = `https://api.mymemory.translated.net/get?q=${advice.innerHTML}&langpair=${lang}`;
    const get = await fetch(url);
    const data = await get.json();
    
    let translation = data["responseData"]["translatedText"];
    advice.innerHTML = translation;
    advice.style.cssText = ("font-size: 24px;");
}

    
copy.onclick = (() => {
    let txt = advice.innerHTML;
    navigator.clipboard.writeText(txt);
    alert("Copied!")

})