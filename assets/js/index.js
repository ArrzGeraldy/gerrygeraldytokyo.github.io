window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const scrollNow = scrollY;
    const field = document.querySelector(".field");
    const imageGallery = document.querySelectorAll(".gallery > img");
    const aside = document.querySelector("aside");
    console.log(scrollY);
  
    field.style.top = 290 + scrollNow / 2 + "px";
  
    if (scrollNow >= 1) {
      nav.classList.add("nav-active");
    } else {
      nav.classList.remove("nav-active");
    }
  
    if (scrollY > 400) {
      console.log("aside");
      aside.classList.add("aside-active");
    }
  
    if (scrollY > 900) {
      for (let i = 0; i < imageGallery.length; i++) {
        setTimeout(() => {
          imageGallery[i].classList.add("asd");
        }, 200 * (i * 1));
      }
    } else {
      for (let i = 0; i < imageGallery.length; i++) {
        imageGallery[i].classList.remove("asd");
      }
    }
  });
  