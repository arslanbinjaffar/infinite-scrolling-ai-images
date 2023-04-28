import styled from 'styled-components'
import React, { KeyboardEvent, MouseEvent, useState } from 'react'

import buttonicon from './assets/button.svg'
import bgimg from './assets/layered-waves-haikei.svg'
import Images from './images/Images'
import { useFetch } from './hooks/useFetch'

const App = () => {
  const [userInstruction,setUserInstruction]=useState("")
  const {data,error,loading,handleSubmit}=useFetch();
  const handleClick = () => {
    handleSubmit(userInstruction);
    setUserInstruction("")

  };
  const handleKey=(e:KeyboardEvent<HTMLButtonElement>)=>{
    console.log("pesss");   
    if(e.key==="Enter"){
      handleSubmit(userInstruction)
      setUserInstruction("")
    }
  }  

  if(loading){
    <>
    <h1>loading ...</h1>
    </>
  }
  if(data){
    localStorage.setItem('images',JSON.stringify(data))
  }

  return (
    <>
      {/* {!error && <Images data={data}/>}
      <Wrapper>
        <img src={bgimg} alt="bg image" className='bg-img'/>     
        <header><h1>ai image generator</h1></header>
        <section>
          <div className='input-container'>
            <input type="text" title='generator a image' placeholder='generator ai image' value={userInstruction} onChange={(e)=>setUserInstruction(e.target.value)}/>
            <button type='button' onClick={handleClick} onKeyDown={handleKey}>
              <img src={buttonicon} alt="button svg icon" />
            </button>
          </div>
        </section>
      </Wrapper> */}
    </>
  )
}

const Wrapper=styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-direction: column;
  color: #fff;
  width: 100%;
  .bg-img{
    position: absolute;
    bottom:-20%;
    left: 0;
    z-index: -20;
    object-fit: contain;
    filter: saturate(100%);
    transition: all 0.4s;
    &:hover{
      transform:scale(1.1);
    }
  }
  header{
    h1{
      font-size: 70px;
      font-weight: 600;
      margin-bottom: 40px;
    }
  }
  section{
    width: 100%;
    margin: 0 auto;
    .input-container{
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 650px;
      width: 100%;
      background-color: rgba(255,255,255,1);
      border-radius: 5px;
      input{
        width: 100%;
        height: 50px;
        outline: none;
        border: none;
        padding: 15px;
        box-shadow: 0 5px 10px 5px rgba(0,0,0,.4);
        background: transparent;
        &::placeholder{
          font-size: 18px;
          font-weight: 500;
        }
      }
      button{
        align-self: stretch;
        outline: none;
        border: none;
        padding: 5px;
        width:50px;
        background-color: wheat;
        font-size: 20px;
        font-weight: 500;
        border-radius: 5px;
        cursor: pointer;
      }
      
    } 
  }
`
export default App