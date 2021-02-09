import React from 'react'

const Box = ({posts}) => {
    return (
        <div>
            {posts.map((post)=> {
                const {id,image,title,text,topic} = post;
                return (
                    <article className="box">
                    <div className="img"><img src={image} alt={title}/></div>
                    <div className="content">
                        <div className="title">
                            <h2>{title}</h2>
                            <div className="line"></div>
                        </div>
                        <p>{text}</p>
                        <footer>
                            <span>Topic: {topic}</span>
                            <button className="color-btn">Read all</button>                    
                        </footer>
                    </div>
                    </article>
                )
            })}
         </div>        
    );
}

export default Box
