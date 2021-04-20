function selectItem() {
  let select = document.createElement("select");
  select.setAttribute("id", "level");
  // for (var i = 0; i < 3; i++)
  //  {
  //    let option = document.createElement("option");
  //    option.setAttribute("value", i+1);
  //    select.appendChild(option);
  //  }
  [1,2,3].forEach(n => {
    let option = document.createElement("option");
    option.setAttribute("value", n);
    select.appendChild(option);
  })
  document.body.appendChild(select);
  select.addEventListener('change', (event) => {
    window.alert(event.target.value);
  });
  return select;
};

module.exports = selectItem;


/**Stwórz funkcję selectItem tworzącą element <select> (użyj document.createElement), o identyfikatorze “level”, który będzie posiadał trzy elementy <option>
 *  z atrybutami value z cyframi od 1 do 3 i dodaj go do elementu <body>. Funkcja powinna także zwracać element <select>. Dodaj w środku tej funkcji obsługę zdarzenia change elementu <select>,
 *  która po zajściu zdarzenia wywoła funkcję window.alert z wybraną opcją z elementu <select>.  */