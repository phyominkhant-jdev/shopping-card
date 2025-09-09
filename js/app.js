let totalItems=0;
let totalPrice=0;

class Item{
    constructor(name,price,img){
        this.name=name;
        this.price=price;
        this.img=img;
    }
}

const items=[
    new Item("Mouse", 100, "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Item("Keyboard", 200, "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"),
    new Item("Monitor", 300, "https://media.istockphoto.com/id/2007027930/photo/a-modern-dark-office-at-night-with-a-white-screen-computer-mockup-and-office-supplies-on-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=yi50TEo9S1ORzA3e7mLaRKqBbgn6tmNb5Y_xwcOE6ug="),
    new Item("Laptop", 400, "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=edNJiHr7YRMkp1WVTj_RmFUy6hGzShhEoSp7GjT9S18="),
    new Item("Projector", 500, "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=edNJiHr7YRMkp1WVTj_RmFUy6hGzShhEoSp7GjT9S18="),
    new Item("Printer", 600, "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=edNJiHr7YRMkp1WVTj_RmFUy6hGzShhEoSp7GjT9S18="),
];

let row=document.getElementById("row");
for(i=0; i<items.length; i++){
    let item=items[i];

    let col=document.createElement("div");
    col.classList.add("col");
    col.innerHTML=`
        <div class="card">
            <img src="${item.img}" alt="" class="card-img-top">
                <div class="card-body d-flex justify-content-between">
                    <span>${item.name}</span>
                    <span>$ ${item.price}</span>
                </div>
        </div>
    `;

    row.appendChild(col);

    col.onclick=function(){
        totalItems++;
        document.getElementById("totalItems").textContent=totalItems;
        updateCart(item);
    }
}


let ul=document.getElementById("list");
function updateCart(item){
    let li=document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "py-3");
    li.innerHTML=`
        <span>${item.name}</span>
        <span>$ ${item.price}</span>
    `;

    ul.appendChild(li);

    totalPrices+=item.price
}