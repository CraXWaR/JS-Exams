window.addEventListener("load", solve);

function solve() {
  const input = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  }
  const btns = {
    btnPublish: document.getElementById('publish')
  }
  btns.btnPublish.addEventListener('click', onPublish)

  function onPublish(e) {
    e.preventDefault();

    let makeCar = input.make.value;
    let modelCar = input.model.value;
    let yearCar = input.year.value;
    let fuelCar = input.fuel.value;
    let originalCostCar = input.originalCost.value;
    let sellingPriceCar = input.sellingPrice.value;

    if (makeCar == "" || modelCar == "" || yearCar == "" || fuelCar == "" || originalCostCar == "" || sellingPriceCar == "") {
      return;
    }
    if (originalCostCar > sellingPriceCar) {
      return;
    }
    const tbody = document.getElementById('table-body')

    let tr = document.createElement('tr')
    tr.classList.add("row")

    let tdMake = document.createElement('td')
    tdMake.textContent = makeCar

    let tdModel = document.createElement('td')
    tdModel.textContent = modelCar

    let tdYear = document.createElement('td')
    tdYear.textContent = yearCar

    let tdFuel = document.createElement('td')
    tdFuel.textContent = fuelCar

    let tdOriginalCostPrice = document.createElement('td')
    tdOriginalCostPrice.textContent = originalCostCar

    let tdSellingPrice = document.createElement('td')
    tdSellingPrice.textContent = sellingPriceCar

    let tdBtns = document.createElement('td')

    let btnEdit = document.createElement('button')
    btnEdit.classList.add("action-btn")
    btnEdit.classList.add("edit")
    btnEdit.textContent = 'Edit'
    btnEdit.addEventListener('click', onEdit)

    let btnSell = document.createElement('button')
    btnSell.classList.add("action-btn")
    btnSell.classList.add("sell")
    btnSell.textContent = 'Sell'
    btnSell.addEventListener('click', onSell)

    tdBtns.appendChild(btnEdit)
    tdBtns.appendChild(btnSell)

    tr.appendChild(tdMake)
    tr.appendChild(tdModel)
    tr.appendChild(tdYear)
    tr.appendChild(tdFuel)
    tr.appendChild(tdOriginalCostPrice)
    tr.appendChild(tdSellingPrice)
    tr.appendChild(tdBtns)

    tbody.appendChild(tr)

    input.make.value = ''
    input.model.value = ''
    input.year.value = ''
    input.fuel.value = ''
    input.originalCost.value = ''
    input.sellingPrice.value = ''

    function onEdit(e) {
      //e.currentTarget.btnEdit
      input.make.value = makeCar
      input.model.value = modelCar
      input.year.value = yearCar
      input.fuel.value = fuelCar
      input.originalCost.value = originalCostCar
      input.sellingPrice.value = sellingPriceCar

      tr.remove()
    }
    function onSell(e) {
      //e.currentTarget.btnSell
      const carList = document.getElementById("cars-list")
      let profit = document.getElementById("profit")

      let diff = Number(sellingPriceCar) - Number(originalCostCar)

      let profitSum = Number(profit.textContent)
      profitSum += diff
      profit.textContent = `${profitSum.toFixed(2)}`

      let liElement = document.createElement('li')
      liElement.classList.add("each-list")

      let spanModelCar = document.createElement('span')
      spanModelCar.textContent = `${makeCar} ${modelCar}`

      let spanYear = document.createElement('span')
      spanYear.textContent = `${yearCar}`

      let spanDiff = document.createElement('span')
      spanDiff.textContent = `${diff}`

      liElement.appendChild(spanModelCar)
      liElement.appendChild(spanYear)
      liElement.appendChild(spanDiff)

      carList.appendChild(liElement)

      tr.remove()
    }
  }
}
