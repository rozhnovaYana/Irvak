const bigImage=()=>{
    const imgPopup=document.createElement("div"),
    bigImg=document.createElement("img"),
    containerSection=document.querySelector(".works")
    containerSection.appendChild(imgPopup)
    imgPopup.classList.add("popup")
    imgPopup.classList.add("imgPopup")
    bigImg.classList.add("bigImg")
    imgPopup.appendChild(bigImg)
    containerSection.addEventListener("click",(e)=>{
        e.preventDefault()
        let target=e.target
        if(target&&target.classList.contains("preview")){
            imgPopup.style.display="flex"
            document.body.style.overflow="hidden"
            const src=target.parentNode.getAttribute('href')
            bigImg.setAttribute('src', src)
        }
        if(target&&target.classList.contains("popup")){
            imgPopup.style.display="none"
            document.body.style.overflow=""
        }
       
    })
}
export default bigImage