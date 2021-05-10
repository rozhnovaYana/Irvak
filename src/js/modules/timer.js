const timer=(id, deadline)=>{
    const addZero=(num)=>{
        if(num<10){
            return "0"+num
        }else{
            return num
        }
    }
    const getTimeRemainder=(endtime)=>{
        const totalTime=new Date(endtime)-new Date(),
        seconds=Math.floor((totalTime/1000)%60),
        minutes=Math.floor((totalTime/1000/60)%60),
        hours=Math.floor((totalTime/1000/60/60)%24),
        days=Math.floor(totalTime/1000/60/60/24)
        console.log(new Date(endtime))
        return{
            "seconds":seconds,
            "minutes":minutes,
            "hours":hours,
            "days":days,
            "total":totalTime
        }
    }
    const timerHandler=(selector, endtime)=>{
        const timer=document.querySelector(selector),
        seconds=timer.querySelector("#seconds"),
        minutes=timer.querySelector("#minutes"),
        hours=timer.querySelector("#hours"),
        days=timer.querySelector("#days"),
        timerInterval=setInterval(updateTime, 1000)
        updateTime()
        function updateTime(){
            const t=getTimeRemainder(endtime)
            seconds.textContent=addZero(t.seconds)
            minutes.textContent=addZero(t.minutes)
            hours.textContent=addZero(t.hours)
            days.textContent=addZero(t.days )
            if(t.total<=0){
                seconds.textContent="00"
                minutes.textContent="00"
                hours.textContent="00"
                days.textContent="00"
                clearInterval(timerInterval)
            }
        }
       

    }
    timerHandler(id, deadline)
    

}
export default timer;