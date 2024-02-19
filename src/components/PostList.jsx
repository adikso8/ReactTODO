import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import {useState} from 'react';
function PostList(props){
  const [posts,setPosts] =useState([]);

  function addPostHandler(postData){
    setPosts((exPosts)=>[postData,...exPosts]);
  }
    return(
      <>
      {
        props.isPosting?<Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onPosting={addPostHandler}/>
        </Modal> : null
      }

        <ul className='list'>
        {posts.length!==0 ? posts.map((post)=><Post key={post.content} date={post.createdAt} text={post.content} status={post.status}/>)
        :<p>Brak Zadań!</p>}
        </ul>
      </>
    );

}

export default PostList;