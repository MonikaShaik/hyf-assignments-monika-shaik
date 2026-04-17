class FormClass {
  constructor() {
    document.body.appendChild(this.render());
    document.getElementById("screenshotImage").style.display = "none";
    this.eventListers();
  }
  // create and render form elements
  render() {
    const formContainer = document.createElement("div");
    formContainer.innerHTML = `
      <label for="urlInput">Enter URL:</label>
      <input type="text" id="urlInput" placeholder="URL" value="" />
      <button id="generateScreenshotButton">Generate Screenshot</button>
      <img id="screenshotImage" src="" alt="Screenshot image here" height="300" />
      <br>
      <button id="saveScreenshotButton" type="button" class="save-screenshot-button">
      </button>
    `;

    return formContainer;
  }

  websiteURL = "";
  screenshotURL = "";

  //event listener for button click to generate screenshot
  eventListers() {
    const generateScreenshotButtonElement = document.getElementById(
      "generateScreenshotButton",
    );
    generateScreenshotButtonElement.addEventListener("click", () => {
      const inputElement = document.getElementById("urlInput");
      this.websiteURL = inputElement.value;
      console.log("url is ..." + this.websiteURL);
      this.generateScreenshot();

      const saveScreenshotButtonElement = document.getElementById(
        "saveScreenshotButton",
      );
      saveScreenshotButtonElement.addEventListener("click", async () => {
        this.saveScreenshot();
      });
    });
  }
  // function to generate screenshot from API and display it
  async generateScreenshot() {
    console.log("URL...", this.websiteURL);

    if (
      !this.websiteURL.startsWith("http://") &&
      !this.websiteURL.startsWith("https://")
    ) {
      this.websiteURL = "https://" + this.websiteURL;
    }

    const apiBaseURL = "https://website-screenshot6.p.rapidapi.com/screenshot";
    const queryParams = `url=${encodeURIComponent(this.websiteURL)}`;
    const apiURL = `${apiBaseURL}?${queryParams}`;

    const APIresponce = await fetch(apiURL, {
      headers: {
        "X-RapidAPI-Key": "7e545b9cbbmsh661189d38c2e4d5p18aaf3jsn07cffe714fb9",
        "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });

    const data = await APIresponce.json();
    console.log("API data is...", data);

    const screenshotImageElement = document.getElementById("screenshotImage");
    this.screenshotURL = data.screenshotUrl;
    screenshotImageElement.src = data.screenshotUrl;
    screenshotImageElement.style.display = "block";
    const hideSaveScreenshotButton = document.getElementById(
      "saveScreenshotButton",
    );
    saveScreenshotButton.style.display = "block";
  }

  async saveScreenshot() {
    const apiUrl =
      "https://crudcrud.com/api/47664b37a5c847d18c2fc25560eff020/screenshots";

    const optoins = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ screenshotUrl: this.screenshotURL }),
    };

    const apiResponse = await fetch(apiUrl, optoins);
    const data = await apiResponse.json();
    console.log("Data saved to API:", data);
    const inputElement = document.getElementById("urlInput");
    inputElement.value = "";
    const screenshotImageElement = document.getElementById("screenshotImage");
    screenshotImageElement.style.display = "none";
    const saveScreenshotButtonElement = document.getElementById(
      "saveScreenshotButton",
    );
    saveScreenshotButtonElement.style.display = "none";
  }
}

// const object = new FormClass();
export default FormClass;
