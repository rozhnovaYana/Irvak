const inputForNum=(elem)=>{
    elem.forEach(item=>{
        item.addEventListener("input", ()=>{
            item.value=item.value.replace(/\D/, "")
        })
    })
}
export default inputForNum;