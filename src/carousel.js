import iconDot from "./images/dot.svg";
import iconLeft from "./images/arrow-left.svg";
import iconRight from "./images/arrow-right.svg";

function createCarousel(images, dimension) {
  //All images that will be displayed by the carousel must be imported first.
  //then can be used as argument of the createCarousel() function.
  //
  const uiLeftRightPercentage = 1 / 10;
  const uiDotPercentage = 1 / 30;
  const uiDotBiggerPercentage = 1 / 25;
  const uiDotGap = uiDotPercentage / 2;
  const slideInterval = 5000;

  let isAutoSliding = false;

  let offsets;
  let currentOffestIndex;

  const dCarousel = document.createElement("div");
  dCarousel.classList.add("carousel");
  dCarousel.style.position = "relative";

  const dFrame = document.createElement("div");
  dFrame.classList.add("carousel-frame");
  dFrame.style.width = `${dimension.width}px`;
  dFrame.style.height = `${dimension.height}px`;
  dFrame.style.overflow = "hidden";
  dFrame.style.border = "2px solid red";

  let dSlider;
  if (images && images.length > 0) {
    dSlider = document.createElement("div");
    dSlider.classList.add("carousel-slider");
    dSlider.style.width = `${images.length * dimension.width}px`;
    dSlider.style.height = `${dimension.height}px`;
    dSlider.style.position = "relative";

    for (const image of images) {
      const i = document.createElement("img");
      i.src = image;
      i.style.width = `${dimension.width}px`;
      i.style.height = `${dimension.height}px`;
      i.style.objectFit = "contain";
      dSlider.appendChild(i);
    }

    dFrame.appendChild(dSlider);

    const dLeft = document.createElement("div");
    dLeft.classList.add("carousel-ui-left");
    dLeft.style.position = "absolute";
    dLeft.style.width = `${uiLeftRightPercentage * dimension.width}px`;
    dLeft.style.height = `${dimension.height}px`;
    dLeft.style.left = "0px";
    dLeft.style.top = "0px";
    dLeft.style.zIndex = "1";
    dLeft.style.backgroundColor = "white";
    dLeft.style.opacity = "0.5";
    dLeft.style.display = "flex";
    dLeft.style.flexDirection = "row";
    dLeft.style.alignItems = "center";
    const bLeft = document.createElement("img");
    bLeft.src = iconLeft;
    bLeft.style.width = `${uiLeftRightPercentage * dimension.width}px`;
    bLeft.style.height = `${uiLeftRightPercentage * dimension.width}px`;
    dLeft.appendChild(bLeft);
    dCarousel.appendChild(dLeft);

    const dRight = document.createElement("div");
    dRight.classList.add("carousel-ui-right");
    dRight.style.position = "absolute";
    dRight.style.width = `${uiLeftRightPercentage * dimension.width}px`;
    dRight.style.height = `${dimension.height}px`;
    dRight.style.right = "0px";
    dRight.style.top = "0px";
    dRight.style.zIndex = "1";
    dRight.style.backgroundColor = "white";
    dRight.style.opacity = "0.5";
    dRight.style.display = "flex";
    dRight.style.flexDirection = "row";
    dRight.style.alignItems = "center";
    const bRight = document.createElement("img");
    bRight.src = iconRight;
    bRight.style.width = `${uiLeftRightPercentage * dimension.width}px`;
    bRight.style.height = `${uiLeftRightPercentage * dimension.width}px`;
    dRight.appendChild(bRight);
    dCarousel.appendChild(dRight);

    offsets = [];
    for (let i = 0; i < images.length; i++) {
      offsets.push(`-${i * dimension.width}px`);
    }
    currentOffestIndex = 0;
    dSlider.style.left = offsets[currentOffestIndex];

    function handLeftClicked(event) {
      console.log("left");
      slidePrevious();
    }
    dLeft.addEventListener("click", handLeftClicked);
    function handleRightClicked(event) {
      console.log("right");
      slideNext();
    }
    dRight.addEventListener("click", handleRightClicked);
  } else {
    dFrame.innerText = "No image!";
  }

  dCarousel.appendChild(dFrame);

  const dDots = document.createElement("div");
  dDots.classList.add("carousel-ui-dots");
  dDots.style.position = "absolute";
  dDots.style.width = `${dimension.width}px`;
  dDots.style.height = `${uiLeftRightPercentage * dimension.height}px`;
  dDots.style.left = "0px";
  dDots.style.bottom = `0px`;
  dDots.style.zIndex = "1";
  dDots.style.backgroundColor = "white";
  dDots.style.opacity = "0.5";
  dDots.style.display = "flex";
  dDots.style.justifyContent = "center";
  dDots.style.alignItems = "center";
  dDots.style.gap = `${uiDotGap * dimension.width}px`;
  if (images && images.length > 0) {
    for (let i = 0; i < offsets.length; i++) {
      const dDot = document.createElement("img");
      dDot.src = iconDot;
      dDot.style.width = `${uiDotPercentage * dimension.width}px`;
      dDot.style.height = `${uiDotPercentage * dimension.width}px`;
      dDot.dataset.index = i;
      dDots.appendChild(dDot);

      function handleDotClicked(event) {
        console.log(event.target.style);
        slideTo(event.target.dataset.index);
      }
      dDot.addEventListener("click", handleDotClicked);
      dDot.addEventListener("mouseover", (event) => {
        dDot.style.width = `${uiDotBiggerPercentage * dimension.width}px`;
        dDot.style.height = `${uiDotBiggerPercentage * dimension.width}px`;
      });
      dDot.addEventListener("mouseleave", (event) => {
        dDot.style.width = `${uiDotPercentage * dimension.width}px`;
        dDot.style.height = `${uiDotPercentage * dimension.width}px`;
      });
    }
  }
  dCarousel.appendChild(dDots);

  //Sliding movement functions:
  function slideNext() {
    if (currentOffestIndex !== undefined && offsets && images) {
      currentOffestIndex = ++currentOffestIndex % images.length;
      dSlider.style.left = offsets[currentOffestIndex];
    }
  }
  function slidePrevious() {
    if (currentOffestIndex !== undefined && offsets && images) {
      currentOffestIndex--;
      if (currentOffestIndex < 0) {
        currentOffestIndex = images.length - 1;
      }
      dSlider.style.left = offsets[currentOffestIndex];
    }
  }
  function slideTo(index) {
    if (offsets && images) {
      currentOffestIndex = index;
      dSlider.style.left = offsets[currentOffestIndex];
    }
  }

  function startAutoSliding() {
    setInterval(slideNext, slideInterval);
  }
  startAutoSliding();

  return dCarousel;
}
export { createCarousel };
