const grid = document.querySelector(".grid");
const input = document.getElementById("input");
const submitBTN = document.getElementById("submit");
//my img container class is grid in my html file
const macyContent = Macy({ container: grid, breackAt: { 400: 1 } });
const key = "O15R7YODNi7U1hYJvawoIMhHGYy5jStOOMLftbG7OeY";
const API_URL = "https://api.unsplash.com";
//********* reload bug *********** */
const fixStartUpBug = () => {
  macyInstance.runOnImageLoad(function () {
    macyInstance.recalculate(true, true);
    var evt = document.createEvent("UIEvents");
    evt.initUIEvent("resize", true, false, window, 0);
    window.dispatchEvent(evt);
  }, true);
};

//******************************** */
const addImagesInDom = (images) => {
  images.forEach((image) => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.src = image;
    container.append(img);
    grid.append(container);
  });
};
const initializeImages = async () => {
  let { data: images } = await axios.get(
    `${API_URL}/photos/?client_id=${key}&per_page=50`
  );
  images = images.map((image) => image.urls.regular);

  addImagesInDom(images);
  fixStartUpBug();
};
initializeImages();

const searchImages = async (query) => {
  let {
    data: { results: images },
  } = await axios.get(
    `${API_URL}/search/photos/?client_id=${key}&query=${query}&per_page=50`
  );
  images = images.map((image) => image.urls.regular);
  return images;
};
const removeAllChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
const handleSubmitBTN = async (event) => {
  event.preventDefault();
  const query = input.value;
  if (!query) return false;
  const images = await searchImages(query);

  removeAllChild(grid);
  addImagesInDom(images);
  fixStartUpBug();
};
submitBTN.addEventListener("click", handleSubmitBTN);
