let input = document.querySelector('.input');
let result = document.querySelector('.right-section');
let sub_btn = document.querySelector('button');
let res_container = document.querySelector(".res-container");

sub_btn.addEventListener("click", async () => {
    res_container.innerHTML = "<img src='./img/loading.svg' alt= 'Loading'>"
    let key ='ema_live_1MSA483i9Qw8PMOxZjn4NmuSVoAYSn5X3ic8Gjyb';
    let email = input.value;
    console.log(email)
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    console.log("URL Fetching")
    let res = await fetch(url);
    let response = await res.json()
    console.log(response)
    let str = '';
    for (key in response) {
        if (response[key] !== '' && response[key] !== null) {
            str = str + `${key} : ${response[key]}` + "<br>";
        }
    }
    console.log(str)
    res_container.innerHTML = str;

})
