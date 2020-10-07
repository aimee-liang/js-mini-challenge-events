/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

function changeColor(){
  
  const changeMe = document.getElementById("header");

  document.addEventListener('click', function(e){
    if (e.target === changeMe){
      toggleColor(changeMe);
    }
    else 
      console.log ("This isn't working")
  })
}

changeColor()

/***** Deliverable 2 *****/

function addNewPlayer(){
  const form = document.getElementById("new-player-form");

  document.addEventListener('submit', function(e){
    e.preventDefault();

    const number = e.target["number"].value;
    let numberInput = document.createElement("div");
    numberInput.textContent = number;
  })

  // append the new element we create 
  
}


// renderPlayer()

/***** Deliverable 3 *****/
// const likesIncrease = document.getElementsByClassName("player");
// let likesClass = document.querySelectorAll("likes");

// likesIncrease.addEventListener('click', event => {
//   // set some variable to the p class likes
//   if (event.target.className = "like-button"){
//     // the p class likes should increase
//     likesClass ++;
//   }
// })