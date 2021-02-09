import React from 'react'

const Menu = ({topics,filterTopics}) => {

    return (
        <div className="menu">
            {topics.map((topic,index)=> {
                return (
                    <button
                        type="button" 
                        className="dark-box"
                        key={index}
                        onClick={()=> {filterTopics(topic)}}                 
                    >
                        {topic}
                    </button>
                )
            })}
        </div>
    )
}

export default Menu
