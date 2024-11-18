const menu = [
    {
      id: 1,
      title: "Spaghetti alla Carbonara",
      category: "Pasta",
      price: 12.99,
      img: "FettuccineAlfredo.jpg",
      desc: "A classic Roman dish made with fresh spaghetti, crispy pancetta, eggs, and Pecorino Romano cheese. Served with freshly cracked black pepper. A true taste of Italy.",
    },
    {
      id: 2,
      title: "Pizza Margherita",
      category: "Pizza",
      price: 10.99,
      img: "Margherita.jpg",
      desc: "The iconic Italian pizza, topped with fresh mozzarella, tomato sauce, basil, and a drizzle of extra virgin olive oil. Simple yet perfect.",
    },
    {
      id: 3,
      title: "Lasagna alla Bolognese",
      category: "Pasta",
      price: 14.99,
      img: "Lasagna.jpg",
      desc: "Layers of fresh pasta filled with rich Bolognese sauce, béchamel, and Parmesan. A hearty dish that brings the flavors of Italy to your table.",
    },
    {
      id: 4,
      title: "Pizza Pepperoni",
      category: "Pizza",
      price: 11.99,
      img: "Pepperoni.jpg",
      desc: "A delicious pizza topped with spicy pepperoni, fresh mozzarella, and tomato sauce. A crowd-pleasing favorite for all ages.",
    },
    {
      id: 5,
      title: "Fettuccine Alfredo",
      category: "Pasta",
      price: 13.99,
      img: "FettuccineAlfredo.jpg",
      desc: "Fresh fettuccine pasta served with a creamy Alfredo sauce made from butter, heavy cream, and Parmesan. Rich and indulgent.",
    },
    {
      id: 6,
      title: "Tiramisu",
      category: "Dessert",
      price: 5.99,
      img: "Tiramisu.jpg",
      desc: "A traditional Italian dessert made with layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder. Light, creamy, and irresistible.",
    },
  ];
  
  function displayMenuItems(items) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "";
    
    items.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("menu-items", "col-12", "col-md-6", "col-lg-4");
      
      itemElement.innerHTML = `
        <div class="menu-info">
          <img src="${item.img}" alt="${item.title}" class="photo">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <span>$${item.price}</span>
          </div>
          <p class="menu-text">${item.desc}</p>
        </div>
      `;
      
      menuContainer.appendChild(itemElement);
    });
  }
  
  function filterMenu(category) {
    if (category === "All") {
      displayMenuItems(menu);
    } else {
      const filteredItems = menu.filter(item => item.category === category);
      displayMenuItems(filteredItems);
    }
  }
  
  // Initial display of all menu items
  displayMenuItems(menu);
  