// document.addEventListener("DOMContentLoaded", function () {
//   const searchBtn = document.getElementById("search-btn");
//   const searchInput = document.getElementById("food-search");
//   const recipeDetails = document.getElementById("recipe-details");
//   const recipeImage = document.getElementById("recipe-image");
//   const recipeName = document.getElementById("recipe-name");
//   const recipeCategory = document.getElementById("recipe-category");
//   const recipeArea = document.getElementById("recipe-area");
//   const recipeInstructions = document.getElementById("recipe-instructions");
//   const recipeIngredients = document.getElementById("recipe-ingredients");

//   searchBtn.addEventListener("click", function () {
//     const query = searchInput.value.trim();

//     if (query === "") {
//       alert("Please enter a food name.");
//       return;
//     }

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.meals) {
//           displayRecipe(data.meals[0]);
//         } else {
//           alert("No recipe found. Please try another search.");
//           recipeDetails.style.display = "none";
//         }
//       })
//       .catch((error) => console.error("Error fetching recipe:", error));
//   });

const roles = [
  {
    title: "an Educator",
    description:
      "I love nurturing young minds and creating meaningful learning experiences. Currently, I run Bloom Haven Academy, a school where a child can get the opportunity to fully explore his/her full potentials. You can learn more about Bloom Haven by clicking on the link below.",
    image: "BI200136.jpg",
    buttonText: "Check out Bloom Haven Academy",
    link: "index.html",
  },
  {
    title: "also a Singer",
    description:
      "Singing is not just a talent — it's my form of expression. Through melodies and lyrics, I connect deeply with my audience and convey emotions that words alone cannot express. Whether performing live or recording in a studio, I strive to inspire, uplift, and tell stories that resonate with the heart. I currently sing soprano with the Melharmonic Chorale Kaduna.",
    image: "singer.jpg",
    buttonText: "Explore My Music",
    link: "#",
  },
  {
    title: "a Violinist",
    description:
      "The violin is more than an instrument — it's an extension of my soul. With every note, I channel discipline, passion, and years of training. From classical symphonies to modern interpretations, I use music to bridge generations and bring beauty into the world, one string at a time. I am a Violin 1 player with the TMC Orchestra Kaduna. You can check out some of my videos by clicking below.",
    image: "Violin.jpg",
    buttonText: "Watch My Performances",
    link: "#",
  },
  {
    title: "a Front-End Engineer",
    description:
      "Engineering challenges me to think logically, solve problems, and innovate constantly. I enjoy breaking down complex systems and rebuilding them into smarter, more efficient solutions. Whether it’s designing systems, improving infrastructure, or working on sustainable projects, I’m driven by the desire to create a better future through technology.",
    image: "engineer.jpg",
    buttonText: "View My Projects",
    link: "port.html",
  },
];

let currentIndex = 0;

const roleText = document.getElementById("role");
const descText = document.getElementById("role-description");
const profileImg = document.getElementById("profile-img");
const roleLinkBtn = document.getElementById("role-link-btn");

function typeWriter(text, element, speed = 80, callback) {
  element.textContent = "";
  let i = 0;

  
  if (element.typingInterval) {
    clearTimeout(element.typingInterval);
  }

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      element.typingInterval = setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

function updateContent() {
  const { title, description, image, buttonText, link } = roles[currentIndex];

  
  profileImg.classList.add("fade-out");
  setTimeout(() => {
    profileImg.src = image;
    profileImg.classList.remove("fade-out");
  }, 600);

  
  typeWriter(title, roleText);


  descText.textContent = description;

 
  roleLinkBtn.textContent = buttonText;
  roleLinkBtn.href = link;

  currentIndex = (currentIndex + 1) % roles.length;
}


document.addEventListener("DOMContentLoaded", () => {
  updateContent();
  setInterval(updateContent, 7000);
});

