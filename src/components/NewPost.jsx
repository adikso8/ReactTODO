import {useState} from 'react';
import classes from './NewPost.module.css';
function NewPost(props){
  const [date,setDate]=useState('');
  const [Text,setText]=useState('');

  function submitHandler(event){
    event.preventDefault();
    const postData ={
      createdAt: date,
      content: Text,
      status: 'new'
    };
    console.log(postData);
    props.onPosting(postData);
    props.onCancel();
  }
  function dateHandler(event){
    setDate(event.target.value);
  }

  function textHandler(event){
    setText(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={textHandler} />
      </p>
      
      <p>
        <label htmlFor="date">Your name</label>
        <input type="date" id="date" required onChange={dateHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
