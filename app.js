const light=document.querySelector('.light')
const dark=document.querySelector('.dark')

// dark div moving animation
dark.onmousemove=(e)=>{
    const w=window.outerWidth
    const h=window.outerHeight
const x=e.clientX
const y=e.clientY
document.querySelector("h1").style.backgroundPosition = `${(x / w) * 100}%  ${
  (2*y / h) * 100
}%`;
}
// light div moving animation
light.onmousemove=(e)=>{
    const w=window.outerWidth
    const h=window.outerHeight
const x=e.clientX
const y=e.clientY
document.querySelector("h2").style.backgroundPosition = `${(x / w) * 100}%  ${
  (y / h) * 100
}%`;

}