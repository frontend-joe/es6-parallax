const images = document.querySelectorAll(".image");

const windowHeight = window.innerHeight;

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  for (let img of images) {
    const imageTop = img.getClientRects()[0].top;

    const backgroundPositionY = `-${
      scrollPosition - imageTop / windowHeight
    }px`;

    img.style.backgroundPositionY = backgroundPositionY;
  }
};

document.addEventListener("scroll", onScroll);
