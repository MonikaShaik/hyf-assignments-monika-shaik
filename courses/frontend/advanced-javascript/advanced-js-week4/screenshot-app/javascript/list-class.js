class ScreenshotListClass {
  screenshotsData = [];
  apiURL = "https://crudcrud.com/api/557daf6ad5764666a1571229738c7d81";

  constructor() {
    const containerElement = document.getElementById("container");
    containerElement.appendChild(this.render());
    this.init();
  }

  async init() {
    await this.getScreenshotsData();
    this.displayScreenshotsList();
  }

  render() {
    const listContainerElement = document.createElement("div");
    listContainerElement.id = "list-container";
    return listContainerElement;
  }

  async getScreenshotsData() {
    const apiResponse = await fetch(`${this.apiURL}/screenshots`);
    const data = await apiResponse.json();

    console.log("API data:", data);

    this.screenshotsData = data;
  }

  displayScreenshotsList() {
    const listContainerElement = document.getElementById("list-container");
    listContainerElement.innerHTML = "";

    this.screenshotsData.forEach((screenshotItem, index) => {
      const screenshotItemElement = document.createElement("div");
      screenshotItemElement.className = "screenshot-item";

      screenshotItemElement.innerHTML = `
        <img 
          src="${screenshotItem.screenshotUrl}" 
          alt="Screenshot ${index + 1}" 
          height="200" 
        />
        <p>Screenshot ${index + 1}</p>
        <button type="button" class="delete-screenshot-button">
          Delete
        </button>
      `;

      const deleteButtonElement = screenshotItemElement.querySelector(
        ".delete-screenshot-button",
      );

      deleteButtonElement.addEventListener("click", async () => {
        await this.deleteScreenshot(screenshotItem._id);
      });

      listContainerElement.appendChild(screenshotItemElement);
    });
  }

  async deleteScreenshot(id) {
    const url = `${this.apiURL}/screenshots/${id}`;

    const apiResponse = await fetch(url, {
      method: "DELETE",
    });

    if (!apiResponse.ok) {
      console.log("Delete failed:", apiResponse);
      return;
    }

    console.log("Deleted item:", id);

    this.screenshotsData = this.screenshotsData.filter((screenshotItem) => {
      return screenshotItem._id !== id;
    });

    this.displayScreenshotsList();
  }
}

export default ScreenshotListClass;
