let count = 0;

function CreateSelects(values, selectName) {
  let select = document.createElement('select');
  select.name = selectName;
  select.id = `${selectName}-${count}`;

  let DefaultOPtion = document.createElement('option');
  DefaultOPtion.text = "Selecione";
  DefaultOPtion.value = "";
  select.appendChild(DefaultOPtion)


  values.forEach(value => {
    let option = document.createElement('option');
    option.value = value;
    option.text = value;
    select.appendChild(option);
  });

  let label = document.createElement('label');
  label.textContent = selectName;
  label.appendChild(select);

  return label;
}

function CreateNewElements(element, textContent) {
  const newElement = document.createElement(element);
  newElement.textContent = textContent;
  return newElement;
}

function CreateNewFormElement() {
  
  const form = document.querySelector('#form');

  const box = document.createElement('div');
  box.classList.add('box');
  box.id = `box-${count}`;

  box.appendChild(CreateSelects(products, "Products"));
  box.appendChild(CreateSelects(units, "Units"));

  // Quantity input
  const inputQuantity = CreateNewElements('input', 'Quantity');
  inputQuantity.setAttribute('type', 'number');
  inputQuantity.setAttribute('id', `quantity-${count}`);
  inputQuantity.setAttribute('placeholder', 'Ex: 4.5');

  const inputLabel = CreateNewElements('label', 'Quantity');
  inputLabel.setAttribute('for', `quantity-${count}`);
  inputLabel.appendChild(inputQuantity);

  box.appendChild(inputLabel);

  // Price input
  const inputPrice = CreateNewElements('input', 'Price');
  inputPrice.setAttribute('type', 'number');
  inputPrice.setAttribute('id', `price-${count}`);
  inputPrice.setAttribute('placeholder', 'Ex: 10.20');

  const inputPriceLabel = CreateNewElements('label', 'Price');
  inputPriceLabel.setAttribute('for', `price-${count}`);
  inputPriceLabel.appendChild(inputPrice);

  box.appendChild(inputPriceLabel);

  form.appendChild(box);

  count++;
}

function ExtractData() {
  const boxes = document.querySelectorAll('.box');

  let data = [];

  boxes.forEach(box => {
    const product = box.querySelector(`#Products-${data.length}`);
    const unit = box.querySelector(`#Units-${data.length}`);
    const quantity = box.querySelector(`#quantity-${data.length}`);
    const price = box.querySelector(`#price-${data.length}`);

    data.push({
      product: product.value,
      unit: unit.value,
      quantity: quantity.value,
      price: price.value
    });
  });

  // return data;
  console.log(data);
}