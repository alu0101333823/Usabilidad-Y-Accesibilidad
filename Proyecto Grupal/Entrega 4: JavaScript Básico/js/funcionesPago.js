document.addEventListener('DOMContentLoaded', function() {
  // Variables a usar
  const btn = document.getElementById('compras-button');
  const myDiv = document.getElementById('ejercicio4');

  // Datos de las compras registradas en un objeto JSON
  const dataJSON = 
  {
    buys: [ 
      {
        "dni": 1111,
        "bornDate": "2/4/1990",
        "account": "ES3801",
        "products": ["hoddie", "cap", "jeans"],
        "discount": 0,
        "totalPrice": 55,
        "paymentMethod": "cash",
        "payDay": `${new Date().getDate()}/${new Date().getDate()}/${new Date().getFullYear()}`     // Date() nos indica la fecha de hoy
      }, 
      {
        "dni": 2222,
        "bornDate": "5/5/1983",
        "account": "ES3802",
        "products": ["sunglasses"],
        "discount": 20,
        "totalPrice": 120,
        "paymentMethod": "credit",
        "payDay": "5/4/2022"
      },
      {
        "dni": 3333,
        "bornDate": "1/7/2001",
        "account": "ES3803",
        "products": ["t-shirt", "t-shirt"],
        "discount": 0,
        "totalPrice": 30,
        "paymentMethod": "cash",
        "payDay": `${new Date().getDate()}/${new Date().getDate()}/${new Date().getFullYear()}`
      }
    ]
  };
  
  btn.onclick = function () {
    dataJSON.buys.forEach(user => {
      const p = document.createElement('div');
      p.innerHTML = `
        <h4 class="center">Compras realizadas por el usuario con dni ${user.dni}: </h4>
        <p class="light">El usuario ha comprado ${user.products.length} artículos</p>
        <p class="light">El usuario ha pagado mediante ${user.paymentMethod}</p>
        <p class="light">El precio final consta de ${user.totalPrice} euros con ${user.discount}% de descuento (aplicado)</p>
        <p class="light">El pago se realizó/realizará el día ${user.payDay}</p>
      `;
      myDiv.appendChild(p);
    });
  };
});