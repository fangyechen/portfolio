const doggos = document.querySelector(".doggos");
const select = document.querySelector('.breeds');
const LIST_URL = "https://dog.ceo/api/breeds/list/all";

fetch(LIST_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i = 0; i < breedsArray.length; i++ ) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });

  select.addEventListener("change", function(event) {
    doggos.innerHTML = '';
    const breed = event.target.value;
    const BreedImageURL = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    const spinner = document.querySelector('.spinner');

    spinner.classList.add("show");
    fetch(BreedImageURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const img = document.createElement("img");
        img.src = data.message;
        img.alt = "Cute doggo";
        doggos.appendChild(img);
        spinner.classList.remove("show");
        }
      );
  });