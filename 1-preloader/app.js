const wait = (sec)=>{
    return new Promise(resolve=>{
      setTimeout(resolve,sec*1000)  
    })
}
const container = document.querySelector('.container')
const preloader = document.querySelector('.preloader')