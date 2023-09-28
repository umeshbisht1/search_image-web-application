
const access = "d8sWSEm_lnx08TQ42fgianf61B7am9hfNWT74AyDhr8";
const form = document.querySelector("form");
let inputl = document.querySelector("#search-input");
const searchresults = document.querySelector(".search-results");
const show = document.getElementById("show");
let inputdata = "";
let page = 1;
async function searchimage() {
  try {
    inputdata = inputl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${access}`
    const response = await fetch(url)
    const data = await response.json();
    const results = data.results;
    
    if (page === 1) {
      searchresults.innerHTML = "";


    }
    results.map((result) => {
      const imageapper = document.createElement("div");
      imageapper.classList.add("search-result")
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imagelink = document.createElement("a");

      imagelink.href = result.links.html;
      imagelink.target = "_blank"
      imagelink.textContent = result.alt_description;
      imageapper.appendChild(image);
      imageapper.appendChild(imagelink);
      searchresults.appendChild(imageapper);

      page++;
      if (page > 1) {
        show.style.display = "block"

      }
    })
  } 
  catch (error) {
    consolelog("error")
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchimage();
});


show.addEventListener("click", (event) => {

  searchimage();
});

