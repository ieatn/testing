const btn = document.querySelector('#btn')
const output = document.querySelector('.output')
const url = 'clothes/shirt.json'
btn.addEventListener('click', reqData)

function reqData() {
    fetch(url)
        .then(res => res.json())
        .then(data => add(data))
        .catch((error) => {
            console.log(error)
        })
}
function add(data) {
    console.log(data)
    const ul = document.createElement('ul')
    output.append(ul)
    data.forEach((e, i) => {
        console.log(e)
        const li = document.createElement('li')
        li.textContent = `${i+1}. ${e.shirt} ${e.color}`;
        const img = document.createElement('img')
        img.src = `${e.image}`
        li.append(img)
        ul.append(li);
    })
}


