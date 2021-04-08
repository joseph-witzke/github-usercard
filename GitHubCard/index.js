/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const result = axios.get("https://api.github.com/users/joseph-witzke")
console.log(result);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cards = document.querySelector(".cards");

function gitCardMaker({avatar_url, name, login, location, html_url, followers, following, bio}){
  const cardDiv = document.createElement("div");
  const userImg = document.createElement("img");
  const infoDiv = document.createElement("div");
  const subName = document.createElement("h3");
  const userName = document.createElement("p");
  const pLocation = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(subName);
  infoDiv.appendChild(userName);
  infoDiv.appendChild(pLocation);
  infoDiv.appendChild(profile);
  profile.appendChild(address);
  infoDiv.appendChild(followers);
  infoDiv.appendChild(following);
  infoDiv.appendChild(bio);

  cardDiv.classList.add("card");
  infoDiv.classList.add("card-info");
  subName.classList.add("name");
  userName.classList.add("username");
  
  userImg.src = avatar_url;
  subName.textContent = name;
  userName.textContent = login;
  pLocation.textContent = location;
  profile.textContent = "Profile: ";
  address.href = html_url;
  followers.textContent = followers;
  following.textContent = following;
  bio.textContent = bio;

return cardDiv
}

axios
  .get("https://api.github.com/users/joseph-witzke")
  .then((res) => {

  })
  .catch((err) => {

  });
  

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
