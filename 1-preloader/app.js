const wait = (sec)=>{
    return new Promise(resolve=>{
      setTimeout(resolve,sec*1000)  
    })
}
const container = document.querySelector('.container')
const preloader = document.querySelector('.preloader')

wait(5).then(()=>{
  preloader.style.display = 'none'
  container.style.opacity = 1
})