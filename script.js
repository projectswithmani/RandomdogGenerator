console.log("hellow")

const DogImageDiv = document.getElementById('dogImage')
const GetButton = document.getElementById('GetButton')

const GetNewDog = () => {
  // https://dog.ceo/api/breeds/image/random
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(responce => responce.json())
    .then(json => {
      console.log(json.message)
      DogImageDiv.innerHTML = ` <img src='${json.message}' height=300 widht = 300 />`
    })

}


GetButton.onclick = () => GetNewDog()