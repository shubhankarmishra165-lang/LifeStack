import './home.css'
import { useState,useEffect } from 'react'
const Home =()=>{
    const [isLoading,setisLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setisLoading(false) 
        },2000)
    },[])
    if(isLoading){
        return (
        <div className='home'>
            <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp" type="image/webp"/>
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.gif" alt="🌍" width="60" height="60"/>
        </picture>
        </div>
        )

    }
    return(
        <div className='home'>
            <div className='hii-page'>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Waving Hand" width="85" height="85" className='hii' />
            <p className='page'>User</p>
            </div>
        <h1 className='head'>LifeStack Provids -</h1>
       <div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=900&size=35&duration=4000&pause=1000&center=true&vCenter=true&width=700&height=40&color=818CF8&lines=+Your+Personal+Life+Manager;Secure+Passwords+%7C+Smart+Notes;Track+Expenses+%26+Events;All-in-One+Productivity+App" />
</div>
</div>
    )
}
export default Home