import inputForNum from "./inputForNum"
const calcHandler=(state)=>{
    const windowForm=document.querySelectorAll(".balcon_icons_img"),
    width=document.querySelectorAll("#width"),
    height=document.querySelectorAll("#height"),
    viewType=document.querySelectorAll("#view_type"),
    cheсkbox=document.querySelectorAll(".checkbox")
    inputForNum(width)
    inputForNum(height)

    const calcHandlerBind=(event, elem, prop)=>{
        elem.forEach((item, i)=>{
            item.addEventListener(event,()=>{
                switch(event){
                    case "click":
                        state[prop]=i
                        break
                    case "change":
                    case "input":
                        if(prop==="cheсkbox"){
                            elem.forEach((item, j)=>{
                                item.checked=false
                                if(i==j){
                                    item.checked=true 
                                }
                            })
                            i==0?state[prop]="Холодное":state[prop]="Теплое"
                       
                        }else{
                            state[prop]=item.value
                            break
                        }  
                    }
                })
                
            })
           
    }
    calcHandlerBind("click",windowForm, "form")
    calcHandlerBind("input",width, "width")
    calcHandlerBind("input",height, "height")
    calcHandlerBind("change",viewType, "type")
    calcHandlerBind("change",cheсkbox, "cheсkbox")


}
export default calcHandler;