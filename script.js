const projectsData = [
    {
        title: 'Ukrainian Symbols',
        link: 'UkrainianSymbols/index.html',
        technologies: ['html', 'css', 'js', 'canvas'],
        img: 'img/project-img1-big.webp'
    },
    {
        title: 'Tiger',
        link: 'https://codepen.io/katherin90/full/wvqRQjE',
        technologies: ['html', 'css'],
        img: 'img/project-img2-big.webp'
    },
    {
        title: 'Minion',
        link: 'https://codepen.io/katherin90/full/gOMgwGp',
        technologies: ['html', 'css'],
        img: 'img/project-img3-big.webp'
    },
    {
        title: 'Seasons',
        link: 'https://codepen.io/katherin90/full/mdWdzgY',
        technologies: ['html', 'css', 'css animation'],
        img: 'img/project-img4-big.webp'
    },
    {
        title: 'bodo',
        link: 'https://www.bodo.ua/ua/',
        technologies: ['html', 'css', 'js (jquery)'],
        img: 'img/project-img5-big.webp'
    },
    {
        title: 'bodotravel',
        link: 'https://travel.bodo.ua/',
        technologies: ['html', 'css', 'js (jquery)'],
        img: 'img/project-img6-big.webp'
    },
    {
        title: 'bodocard',
        link: 'https://bodocard.ua/',
        technologies: ['html', 'css', 'js (jquery)'],
        img: 'img/project-img7-big.webp'
    },
    {
        title: 'Happy New Year 2020',
        link: 'https://codepen.io/katherin90/full/oNgYyMG',
        technologies: ['html', 'css', 'css animation'],
        img: 'img/project-img8-big.webp'
    },
    {
        title: 'Cat',
        link: 'https://codepen.io/katherin90/full/jOEMpLB',
        technologies: ['html', 'css'],
        img: 'img/project-img9-big.webp'
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
        const {title, img, link, technologies} = data
        const clone = this.template.content.cloneNode(true)
        let headline = clone.querySelector('h3')
        let images = clone.querySelector('img')
        let technologiesList = clone.querySelector('ul')
        let a = clone.querySelector('a')

        headline.textContent = title
        images.src = img
        a.href = link
        technologies.forEach(technology=>{
            technologiesList.append(this.createTechnologiesItem(technology))
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