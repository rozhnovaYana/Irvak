const modals = () => {
    const modalHandler = (modalSelector, closeSelector, targetSelector, closeClickOverlay=true) => {
        const modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector),
            target = document.querySelectorAll(targetSelector),
            windows=document.querySelectorAll("[data-modal]")
        target.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                windows.forEach(i=>i.style.display="none")
                modal.style.display = "block"
                document.body.style.overflow = "hidden"
                
            })

        })
        close.addEventListener("click", ()=> {
            windows.forEach(i=>i.style.display="none")
                modal.style.display = "none"
                document.body.style.overflow = ""
        })
        modal.addEventListener("click", (e) => {
            if (e.target === modal&&closeClickOverlay) {
                windows.forEach(i=>i.style.display="none")
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
    modalHandler(".popup_calc", ".popup_calc_close", ".popup_calc_btn")
    modalHandler(".popup_calc_profile", ".popup_calc_profile_close",".popup_calc_button", false)
    modalHandler(".popup_calc_end", ".popup_calc_end_close",".popup_calc_profile_button", false)
    // setTimeout(() => {
    //     showModal(".popup")
    // }, 6000)
}
export default modals