import { monsters } from './monsters.js'

// console.log(monsters)

/* 
    <div class="monster">
        <img src="https://robohash.org/6?set=set2" alt="Kazi Ariyan" />
        <p class="name">Kazi Ariyan</p>
        <p class="email">info@easylearningbd.com</p>
    </div>

    <div class="p-5 not-found" style="display: none">
        <span>404</span>
        <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
    </div> 
*/

function showMonster(monsterDiv) {
    const monster = document.createElement('div')
    monster.className = 'monster'

    const img = document.createElement('img')
    img.src = `https://robohash.org/${monsterDiv.id}?set=set2`
    img.alt = monsterDiv.name

    const mName = document.createElement('p')
    mName.className = 'name'
    mName.innerText = monsterDiv.name

    const email = document.createElement('p')
    email.className = 'email'
    email.innerText = monsterDiv.email

    monster.append(img, mName, email)
    // console.log(monster)

    document.querySelector('.monsters').append(monster)
}

function notFound() {
    const notFoundDiv = document.createElement('div')
    notFoundDiv.className = 'p-5 not-found'
    notFoundDiv.style.display = 'none'

    const span = document.createElement('span')
    span.innerText = '404'

    const h1 = document.createElement('h1')
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️'

    notFoundDiv.append(span, h1)
    // console.log(notFoundDiv)

    document.querySelector('.monsters').append(notFoundDiv)

}

for (let monsterDiv of monsters) {
    showMonster(monsterDiv)
}

notFound()

document.querySelector('#search-monster').addEventListener('keyup', function (e) {
    e.preventDefault()
    const keyword = e.target.value.toLowerCase()
    console.log(keyword)

    const findMonster = document.querySelectorAll('.monster')

    let notFound = true

    for (let monster of findMonster) {
        // console.log(monster.children)

        const name = monster.children[1].innerText.toLowerCase()

        const email = monster.children[2].innerText.toLowerCase()

        // console.log(name, email)

        if (name.includes(keyword) || email.includes(keyword)) {
            // console.log('done')
            monster.style.display = 'block'
            notFound = false
        } else {
            monster.style.display = 'none'
        }
    }

    if (notFound) {
        document.querySelector('.not-found').style.display = 'block'
    } else {
        document.querySelector('.not-found').style.display = 'none'
    }
})




