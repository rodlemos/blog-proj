import React from 'react'
import { GrArticle } from 'react-icons/gr'
import { FcMoneyTransfer } from 'react-icons/fc'
import { FcIdea } from 'react-icons/fc'
import { FcGlobe } from 'react-icons/fc'
import posts from '../data';

const Counters = () => {
    const topics = posts.map(post=> post.topic);
    console.log(topics)

    function topicCount(topic) {
        return topics.reduce((total, curTopic)=> {
            return curTopic === topic ? total + 1 : total;
        },0)
    }

    return (
        <div className="counters-box">
            <h4><GrArticle/> Posts: <span>{topics.length}</span></h4>
            <h4><FcMoneyTransfer/> Topic1: <span>{topicCount('topic1')}</span></h4>
            <h4><FcIdea/> Topic2: <span>{topicCount('topic2')}</span></h4>
            <h4><FcGlobe/> Topic3: <span>{topicCount('topic3')}</span></h4>
        </div>
    )
}

export default Counters
