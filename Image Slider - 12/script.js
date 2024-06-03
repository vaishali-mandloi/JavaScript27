const people = [
    {
        image: "images/person1.jpg",
    },
    {
        image: "images/person2.jpg",
    },
    {
        image: "images/person3.jpg",
    },
    {
        image: "images/person4.jpg",
    },
    {
        image: "images/person5.jpg",
    },
    {
        image: "images/person6.jpg",
    }
];

let currentSlide = 1;

function showSlide(n) {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = "";

    if(n == people.length -1 ) {
        document.getElementById("nextBtn").style.display = "none";
    } else if ( n == 1) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("prevBtn").style.display = "inline";
    }

    const person = people[currentSlide-1];

    const carouselItem = document.createElement('div');
    carouselItem.classList.add("carousel_item");

    const photo = document.createElement('div');
    photo.classList.add("photo");

    const image = document.createElement('img');
    image.src = person.image;

    photo.appendChild(image);
    carouselItem.append(photo);
    carousel.appendChild(carouselItem);
}

function preSlide() {
   showSlide(currentSlide -= 1)
}

function nextSlide() {
    showSlide(currentSlide += 1)
}

showSlide(currentSlide);


