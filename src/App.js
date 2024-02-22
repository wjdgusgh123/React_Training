import logo from './logo.svg';
import './App.css'; //css 파일 경로
import { useState } from 'react';

//JSX: js파일에서 쓰는 html 대용품

//JSX 문법 1. class 넣을 땐 className
//JSX 문법 2. 변수 넣을 땐 {중괄호}
//JSX 문법 3. style 넣을 땐 style = {{스타일명 : '값'}}

function App() {

  let post = '역삼 우동 맛집';
  //document.querySelector('h4').innerHTML = post; //변수에 있던 자료를 html에 넣고 싶을 때 사용

  //Destructuring(구조 분해)문법
  //let [Destructuring1,Destructuring2] = [1,2];

  //State 제작 - 0번: 보관했던 자료. 1번: state 보관을 도와주는 함수
  //State를 쓰는 이유: 일반 변수는 갑자기 변경 시 html에 자동으로 변환 x. state는 변경되면 state를 쓰던 html은 자동으로 렌더링.
  //기존state와 신규state가 같으면 변경 해주지 않음
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']); 
  let [따봉, 따봉변경] = useState(0); 

  //return() 안에는 병렬로 태그 2개 이상 기입 금지(<div> className = "App" </div> 밖에 태그 기입 금지)
  return (
    <div className="App">
      <div className = "black-nav">  
        <h4 style={{color : 'white', fontSize : '16px'}}>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={() =>{
        let sort = [...글제목];
        sort.sort();
        글제목변경(sort);
      }}>
        가나다라순 정렬
      </button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <Sample></Sample>

      <Modal></Modal>
      
    </div>
  );
}

//컴포넌트 제작
//단점: state를 가져다 쓸때 문제가 생김. A함수의 변수는 B함수가 쓸 수 없음.
function Modal(){ 
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function Sample(){
  let 글제목2= '운동 추천';
  let [따봉2, 따봉변경2] = useState(0);

    return(  
        <div className="list">
            <h4>{글제목2} <span onClick={()=>{ 따봉변경2(따봉2+1) }}>👍</span> {따봉2} </h4>
            <p>2월 17일 발행</p>
        </div>  
    )
}

export default App;
