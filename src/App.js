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
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title,body)
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
        console.log(event.target.value);
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value) ;
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
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
    content = <Article title="??? Welcom to React world" body="- ?????????????????? ??????????????? ??????????????? ????????? ?????????????????? ?????????."></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <> 
      <li><a href={'/update'+id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type="button" value ="Delete" onClick={()=>{
        const newTopics = []
        for(let i=0; i<topics.length; i++){
          if(topics[i].id !==  id){
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME')
      }} /></li>
    </>
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
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      console.log(title, body);
      const newTopics =[...topics]
      const updatedTopic = {id:id, title:title, body:body}      
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i]= updatedTopic;
          break;
        }
      }
      setTopics(newTopics)
      setMode('READ');
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



      <Article title="??? Welcom to React world" body="- ?????????????????? ??????????????? ????????? ?????????????????? ?????????."></Article>
      <Article title="??? Thnx u" body="Congratuation for learning props, me."></Article>
      <p></p>
      <br></br>
      <br></br>
      <a href='https://www.youtube.com/watch?v=AoMv0SIjZL8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7'> ????????? ?????? ?????? ?????? </a>
      <br></br>
      ?????? ????????? ??????!!!! Redux??? PostcreSQL??? ????????????!!
      <br></br>
      <br></br>
      <h2>Memo</h2>
      <h4>?????????????????? ????????? ?????? ????????? ?????? ????????? ?????? ????????? ??????????????? ?????? ???????????? ??????????????? ????????????.</h4>
      <h4>????????? ?????? ?????? ????????? ?????? ?????? ??????????????? ????????? ??? ?????? ?????? ????????? ????????? ??????.</h4>
      <br></br>
      <h4>iframe ??????</h4>
      <iframe width="600" height="300" src="https://aboooks.tistory.com/205" name="test" frameborder="1" align="left"></iframe>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <h4>ol ??????(ordered list)??? ???????????? ????????? ??????.</h4>
      <ol>
        <li>??????</li>
        <li>??????</li>
        <li>??????</li>
      </ol>
      <br></br>
      <h4>ul(unordered) ????????? ???????????? ????????? ??????.</h4>
      <ul>
        <li>??????</li>
        <li>??????</li>
        <li>??????</li>
      </ul>
      <br></br>
      <h4>dl ??????(definition list)??? ???????????? ????????? ??????.</h4>
      <dl>
        <li>??????</li>
        <li>??????</li>
        <li>??????</li>
      </dl>




      <p></p>
      <p></p>


    </div>
  )
}
function Example() {
  //????????? state ????????? ????????????, count??? ??????????????????.
  const [count,setCount] = useState(0)

  return (
    <div>
      <p>you clicked {count} times</p>
        <button onClick={()=> setCount(count + 1)}>Click me</button>

    </div>
  )
}


export default App;
