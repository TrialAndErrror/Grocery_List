const filterColorSelectEl = document.querySelector('#color-filter')

function filterListItems() {
    const selectedOption = filterColorSelectEl.value
    const groceryEntries = document.querySelectorAll('#groceries-list li')
    function hideIfNotColor(e) {
        const importanceBlock = e.querySelector('span.importance-color')
        const elementColorValue = importanceBlock.dataset.value
        if (elementColorValue !== selectedOption) e.hidden = true
        else e.hidden = false
    }
    function showItems(j) {
        j.hidden = false
    }
    if (selectedOption !== "No Filter") groceryEntries.forEach(hideIfNotColor)
    else groceryEntries.forEach(showItems)
}

filterColorSelectEl.addEventListener('change', filterListItems)


