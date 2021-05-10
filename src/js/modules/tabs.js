const tabs = (tabsWrapperSelector, tabsSelector, contentSelector, activeClass, display="block") => {
    const tabsWrapper = document.querySelector(tabsWrapperSelector),
        content = document.querySelectorAll(contentSelector),
        tabs = document.querySelectorAll(tabsSelector);
    const hideContent = () => {
       content.forEach(item => item.style.display = "none")
       tabs.forEach(item => item.classList.remove(activeClass))
    }
    const showContent = (i=0) => {
        content[i].style.display = display
        tabs[i].classList.add(activeClass)
    }
    hideContent()
    showContent(0)
    
    tabsWrapper.addEventListener('click', (e) => {
        const target = e.target
        if (target && (
            target.classList.contains(tabsSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))
            )){
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideContent()
                    showContent(i)
                }
            })
        }
    })
}
export default tabs