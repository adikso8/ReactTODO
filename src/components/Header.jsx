function Header(props){
    return(
    <>
        <div className="header">
            <h2>React TODO LIST</h2>
            <button onClick={props.onCreatePost}>New Post</button>
        </div>
    </>
    );
}

export default Header;