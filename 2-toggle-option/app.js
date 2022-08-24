const toggle = document.querySelector('#toggle')

toggle.addEventListener('click',(e)=>{
    const diactive = e.target.closest("div[class=toggle-btn]")
    if(!diactive) return
    const active = toggle.querySelector('.active')
    active.classList.remove('active')
    diactive.classList.add('active')
    const darkColor = getComputedStyle(document.documentElement).getPropertyValue('--dark')
    const lightColor = getComputedStyle(document.documentElement).getPropertyValue('--light')
    document.documentElement.style.setProperty('--dark', lightColor);
    document.documentElement.style.setProperty('--light', darkColor);
})