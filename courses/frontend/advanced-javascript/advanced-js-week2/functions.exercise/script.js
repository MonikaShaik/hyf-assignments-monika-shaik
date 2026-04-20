// setTimeout function (exercise 1)
setTimeout(function () {
  const paragraph = document.createElement("p");
  paragraph.innerText = "Called after 2.5 seconds";
  document.getElementById("output").appendChild(paragraph);
}, 2500);

// function with 2 parameters: delay and stringToLog (exercise 2)
function logAfterDelay(delay, stringToLog) {
  setTimeout(function () {
    const paragraph = document.createElement("p");
    paragraph.innerText = stringToLog;
    document.getElementById("output").appendChild(paragraph);
  }, delay * 1000);
}

logAfterDelay(1, "Called after 1 second");
logAfterDelay(2, "Called after 2 seconds");
logAfterDelay(3, "Called after 3 seconds");

// button click (exercise 3)
const button = document.getElementById("5secondsButton");

button.addEventListener("click", function () {
  logAfterDelay(5, "Called after 5 seconds");
});

// Earth and Saturn functions (exercise 4)
const earthLogger = function () {
  const paragraph = document.createElement("p");
  paragraph.innerText = "Earth";
  document.getElementById("output").appendChild(paragraph);
};

const saturnLogger = function () {
  const paragraph = document.createElement("p");
  paragraph.innerText = "Saturn";
  document.getElementById("output").appendChild(paragraph);
};

function logPlanet(planetLogFunction) {
  planetLogFunction();
}

logPlanet(earthLogger);
logPlanet(saturnLogger);

// Log location (exercise 5)
const locationButton = document.getElementById("locationButton");

locationButton.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const paragraph = document.createElement("p");
      paragraph.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
      document.getElementById("output").appendChild(paragraph);
    },
    function () {
      const paragraph = document.createElement("p");
      paragraph.innerText = "Location not available";
      document.getElementById("output").appendChild(paragraph);
    },
  );
});

// run after delay function (exercise 7)
function runAfterDelay(delay, callback) {
  setTimeout(function () {
    callback();
  }, delay * 1000);
}

const delayButton = document.getElementById("delayButton");

delayButton.addEventListener("click", function () {
  const delayValue = Number(document.getElementById("delayInput").value);

  runAfterDelay(delayValue, function () {
    const paragraph = document.createElement("p");
    paragraph.innerText = `This text was shown after ${delayValue} seconds`;
    document.getElementById("output").appendChild(paragraph);
  });
});

// detect double click (exercise 8)
let lastClickTime = 0;

document.addEventListener("click", function () {
  const currentClickTime = Date.now();

  if (currentClickTime - lastClickTime <= 500) {
    const paragraph = document.createElement("p");
    paragraph.innerText = "double click!";
    document.getElementById("output").appendChild(paragraph);
  }

  lastClickTime = currentClickTime;
});

// joke creator function (exercise 9)
function logFunnyJoke() {
  const paragraph = document.createElement("p");
  paragraph.innerText = "Funny joke";
  document.getElementById("output").appendChild(paragraph);
}

function logBadJoke() {
  const paragraph = document.createElement("p");
  paragraph.innerText = "Bad joke";
  document.getElementById("output").appendChild(paragraph);
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
