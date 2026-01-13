const btn = document.getElementById("scroll-button");
const circle = btn.querySelector("circle");
const totalLength = 126;

window.addEventListener("scroll", (e) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrolled = 100 - (scrollTop / (scrollHeight - clientHeight)) * 100;

  circle.style.strokeDashoffset = scrolled;

  btn.style.display = scrollTop > 150 ? "flex" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behaviour: "smooth" });
});
