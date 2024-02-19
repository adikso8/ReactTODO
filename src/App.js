import './App.css';
import PostList from './components/PostList';
import Header from './components/Header'
import {useState} from 'react';
function App() {

  const[isVisible, setIsVisible] = useState(true);

  function hideModalHandler(){
    setIsVisible(false);
  }

  function showModalHandler(){
    setIsVisible(true);
  }

  return (
    <div className='main'>
      
      <Header onCreatePost={showModalHandler}/>
      <PostList isPosting={isVisible} onStopPosting={hideModalHandler}/>
    </div>
  );
}

export default App;
