// 1. Short title movies
const shortTitleMovies = movies.filter((movie) => movie.title.length < 10);

// 2. Long movie titles
const longMovieTitles = movies
  .filter((movie) => movie.title.length > 20)
  .map((movie) => movie.title);

// 3. Count 1980s movies
const moviesFrom80sCount = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989,
).length;

// 4. Tagged movies
const taggedMovies = movies.map((movie) => {
  let tag = "";

  if (movie.rating >= 7) {
    tag = "Good";
  } else if (movie.rating >= 4) {
    tag = "Average";
  } else {
    tag = "Bad";
  }

  return { ...movie, tag };
});

// 5. Ratings over 6 with chaining
const ratingsOver6 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);

// 6. Keyword count
const keywords = ["surfer", "alien", "benjamin"];

const keywordCount = movies.reduce((count, movie) => {
  const lowerTitle = movie.title.toLowerCase();

  keywords.forEach((keyword) => {
    if (lowerTitle.includes(keyword)) {
      count++;
    }
  });

  return count;
}, 0);

// 7. Duplicated-word titles
const duplicatedWordMovies = movies.filter((movie) => {
  const words = movie.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(" ")
    .filter((word) => word !== "");

  const uniqueWords = new Set(words);

  return uniqueWords.size !== words.length;
});

// Display results
document.getElementById("shortTitles").textContent = JSON.stringify(
  shortTitleMovies,
  null,
  2,
);

document.getElementById("longTitles").textContent = JSON.stringify(
  longMovieTitles,
  null,
  2,
);

document.getElementById("count80s").textContent = moviesFrom80sCount;

document.getElementById("taggedMovies").textContent = JSON.stringify(
  taggedMovies,
  null,
  2,
);

document.getElementById("ratingsOver6").textContent = JSON.stringify(
  ratingsOver6,
  null,
  2,
);

document.getElementById("keywordCount").textContent = keywordCount;

document.getElementById("duplicatedWords").textContent = JSON.stringify(
  duplicatedWordMovies,
  null,
  2,
);

// Opening and closing cards by clicking the header
const headers = document.querySelectorAll(".card-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    card.classList.toggle("open");
  });
});
