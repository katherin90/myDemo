const projectsData = [
    {
        title: 'Ukrainian Symbols',
        link: 'UkrainianSymbols/index.html',
        technologies: ['html', 'css', 'js', 'canvas'],
        imgs: ['img/project1/1.webp', 'img/project1/3.webp', 'img/project1/2.webp']
    },
    {
        title: 'Tiger',
        link: 'https://codepen.io/katherin90/full/wvqRQjE',
        technologies: ['html', 'css'],
        imgs: ['img/project2/1.webp', 'img/project2/2.webp', 'img/project2/3.webp']
    },
    {
        title: 'Minion',
        link: 'https://codepen.io/katherin90/full/gOMgwGp',
        technologies: ['html', 'css'],
        imgs: ['img/project3/1.webp', 'img/project3/2.webp']
    },
    {
        title: 'Seasons',
        link: 'https://codepen.io/katherin90/full/mdWdzgY',
        technologies: ['html', 'css', 'css animation'],
        imgs: ['img/project4/1.webp', 'img/project4/2.webp', 'img/project4/3.webp', 'img/project4/4.webp']
    },
    {
        title: 'bodo',
        link: 'https://www.bodo.ua/ua/',
        technologies: ['html', 'css', 'js (jquery)'],
        imgs: ['img/project5/1.webp', 'img/project5/2.webp', 'img/project5/3.webp', 'img/project5/4.webp', 'img/project5/5.webp', 'img/project5/6.webp','img/project5/7.webp']
    },
    {
        title: 'bodotravel',
        link: 'https://travel.bodo.ua/',
        technologies: ['html', 'css', 'js (jquery)'],
        imgs: ['img/project6/1.webp', 'img/project6/2.webp', 'img/project6/3.webp', 'img/project6/4.webp', 'img/project6/5.webp', 'img/project6/6.webp', 'img/project6/7.webp', 'img/project6/8.webp', 'img/project6/9.webp', 'img/project6/10.webp' ]
    },
    {
        title: 'bodocard',
        link: 'https://bodocard.ua/',
        technologies: ['html', 'css', 'js (jquery)'],
        imgs: ['img/project7/1.webp', 'img/project7/2.webp', 'img/project7/3.webp', 'img/project7/4.webp', 'img/project7/5.webp', 'img/project7/6.webp', 'img/project7/7.webp',]
    },
    {
        title: 'Happy New Year 2020',
        link: 'https://codepen.io/katherin90/full/oNgYyMG',
        technologies: ['html', 'css', 'css animation'],
        imgs: ['img/project8/1.webp', 'img/project8/2.webp', 'img/project8/3.webp']
    },
    {
        title: 'Cat',
        link: 'https://codepen.io/katherin90/full/jOEMpLB',
        technologies: ['html', 'css', 'css animation'],
        imgs: ['img/project9/1.webp', 'img/project9/2.webp', 'img/project9/3.webp']
    },
    {
        title: 'Whimsy games',
        link: 'https://whimsygames.co/',
        technologies: ['html', 'css', 'js'],
        imgs: ['img/project10/1.webp']
    },
]

class InfoPopup {
    constructor (){
        this.items = null;
        this.popup = document.querySelector('.js-info-popup')
        this.popupContent = this.popup.querySelector('.js-popup-content')
        this.template = this.popup.querySelector('.js-popup-content-template')
        this.closeBtn = this.popup.querySelector('.js-close-popup')
    }
    createTechnologiesItem = (text) => {
        let element = document.createElement('li')
        element.textContent = text 
        return element
    }
    showPopup = () => {
        this.popup.classList.add('show')
        document.body.classList.add('locked')
    }
    closePopup = () => {
        this.popup.classList.remove('show')
        document.body.classList.remove('locked')
    }
    addContent = (data) => {
        const {title, imgs, link, technologies} = data
        const clone = this.template.content.cloneNode(true)
        let headline = clone.querySelector('h3')
        let imagesContainer = clone.querySelector('.popup-imgs')
        let technologiesList = clone.querySelector('ul')
        let a = clone.querySelector('a')

        headline.textContent = title
        a.href = link
        technologies.forEach(technology=>{
            technologiesList.append(this.createTechnologiesItem(technology))
        })
        imgs.forEach(img=>{
            const tagImg = document.createElement('img')
            tagImg.src = img
            tagImg.classList = 'popup-img'
            imagesContainer.append(tagImg)
        })

        this.popupContent.innerHTML = ''
        this.popupContent.append(clone)
       
    }
    onClick = (e) => {
        const currentProject = e.currentTarget
        const dataIndex = currentProject.dataset.index
        const currentProjectData = projectsData[dataIndex]

        this.addContent(currentProjectData)
        this.showPopup()
    }
    events = () => {
        this.items.forEach(item=>item.addEventListener('click', this.onClick))
        this.closeBtn.addEventListener('click', this.closePopup)
        document.addEventListener('click', (e)=>{
            if(e.target === this.popup) {
                this.closePopup()
            }
        })
    }
    init = () => {
        this.items = document.querySelectorAll("[data-toggle]");
        this.events()
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    new InfoPopup().init()
})