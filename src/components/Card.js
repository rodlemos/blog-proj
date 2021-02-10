import React from 'react'
import Counters from './Counters'

const card = () => {
    return (
        <article className="card">
            <div className="card-container">
                <div className="profile">
                    <div className="photo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3akDaR0_yofxy_VWNgdwmZTnBv1MGJDS-Uw&usqp=CAU" alt="just a person"/></div>
                    <div>
                        <h3>Name</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="status">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis, deserunt, porro tempora, sapiente vel ipsa cupiditate explicabo provident tempore praesentium. Atque commodi in impedit?</p>
                </div>
            <Counters/>       
            </div>
        </article>
    )
}

export default card
