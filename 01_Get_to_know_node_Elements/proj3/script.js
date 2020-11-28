const courses = [
    {
        name : "Complete ReactJS course",
        price : "2.3",
    },
    {
        name : "Complete C++ course",
        price : "2.5",
    },
    {
        name : "Complete Python course",
        price : "2.7",
    },
    {
        name : "Complete JavaScript course",
        price : "2.9",
    }
    
]

function generateList () {
    const ul = document.querySelector(".list-group");
    
    courses.forEach( courses => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(courses.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + courses.price);
        span.appendChild(price);

        li.appendChild(span)
        ul.appendChild(li)
    });
}

generateList();