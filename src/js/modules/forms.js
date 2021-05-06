const forms=()=>{
    const allForms=document.querySelectorAll("form"),
    allInputs=document.querySelectorAll("input"),
    inputNumber=document.querySelectorAll("input[name='user_phone']")
    const massages={
        loading:"Загрузка...",
        done:"Ваши данные были успешно отправлены",
        failed:"Что-то пошло не так..."
    }
    inputNumber.forEach(item=>{
        item.addEventListener("input", ()=>{
            item.value=item.value.replace(/\D/, "")
        })
    })
    const formHandler=async (url, data)=>{
        document.querySelector(".status").textContent=massages.loading
        const res=await fetch(url, {
            method:"POST",
            body:data
        })
        return await res.text()
    }
    const clearInputs=()=>{
        allInputs.forEach(input=>{
            input.value=""
        })
    }
    allForms.forEach(form=>{
        form.addEventListener("submit", (e)=>{
            e.preventDefault()
            let statusMsg=document.createElement('div')
            form.appendChild(statusMsg)
            statusMsg.classList.add('status')
            const data=new FormData(form)
            formHandler("../../assets/server.php", data)
            .then(()=>{
                statusMsg.textContent=massages.done
            }).catch(()=>{
                statusMsg.textContent=massages.failed
            }).finally(()=>{
                clearInputs()
                setTimeout(()=>statusMsg.remove(), 5000)
            })
        })
    })
}
export default forms