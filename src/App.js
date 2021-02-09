import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import Box from './components/Box';
import posts from './data';
import Footer from './components/Footer';

const allTopics = ['All',... new Set(posts.map((post)=> post.topic))];

function App() {
  const [listPosts,setListPosts] = useState(posts);
  const [topics, setTopics] = useState(allTopics);

  const filterTopics = (topic)=>{
    if (topic === 'All') {
      setListPosts(posts);
      return;
    }
    const newPosts = posts.filter((post)=>
      post.topic === topic)
      setListPosts(newPosts)
    };

  return (
    <main>
      <Navbar/>
      <section className="grid">
        <Sidebar/>
        <div className="container">
          <Menu topics={topics} filterTopics={filterTopics}/>
          <Box posts={listPosts}/>
        </div>
      </section>
      <Footer/>
    </main>

  );
}

export default App;
