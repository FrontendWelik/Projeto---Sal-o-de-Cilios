

const myObserver = new IntersectionObserver( (entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))


VanillaTilt.init(document.querySelector(".div2"), {
		max: 35,
		speed: 2800,
	});