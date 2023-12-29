const arrowRight = document.getElementById("iconRight");
const arrowLeft = document.getElementById("iconLeft");
const containerMonths = document.querySelector(".months");
const months = document.querySelectorAll(".month");
const days = document.querySelectorAll(".day");

arrowRight.addEventListener("click", () => {
  containerMonths.scrollLeft += containerMonths.offsetWidth / 2;
});

arrowLeft.addEventListener("click", () => {
  containerMonths.scrollLeft -= containerMonths.offsetWidth / 2;
});

months.forEach((month) => {
  month.addEventListener("click", (element) => {
    for (let m of months) {
      if (m.dataset.monthActive === "true") {
        m.dataset.monthActive = false;
        m.classList.remove("active");
        break;
      }
    }

    element.target.classList.add("active");
    element.target.dataset.monthActive = "true";
  });
});

days.forEach((day) => {
  day.addEventListener("click", (element) => {
    for (let d of days) {
      if (d.dataset.dayActive === "true") {
        console.log(d.dataset.dayActive);
        d.dataset.dayActive = false;
        d.classList.remove("active");
        break;
      }
    }
    
    element.target.classList.add("active");
    element.target.dataset.dayActive = "true";
  });
});