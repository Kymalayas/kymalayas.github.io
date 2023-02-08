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
function App(){
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // console.log('_mode', _mode) ;
  const [mode, setMode] = useState('WELCOME') ;
  const [id, setId] = useState(null);
  const topics = [
    {id : 1, title : 'html', body :'html is ...'},
    {id : 2, title : 'css', body :'css is ...'},
    {id : 3, title : 'javascript', body :'js is ...'}
  ]
  let content = null;
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
      <Article title="☆ Welcom to React world" body="- 리액트에서는 사용자정의 사용자정의 태그를 컴포넌트라고 부른다."></Article>
      <Article title="☆ Thnx u" body="Congratuation for learning props, me."></Article>
      <p></p>
      <br></br>
      <br></br>
      <a href='https://youtu.be/kctNCMFxciQ'> https://youtu.be/kctNCMFxciQ ← 요기 할 차례 </a>
    </div>
  )
}

export default App;