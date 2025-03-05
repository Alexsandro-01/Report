let count = 0;

function CreateSelects(values, selectName) {
  let select = document.createElement('select');
  select.name = selectName;
  select.id = `${selectName}-${count}`;

  let DefaultOPtion = document.createElement('option');
  DefaultOPtion.text = "Select";
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
  inputPrice.setAttribute('placeholder', 'Ex: 10.2');

  const inputPriceLabel = CreateNewElements('label', 'Price');
  inputPriceLabel.setAttribute('for', `price-${count}`);
  inputPriceLabel.appendChild(inputPrice);

  box.appendChild(inputPriceLabel);

  if (count > 0) {
    let previosBox = document.querySelector(`#box-${count - 1}`);
    previosBox.insertAdjacentElement('afterend', box);
  } else {
    form.appendChild(box);
  }

  
  //Add surplus input and paid input
  if (count === 0) {
    let div = CreateNewElements('div', '');
    div.classList.add('surplus');

    let surplusLabel = CreateNewElements('label', 'Surplus');
    surplusLabel.setAttribute('for', `surplus`);

    let surplusInput = CreateNewElements('input', 'Surplus');
    surplusInput.setAttribute('type', 'number');
    surplusInput.setAttribute('id', `surplus`);
    surplusInput.setAttribute('placeholder', 'Ex: 10.2');

    surplusLabel.appendChild(surplusInput);

    let paidLabel = CreateNewElements('label', 'Paid');
    paidLabel.setAttribute('for', `paid`);

    let paidInput = CreateNewElements('input', 'Paid');
    paidInput.setAttribute('type', 'number');
    paidInput.setAttribute('id', `paid`);
    paidInput.setAttribute('placeholder', 'Ex: 10.2');

    paidLabel.appendChild(paidInput);

    div.appendChild(surplusLabel);
    div.appendChild(paidLabel);

    form.appendChild(div);
  }

  count++;
}

function CreateResult(data) {
  const resultElement = document.querySelector('#result');
  const surplus = document.querySelector('#surplus').value;
  const paid = document.querySelector('#paid').value;

  data.forEach(item => {
    let result = CreateNewElements('p', '');
    result.textContent = `${item.product} ${item.quantity} ${item.unit} x ${item.price} = ${item.total}`;

    resultElement.appendChild(result);
    resultElement.appendChild(CreateNewElements('br', ''));
  });

  resultElement.appendChild(CreateNewElements('br', ''));
  resultElement.appendChild(CreateNewElements('p', '--------------------------------------------------'));
  resultElement.appendChild(CreateNewElements('br', ''));

  const total = calculateTotal(data);

  const totalPlusSurplus = Number(total) + Number(surplus);
  const newSurplus = totalPlusSurplus - Number(paid);

  let surplusElement = CreateNewElements('p', `Saldo passado: ${surplus}`);
  let totalElement = CreateNewElements('p', `Total: ${total} + ${surplus} = ${totalPlusSurplus}`);
  let newSurplusElemnt = CreateNewElements('p', `Saldo atual: ${Number(total) + Number(surplus)} - ${Number(paid)} = ${newSurplus}`);

  resultElement.appendChild(surplusElement);
  resultElement.appendChild(CreateNewElements('br', ''));
  resultElement.appendChild(totalElement);
  resultElement.appendChild(CreateNewElements('br', ''));
  resultElement.appendChild(newSurplusElemnt);

  resultElement.classList.add('result-background');
}