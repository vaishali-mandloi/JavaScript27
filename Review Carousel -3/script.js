const people = [
    {
        image: "images/person1.jpg",
        name: "Rhonda Byrne",
        designation: "Software Engineer",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab et excepturi at quaerat repellat quisquam quae? Eum praesentium possimus sapiente aliquid unde deserunt atque ad commodi iusto minus perferendis dicta tenetur, cumque mollitia porro laboriosam maxime veritatis quaerat sunt reprehenderit"
    },
    {
        image: "images/person2.jpg",
        name: "Tim George",
        designation: "Technical Trainee",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab et excepturi at quaerat repellat quisquam quae? Eum praesentium possimus sapiente aliquid unde deserunt atque ad commodi iusto minus perferendis dicta tenetur, cumque mollitia porro laboriosam maxime veritatis quaerat sunt"
    },
    {
        image: "images/person3.jpg",
        name: "Peter Philips",
        designation: "Devops Engineer",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab et excepturi at quaerat repellat quisquam quae? Eum praesentium possimus sapiente aliquid unde deserunt atque ad commodi iusto minus perferendis dicta tenetur, cumque mollitia porro laboriosam maxime veritatis quaerat sunt"
    },
    {
        image: "images/person4.jpg",
        name: "B. B. Bajaj",
        designation: "Manager",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab et excepturi at quaerat repellat quisquam quae? Eum praesentium possimus sapiente aliquid unde deserunt atque ad commodi iusto minus perferendis dicta tenetur, cumque mollitia porro laboriosam maxime veritatis quaerat sunt"
    },
    {
        image: "images/person5.jpg",
        name: "Jamer Clear",
        designation:"Consultant",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab et excepturi at quaerat repellat quisquam quae? Eum praesentium possimus sapiente aliquid unde deserunt atque ad commodi iusto minus perferendis dicta tenetur, cumque mollitia porro laboriosam maxime veritatis quaerat sunt"
    },
    {
        image: "images/person6.jpg",
        name: "Rema Disoja",
        designation:"UI/UX Designer",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab et excepturi at quaerat repellat quisquam quae? Eum praesentium possimus sapiente aliquid unde deserunt atque ad commodi iusto minus perferendis dicta tenetur, cumque mollitia porro laboriosam maxime veritatis quaerat sunt"
    }
];

{/* <div class="carousel_item">
        <div class="profile"><img src="images/person1.jpg"></div>

        <div class="intro">
            <p class="name">Rhonda Byrne</p>
            <p class="designation">Technical Trainee</p>
        </div>

        <div class="feed">
            <p class="feedback">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione perspiciatis explicabo, magnam nulla exercitationem quia vel ipsum beatae ut, quae esse id alias autem accusamus a cupiditate dolorem amet. Asperiores dolorum illum dolores quo porro voluptatum excepturi odit officiis, quas repudiandae quaerat deleniti vel dolor optio doloribus quidem laboriosam molestiae id perspiciatis voluptate blanditiis provident?</p>
        </div>
    </div> */}

let currentSlide = 1;

function showSlide(n) {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = "";

    if(n > people.length) {
        currentSlide = people.length;
        console.log(currentSlide);
    } 
    else if(n < 1) {
        currentSlide = 1;
    }

    const person = people[currentSlide-1];

    const carouselItem = document.createElement('div');
    carouselItem.classList.add("carousel_item");

    const profile = document.createElement('div');
    profile.classList.add("profile");
    const image = document.createElement('img');
    image.src = person.image;

    profile.appendChild(image);

    const intro = document.createElement('div');
    intro.classList.add("intro");
    const name = document.createElement('p');
    name.classList.add("name");
    name.textContent = person.name;
    const designation = document.createElement('p');
    designation.classList.add("designation");
    designation.textContent = person.designation;

    intro.appendChild(name);
    intro.appendChild(designation);

    const feed = document.createElement('div');
    feed.classList.add("feed");
    const feedback = document.createElement('p');
    feedback.classList.add("feedback");
    feedback.textContent = person.feedback;

    feed.appendChild(feedback);


    carouselItem.appendChild(profile);
    carouselItem.appendChild(intro);
    carouselItem.appendChild(feed)
    
    carousel.appendChild(carouselItem);
}

function preSlide() {
   showSlide(currentSlide -= 1)
}

function nextSlide() {
    showSlide(currentSlide += 1)
}

showSlide(currentSlide);


