
    const menuData = [
        {
            name: "Burger",
            price: "189/-",
            description: "breakfast - 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia?",
            image_url: "images/burger.jpg",
            item_type: "breakfast",
        },
        {
            name: "Pizza",
            price: "289/-",
            description: "lunch - 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia? Lorem ipsum dolor sit amet consectetur.",
            image_url: "images/pizza.jpg",
            item_type: "lunch",
        },
        {
            name: "Burger",
            price: "189/-",
            description: "snakes - 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia?",
            image_url: "images/burger.jpg",
            item_type: "snakes",
        },
        {
            name: "Pizza",
            price: "289/-",
            description: "dinner - 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia? Lorem ipsum dolor sit amet consectetur.",
            image_url: "images/pizza.jpg",
            item_type: "dinner",
        },
        {
            name: "Burger",
            price: "189/-",
            description: "breakfast - 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia?",
            image_url: "images/burger.jpg",
            item_type: "breakfast",
        },
        {
            name: "Pizza",
            price: "289/-",
            description: "lunch - 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia? Lorem ipsum dolor sit amet consectetur.",
            image_url: "images/pizza.jpg",
            item_type: "lunch",
        },
        {
            name: "Burger",
            price: "189/-",
            description: "snakes - 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia?",
            image_url: "images/burger.jpg",
            item_type: "snakes",
        },
        {
            name: "Pizza",
            price: "289/-",
            description: "dinner - 8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab illum velit beatae. Rerum in vitae quasi fugiat eum amet laborum temporibus officia? Lorem ipsum dolor sit amet consectetur.",
            image_url: "images/pizza.jpg",
            item_type: "dinner",
        }
    ];

    function showData(itemType) {
        let newArray;
    
        if (itemType.toLowerCase() === 'all') {
            newArray = menuData;
        } else {
            newArray = menuData.filter(item => item.item_type.toLowerCase() === itemType.toLowerCase());
        }

      const container = document.getElementById("menuContent");
      container.innerHTML = "";

      newArray.map(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add("item");

            const itemImg = document.createElement('div');
            itemImg.classList.add("item_img");
            itemImg.innerHTML = `<img src="${item.image_url}" />`;

            const itemDescription = document.createElement('div');
            itemDescription.classList.add("item_description");

            const price = document.createElement('div');
            price.classList.add("price");
            price.innerHTML = `<p><span style="margin-right: 73px">${item.name}</span>${item.price}</p><hr />`;

            const description = document.createElement('div');
            description.classList.add("description");
            description.innerHTML = `<p>${item.description}</p>`;

            itemDescription.appendChild(price);
            itemDescription.appendChild(description);

            menuItem.appendChild(itemImg);
            menuItem.appendChild(itemDescription);

            container.appendChild(menuItem);
        });
    }  

    showData('all');


