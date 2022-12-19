const reviews = [
  {
    id: 1,
    name: "Andreas Siahaan",
    job: "Mobile Developer",
    img: "asset/1.jpg",
    text: "Halo perkenalkan namaku andreas siahaan disini aku bakalan menerangkan mengenai bahasa pemrograman mobile",
  },
  {
    id: 2,
    name: "Surya Insomnia",
    job: "Web Developer",
    img: "asset/2.jpg",
    text: "Halo perkenalkan namaku surya insomnia disini aku bakalan menerangkan mengenai bahasa pemrograman web",
  },
  {
    id: 3,
    name: "Wendi Cagur",
    job: "AI Developer",
    img: "asset/3.jpg",
    text: "Halo perkenalkan namaku wendi cagur disini aku bakalan menerangkan mengenai bahasa pemrograman AI",
  },
  {
    id: 4,
    name: "Kiki Saputri",
    job: "Front End Web",
    img: "asset/4.jpg",
    text: "Halo perkenalkan namaku kiki saputri disini aku bakalan menerangkan mengenai bahasa pemrograman front end",
  },
  {
    id: 5,
    name: "Jonny Bagio",
    job: "Back End Web",
    img: "asset/5.jpg",
    text: "Halo perkenalkan namaku jonny bagio disini aku bakalan menerangkan mengenai bahasa pemrograman back end",
  },
  {
    id: 6,
    name: "Fajar Ahmad",
    job: "Full Stack Web",
    img: "asset/6.jpg",
    text: "Halo perkenalkan namaku fajar ahmad disini aku bakalan menerangkan mengenai bahasa pemrograman fullstack web",
  },
  {
    id: 7,
    name: "Ervin Yudis",
    job: "Dev Ops Enginer",
    img: "asset/7.jpg",
    text: "Halo perkenalkan namaku ervin yudis disini aku bakalan menerangkan mengenai bahasa pemrograman dev ops",
  },
];

// select items
const author = document.getElementById("author");
const img = document.querySelector(".gbr");
const job = document.getElementById("job");
const text = document.getElementById("description");

const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".random");

let currentItem = 0;
// set Items
function showProfile() {
  const user = reviews[currentItem];
  img.src = user.img;
  author.innerText = user.name;
  job.innerText = user.job;
  text.innerText = user.text;
}

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = 6;
  }
  console.log(currentItem);
  showProfile();
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  console.log(currentItem);
  showProfile();
});

randomBtn.addEventListener("click", function () {});
