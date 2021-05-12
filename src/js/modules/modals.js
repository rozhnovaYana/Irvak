const modals = () => {
    const modalHandler = (modalSelector, closeSelector, targetSelector, closeClickOverlay=true) => {
        const modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector),
            target = document.querySelectorAll(targetSelector),
            windows=document.querySelectorAll("[data-modal]"),
            scroll=scroolWidth()
            
        target.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                windows.forEach(i=>i.style.display="none")
                modal.style.display = "block"
                document.body.style.overflow = "hidden"
                document.body.style.marginRight=`${scroll}px`
                
            })

        })
        close.addEventListener("click", ()=> {
            windows.forEach(i=>i.style.display="none")
                modal.style.display = "none"
                document.body.style.overflow = ""
                document.body.style.marginRight=`0px`
        })
        modal.addEventListener("click", (e) => {
            if (e.target === modal&&closeClickOverlay) {
                windows.forEach(i=>i.style.display="none")
                modal.style.display = "none"
                document.body.style.overflow = ""
                document.body.style.marginRight=`0px`
            }
        })
    }

    const scroolWidth=()=>{
        let div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth
    }
    modalHandler(".popup_engineer", '.popup_close', ".popup_engineer_btn")
    modalHandler(".popup", '.popup_close', ".phone_link")
    modalHandler(".popup_calc", ".popup_calc_close", ".popup_calc_btn")
    modalHandler(".popup_calc_profile", ".popup_calc_profile_close",".popup_calc_button", false)
    modalHandler(".popup_calc_end", ".popup_calc_end_close",".popup_calc_profile_button", false)

}
export default modals