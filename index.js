// async function fetchData(){
//     const response =await fetch("https://api.github.com/users")
    
//     const data = await response.json()
//     data.map((user)=>{
//         console.log(user.name)
//     })
// }

// fetchData();



// let btn = document.getElementById('btn')
// let city = document.getElementById('city');

// btn.addEventListener('click', () => {
//     let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKey}`
//     console.log(city.value);
//     fetch(URL)
//     .then((item) => item.json() )
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// })

let ApiKey = "3168b12038bd6d544b0f8f1607dc5079";

let cityName = document.querySelector("#city");
let button = document.querySelector(".btn123")

button.addEventListener('click', ()=>{
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${ApiKey}`
    fetch(URL)
    .then((item)=> item.json())
    .then((data)=> console.log(data))
    .catch((err)=>console.log(err))
    
})