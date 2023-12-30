const arrowRight = document.getElementById("iconRight");
const arrowLeft = document.getElementById("iconLeft");
const containerMonths = document.querySelector(".months");
const containerDays = document.querySelector(".days");

arrowRight.addEventListener("click", () => {
  containerMonths.scrollLeft += containerMonths.offsetWidth / 2;
});

arrowLeft.addEventListener("click", () => {
  containerMonths.scrollLeft -= containerMonths.offsetWidth / 2;
});

async function getMonths() {
  const response = await fetch("./../data/calendar.json");
  const calendarData = await response.json();
  
  for (let data of calendarData) {
    const monthElement = document.createElement("li");

    const attrClass = document.createAttribute("class");
    const attrTabindex = document.createAttribute("tabindex");
    const attrRole = document.createAttribute("role");
    const attrDataNumberMonth = document.createAttribute("data-number-month");
    const attrDataMonthActive = document.createAttribute("data-month-active");

    attrClass.value = "month";
    attrTabindex.value = "0";
    attrRole.value = "button";
    attrDataNumberMonth.value = data.id;
    attrDataMonthActive.value = data.id === 1 ? true : false;

    monthElement.setAttributeNode(attrClass);
    monthElement.setAttributeNode(attrTabindex);
    monthElement.setAttributeNode(attrRole);
    monthElement.setAttributeNode(attrDataNumberMonth);
    monthElement.setAttributeNode(attrDataMonthActive);
    
    monthElement.appendChild(document.createTextNode(data.month.slice(0, 3)));
    containerMonths.appendChild(monthElement);
  }
}

async function getDays() {
  const response = await fetch("./../data/calendar.json");
  const devotionalData = await response.json();

  let data = devotionalData.filter((data) => data.id === 1)[0];

  for (let i = 1; i <= data.days.length; i++) {
    const dayElement = document.createElement("li");

    const attrClass = document.createAttribute("class");
    const attrTabindex = document.createAttribute("tabindex");
    const attrRole = document.createAttribute("role");
    const attrDataNumberDay = document.createAttribute("data-number-day");
    const attrDataMonthDay = document.createAttribute("data-day-active");

    attrClass.value = "day";
    attrTabindex.value = "0";
    attrRole.value = "button";
    attrDataNumberDay.value = i;
    attrDataMonthDay.value = i === 1 ? true : false;

    dayElement.setAttributeNode(attrClass);
    dayElement.setAttributeNode(attrTabindex);
    dayElement.setAttributeNode(attrRole);
    dayElement.setAttributeNode(attrDataNumberDay);
    dayElement.setAttributeNode(attrDataMonthDay);
    
    dayElement.appendChild(document.createTextNode(i));
    containerDays.appendChild(dayElement);
  }
}

getMonths().then(() => {
  const months = document.querySelectorAll(".month");
  
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
});

getDays().then(() => {
  const days = document.querySelectorAll(".day");

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
});