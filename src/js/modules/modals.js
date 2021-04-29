const modals = () => {
    const modalHandler = (modalSelector, closeSelector, targetSelector) => {
        const modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector),
            target = document.querySelectorAll(targetSelector);
        target.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                modal.style.display = "block"
                document.body.style.overflow = "hidden"
                
            })

        })
        close.addEventListener("click", ()=> {
                modal.style.display = "none"
                document.body.style.overflow = ""
        })
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none"
                document.body.style.overflow = ""
            }
        })
    }
    const showModal = (modalSelector) => {
        document.querySelector(modalSelector).style.display = "block"
        document.body.style.overflow = ""
    }
    modalHandler(".popup_engineer", '.popup_close', ".popup_engineer_btn")
    modalHandler(".popup", '.popup_close', ".phone_link")
    // setTimeout(() => {
    //     showModal(".popup")
    // }, 6000)
}
export default modals