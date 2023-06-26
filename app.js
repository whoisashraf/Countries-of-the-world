// const container = document.querySelector(".container");

// let countries;
// let themeEl;
// let div;

// // fetch data
// async function fetchData(url) {
//   const data = await fetch(url);
//   countries = await data.json();
//   console.log(countries);

//   countries.forEach((country) => {
//     div = document.createElement("div");
//     div.className = "c_card";
//     div.innerHTML = `
//       <img src="${country.flags.png}" alt="${country.flags.alt}" style="border-radius:20px; margin-bottom:20px"></img>
//       <p>${country.name.common}</p>
//       <p>Population: ${country.population}</p>
//       <p>Region: ${country.region}</p>
//       <p>Capital: ${country.capital}</p>
//     `;
//     container.append(div);
//     div.remove()

//     div.addEventListener("click", () => {
//       let cou = document.createElement("div");
//       let body = document.querySelector("body");
//       cou.className = "cou_card";
//       cou.innerHTML = `
//         <div class="popup">
//           <div style="display:flex; flex-direction:column;">
//             <button class="back_btn">Back</button>
//             <img src="${country.flags.png}" alt="${country.flags.alt}" style="border-radius:20px; margin-bottom:20px"></img>
//           </div>
//           <div style="margin-top:60px;margin-left:20px;">
//             <p>${country.name.common}</p>
//             <div>
//               <div>
//                 <p>${country.name.official}</p>
//                 <p>Population: ${country.population}</p>
//                 <p>Region: ${country.region}</p>
//                 <p>Sub-region: ${country.subregion}</p>
//               </div>
//               <div>
//                 <p>Currencies: ${country.currencies.name}</p>
//                 <p>Languages: ${country.languages.name}</p>
//                 <p>Capital: ${country.capital}</p>
//               </div>
//             </div>

//           </div>
//         </div>
//   `;
//       body.append(cou);
//       let back_btn = document.querySelector(".back_btn");
//       back_btn.addEventListener("click", () => {
//         cou.remove();
//       });
//     });
//   });

//   themeEl = document.querySelector(".theme");
//   let body = document.body;
//   themeEl.addEventListener("click", () => {
//     if (body.style.backgroundColor != "rgb(43, 57, 69)") {
//       body.style.backgroundColor = "#2b3945";
//       body.style.color = "white";
//     } else {
//       body.style.backgroundColor = "white";
//       body.style.color = "black";
//     }
//   });

//   function update_ui(params) {
//     div.remove();

//     params.forEach((param) => {
//       console.log(params)
//       // div = document.createElement("div");
//       // div.className = "c_card";
//       div.innerHTML = `
//           <img src="${param.flags.png}" alt="${param.flags.alt}" style="border-radius:20px; margin-bottom:20px"></img>
//           <p>${param.name.common}</p>
//           <p>Population: ${param.population}</p>
//           <p>Region: ${param.region}</p>
//           <p>Capital: ${param.capital}</p>
//         `;

//       console.log("updated!");
//     });
//     container.append(div);

//   }

//   const search = document.querySelector("#search");
//   const filter = document.querySelector("#filter");

//   search.addEventListener("keyup", () => {
//     let searched_countries = countries.filter((c) => {
//       return c.name.common.toLowerCase().includes(search.value.toLowerCase());
//     });
//     console.log(searched_countries);
//     update_ui(searched_countries);
//   });

//   // filter.forEach((filterEl) => {
//   // console.log(filterEl)
//   filter.addEventListener("change", (e) => {
//     let filtered_countries = countries.filter((c) => {
//       return c.region.toLowerCase() === e.target.value.toLowerCase();
//     });
//     update_ui(filtered_countries);
//     console.log(filtered_countries);
//   });
//   // });
// }
// fetchData("https://restcountries.com/v3.1/all");
// // fetchData("data.json");
let countries;
let div;
const container = document.querySelector(".countryContainer");

async function fetchData(url) {
  const data = await fetch(url);
  countries = await data.json();
  console.log(countries);
  updateUi(countries);
}

fetchData("https://restcountries.com/v3.1/all");

// function popUp () {

// }
function updateUi(params) {
  params.sort((a, b) => {
    //  a.name.common - b.name.common
    if (a.name.common === b.name.common) {
      return 0
    }else{
      return a.name.common < b.name.common ? -1 : 1;
    }
  });
  params.forEach((element) => {
    div = document.createElement("div");
    div.className = "feature col";
    div.innerHTML = `
      <div class="card mx-auto" style="width: 20rem;">
      <img src="${element.flags.png}" alt="${element.flags.alt}" class="card-img-top" width="300" height="200"></img>
      <div class="card-body">
      <p class="card-text">${element.name.common}</p>
      <p class="card-text">Population: ${element.population}</p>
      <p class="card-text">Region: ${element.region}</p>
      <p class="card-text">Capital: ${element.capital}</p>
      </div>
      </div>
    `;
    container.append(div);
    div.addEventListener("click", () => {
      let popUp = document.createElement("div");
      document.querySelector("html").style.overflow = "hidden"
      popUp.className =
        "container-fluid position-absolute top-0 w-100 h-100 card";
      popUp.innerHTML = `
        <div class="position-relative">
          <button class="back-btn btn bg-secondary-subtle my-5 h6">Back</button>
          <div class="container row row-cols-1 row-cols-md-2">
            <img src="${element.flags.png}" alt="${element.flags.alt}"  class="img-fluid">
            <div class="">
              <div class="card-body">
                <h3 class="h3 card-text">${element.name.common}</h3>
                <p class="card-text h5">Native Name: ${element.name.common}</p>
                <p class="card-text h5">Population: ${element.population}</p>
                <p class="card-text h5">Region: ${element.region}</p>
                <p class="card-text h5">Sub-region: ${element.subregion}</p>
                <p class="card-text h5">Capital: ${element.capital}</p>
              </div>
            </div>
          </div>
        </div>
        `;
      document.querySelector("html").append(popUp);
      document.querySelector(".back-btn").addEventListener("click", () => {
        popUp.remove();
        document.querySelector("html").style.overflow = "scroll"
      });
    });
  });
}

const search = document.querySelector("#search");
const filter = document.querySelectorAll(".filter");

search.addEventListener("keydown", () => {
  let searched_countries = countries.filter((c) => {
    return c.name.common.toLowerCase().includes(search.value.toLowerCase());
  });
  // console.log(searched_countries);
  container.innerHTML = "";
  updateUi(searched_countries);
});

filter.forEach((filterEl) => {
  filterEl.addEventListener("click", (e) => {
    let filtered_countries = countries.filter((c) => {
      return c.region.toLowerCase() === e.target.innerHTML.toLowerCase();
    });
    container.innerHTML = "";
    updateUi(filtered_countries);
    // console.log(filtered_countries);
  });
});

document.querySelector(".themeToggle").addEventListener("click",()=>{
  if (document.querySelector("html").getAttribute("data-bs-theme")==="light") {
    document.querySelector("html").setAttribute("data-bs-theme","dark")
    document.querySelector(".themeToggle").innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg> ` + "Light theme"
  }else{
    document.querySelector("html").setAttribute("data-bs-theme","light")
    document.querySelector(".themeToggle").innerHTML =`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-moon pe-1"
    viewBox="0 0 16 16"
  >
    <path
      d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
    /></svg>` + "Dark theme"
  }
  
})

