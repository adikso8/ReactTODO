function Post(props){
    return(
        <li>
        <div className={'post '+ props.status}>
          <p className='date'>{props.date}</p>
          <p className='text'>{props.text}</p>
        </div>
        </li>
    );

}

export default Post;