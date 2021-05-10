import "./slider"
import modals from "./modules/modals"
import tabs from "./modules/tabs"
import forms from "./modules/forms"
import calcHandler from "./modules/calcHandler"
import timer from "./modules/timer"
window.addEventListener("DOMContentLoaded", () => {
    let calcState={},
    deadline=("2021-05-12")
    modals()
    tabs(".glazing_slider", '.glazing_block',".glazing_content","active")
    tabs(".decoration_slider", '.no_click',".decoration_content>div>div","after_click")
    tabs(".balcon_icons", ".balcon_icons_img",".big_img>img", "do_image_more", "inline")
    forms(calcState)
    calcHandler(calcState)
    timer(".container1", deadline)
})