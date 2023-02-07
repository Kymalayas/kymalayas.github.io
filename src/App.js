import React from 'react'
import './App.css';

function Header(props){
  console.log('props',props,props.title)
  return <header>
    <h2><a href="/">{props.title}</a></h2>
  </header>
}
function Nav(props){
  const lis =[]
  for(let i=0; i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li>{t.title}</li>)
    console.log(props.topics[i])
  }   
  return  <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  console.log(props,'props',props.title)
  return  <article>
    <h3>{props.title}</h3>
    {props.body}
  </article>
}
function App()  {
  const topics = [
    {id : 1, title : 'html', body :'html is ...'},
    {id : 1, title : 'css', body :'css is ...'},
    {id : 1, title : 'js', body :'js is ...'}
  ]
  return (
    <div>
      <Header title="#1. REACT 컴포넌트 만들기"></Header>
      <Nav topics={topics}></Nav>
      <Article title="☆ Welcom to React world" body="- 리액트에서는 사용자정의 사용자정의 태그를 컴포넌트라고 부른다."></Article>
      <Article title="☆ Thnx u" body="Congratuation for learning props, me."></Article>
      <p></p>
      <br></br>
      <a href='https://www.youtube.com/watch?v=t9e3hMJ_s-c'> https://www.youtube.com/watch?v=t9e3hMJ_s-c ← 요기 할 차례 </a>
    </div>
  )
}

export default App;