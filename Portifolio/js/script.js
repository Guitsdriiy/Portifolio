/* ======================== typing animation */
var typed = new typed(".typing", {
  SVGStringList: [
    "Web Designer",
    "Web Developer",
    "Graphic Designer",
    "Youtuber",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/* ======================== Aside */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  console.log(navList[i]);
  const a = avList[i].querySelector("a");
  console.log(a);
}
