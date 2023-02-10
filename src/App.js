import React from 'react' ;
import './App.css';
import {useState} from 'react' ; 


function Article(props){
  console.log(props,'props',props.title)
  return  <article>
    <h3>{props.title}</h3>
    {props.body}
  </article>
}
function Header(props){
  console.log('props',props,props.title)
  return <header>
    <h2><a href="/" onclick={(event)=>{
      event.preventDefault();
      props.onchangemode();      
    }}>{props.title}</a></h2>
  </header>
}
function Nav(props){
  const lis =[]
  for(let i=0; i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id)) ; 
      }}>{t.title}</a>
    </li>)
    console.log(props.topics[i])
  }   
  return  <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title,body)
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
function Update(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title,body)
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
function App(){
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // console.log('_mode', _mode) ;
  const [mode, setMode] = useState('WELCOME') ;
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id : 1, title : 'html', body :'html is ...'},
    {id : 2, title : 'css', body :'css is ...'},
    {id : 3, title : 'javascript', body :'javascript is ...'}
  ]);
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME'){
    content = <Article title="☆ Welcom to React world" body="- 리액트에서는 사용자정의 사용자정의 태그를 컴포넌트라고 부른다."></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <li><a href={'/update'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode ==='UPDATE'){
    content = <Update onUpdate= {(title, body)=>{

    }}></Update>
  }
  return (
    <div>
      <Header title="#1. Creating react component!!!!" onChangeMode={()=>{
        setMode('WELCOME') ;
      }}></Header>
      <Nav topics={topics}onChangeMode={(_id)=>{
        setMode('READ') ;
        setId(_id)
      }}></Nav>     
      <p></p>
      {content}
      <ul>
        <li><a href="/create" onClick={event=>{
          event.preventDefault();
          setMode('CREATE');          
        }}>Create</a></li>
        {contextControl}       
      </ul>







      <Article title="☆ Welcom to React world" body="- 리액트에서는 사용자정의 태그를 컴포넌트라고 부른다."></Article>
      <Article title="☆ Thnx u" body="Congratuation for learning props, me."></Article>
      <p></p>
      <br></br>
      <br></br>
      <a href='https://www.youtube.com/watch?v=bW_WOrYzVWw'> 9강 ← 6분 45초 볼 차례 </a>
      <br></br>
      강의는 105행, 내 코드는 113행을 보면 된다.
    </div>
  )
}

export default App;