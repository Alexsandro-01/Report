const addButton = document.querySelector('#add');
addButton.addEventListener('click', CreateNewFormElement)

const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', ExtractData)


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
      price: price.value,
      total: quantity.value * price.value
    });
  });

  CreateResult(data);
}

function calculateTotal(data) {
  let result = 0;

  data.forEach(item => {
    result += item.total;
  })

  return result;
}


