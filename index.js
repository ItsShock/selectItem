function selectItem() {
  let select = document.createElement("select");
  select.setAttribute("id", "level");
  for (var i = 0; i < 3; i++)
   {
     let option = document.createElement("option");
     option.setAttribute("value", 1,2,3);
     select.appendChild(option);
   }
  document.body.appendChild(select);
  select.addEventListener('change', (event) => {
    window.alert();
  });
  return select;
};

module.exports = selectItem;
