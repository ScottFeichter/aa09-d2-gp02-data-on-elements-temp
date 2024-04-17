// Your code here

const createLi = (e) => {
  e.preventDefault();
  const nameInput = document.getElementById(`name`);
  const typeInput = document.getElementById(`type`);
  const shoppingList = document.getElementById(`shopping-list`);

  const name = nameInput.value;
  const type = typeInput.value;

  const li = document.createElement("li");
  li.innerText = name;
  li.dataset.type = type;

  nameInput.value = ``;
  typeInput.value = `dairy`;

  console.log(li);
  shoppingList.appendChild(li);
}

document.addEventListener(`DOMContentLoaded`, () => {
  const addButton = document.getElementById(`add`);


  addButton.addEventListener(`click`, createLi);

});
