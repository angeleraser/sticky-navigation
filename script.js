window.addEventListener("scroll", function () {
  const { height } = document.getElementById("nav").getBoundingClientRect();
  nav.classList[this.window.scrollY >= height ? "add" : "remove"](
    "nav-scrolled"
  );
});
