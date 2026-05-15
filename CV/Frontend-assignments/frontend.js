//console.log("it is working");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.getElementById("name-input");
const generateButton = document.getElementById("generate-button");
const tryAgainButton = document.getElementById("try-again-button");
const houseResult = document.getElementById("house-result");
const seeMembersButton = document.getElementById("see-members");
const membersListElement = document.getElementById("members-list");

// Get the modal
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let currentHouse = null;

//hide hoiuses images 
function hideHouseImages() {
  houses.forEach(house => {
    const imgElement = document.getElementById(house);
    if (imgElement)
      imgElement.style.display = "none";
  });
}

generateButton.addEventListener("click", () => {
  modal.style.display = "block";
  const name = nameInput.value.trim();
  if (!name) {
    houseResult.textContent = "Enter your name.";
    return;
  }

  hideHouseImages();

  const house = houses[Math.floor(Math.random() * houses.length)];
  currentHouse = house;

  //Show correct house image
  const imgElement = document.getElementById(house);
  if (imgElement)
    imgElement.style.display = "block";

  houseResult.textContent = `${name} belongs to ${house}`;
  console.log(`${name} belongs to ${house}`);

  tryAgainButton.style.display = "inline-block";
  seeMembersButton.style.display = "inline-block";
});



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




tryAgainButton.addEventListener("click", () => {
  houseResult.textContent = "";
  nameInput.value = "";
  currentHouse = null;
  hideHouseImages();
  membersListElement.innerHTML = "";


  tryAgainButton.style.display = "none";
  seeMembersButton.style.display = "none";
  membersListElement.style.display = "none";
  modal.style.display = "none";

});




seeMembersButton.addEventListener("click", () => {

  membersListElement.style.display = "block";



  const membersListGryffindor = ["Euan Abercrombie",
    "Katie Bell",
    "Sirius Black",
    "Cressida Blume",
    "Lavender Brown",
    "Angelica Cole",
    "Ben Copper",
    "Ritchie Coote",
    "Colin Creevey",
    "Dennis Creevey",
    "Albus Dumbledore",
    "Lily Evans",
    "Seamus Finnigan",
    "Hermione Granger",
    "Rose Granger-Weasley",
    "Rubeus Hagrid",
    "Corey Hayden",
    "Angelina Johnson",
    "Lee Jordan",
    "Jae Kim",
    "Andrew Kirke",
    "Neville Longbottom",
    "Remus Lupin",
    "Natalie McDonald",
    "Minerva McGonagall",
    "Cormac McLaggen",
    "Natsai Onai",
    "Nellie Oggspire",
    "Parvati Patil",
    "Jimmy Peakes",
    "Peter Pettigrew",
    "Harry Potter",
    "James Potter",
    "James Sirius Potter",
    "Lily Luna Potter",
    "Garreth Weasley",
    "Leander Prewett",
    "Molly Prewett",
    "Demelza Robins",
    "Jack Sloper",
    "Alicia Spinnet",
    "Dean Thomas",
    "Romilda Vane",
    "Celestyna Warbeck",
    "Arthur Weasley",
    "Bill Weasley",
    "Charlie Weasley",
    "Fred Weasley",
    "George Weasley",
    "Ginny Weasley",
    "Percy Weasley",
    "Ron Weasley",
    "Oliver Wood"];

  const membersListHufflepuff = ["Hannah Abbott",
    "Beatrice Haywood",
    "Susan Bones",
    "Eleanor Branstone",
    "Diego Caplan",
    "Owen Cauldwell",
    "Cedric Diggory",
    "Eldritch Diggory",
    "Justin Finch-Fletchley",
    "Mirabel Garlick",
    "Penny Haywood",
    "Wayne Hopkins",
    "Megan Jones",
    "Silvanus Kettleburn",
    "Chiara Lobosca",
    "Artemisia Lufkin",
    "Teddy Lupin",
    "Ernie Macmillan",
    "Laura Madley",
    "Roger Malone",
    "Eloise Midgen",
    "Adelaide Oakes",
    "Arthur Plummly",
    "Grogan Stump",
    "Newton Scamander",
    "Theseus Scamander",
    "Hepzibah Smith",
    "Zacharias Smith",
    "Pomona Sprout",
    "Poppy Sweeting",
    "Nymphadora Tonks",
    "Gabriel Truman",
    "Sacharissa Tugwood",
    "Bridget Wenlock",
    "Rose Zeller"];

  const membersListRavenclaw = ["Stewart Ackerley",
    "Marcus Belby",
    "Terry Boot",
    "Mandy Brocklehurst",
    "Cho Chang",
    "Eddie Carmichael",
    "Penelope Clearwater",
    "Michael Corner",
    "Roger Davies",
    "Gilderoy Lockhart",
    "Luna Lovegood",
    "Xenophilius Lovegood",
    "Filius Flitwick",
    "Anthony Goldstein",
    "Duncan Hobhouse",
    "Olive Hornby",
    "Zenobia Oke",
    "Garrick Ollivander",
    "Padma Patil",
    "Everett Clopton",
    "Helena Ravenclaw",
    "Rowena Ravenclaw",
    "Sybill Trelawney",
    "Lisa Turpin",
    "Samantha Dare",
    "Amit Thakkar",
    "Ignatia Wildsmith"];

  const membersListSlytherin = ["Regulus Black",
    "Bloody Baron",
    "Miles Bletchley",
    "Lucian Bole",
    "Millicent Bulstrode",
    "Flora Carrow",
    "Hestia Carrow",
    "Sebastian Sallow",
    "Ominis Gaunt",
    "Imelda Reyes",
    "Vincent Crabbe",
    "Marcus Flint",
    "Gregory Goyle",
    "Astoria Greengrass",
    "Daphne Greengrass",
    "Terence Higgs",
    "Bellatrix Lestrange",
    "Rodolphus Lestrange",
    "Rabastan Lestrange",
    "Abraxas Malfoy",
    "Draco Malfoy",
    "Lucius Malfoy",
    "Narcissa Malfoy",
    "Scorpius Malfoy",
    "Adelaide Murton",
    "Theodore Nott",
    "Pansy Parkinson",
    "Peregrine Derrick",
    "Graham Montague",
    "Tom Riddle",
    "Salazar Slytherin",
    "Severus Snape",
    "Baroness von Kostbie",
    "Adrian Pucey",
    "Cassy Warwick",
    "Blaise Zabini"];

  //members list
  //if there is not a house selected
  if (!currentHouse) {
    membersListElement.innerHTML = "<li>Please select a house first.</li>";
    return;
  }

  //choose list based on house
  let membersList = [];
  if (currentHouse === "Gryffindor")
    membersList = membersListGryffindor;
  else if (currentHouse === "Hufflepuff")
    membersList = membersListHufflepuff;
  else if (currentHouse === "Ravenclaw")
    membersList = membersListRavenclaw;
  else if (currentHouse === "Slytherin")
    membersList = membersListSlytherin;


  membersListElement.innerHTML = "";
  membersList.forEach(member => {
    const li = document.createElement("li");
    li.textContent = member;
    membersListElement.appendChild(li);
  });

});

