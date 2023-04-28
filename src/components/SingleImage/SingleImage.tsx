import React, { FC, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
interface SinglePRops{
    data:[]
}
const SingleImage:FC<SinglePRops> = ({data}) => {
    const {id}=useParams()
    const singleImages=data.find((item)=>item.id===id) 
    const [show,setShow]=useState(false)
    if (!singleImages) {
        return <div>No image found for ID {id}</div>
      }    
    const {id:ID,smallImage,bigImage,prompt,prompt_full,created_at,score,time,aspect}=singleImages;
    
  return (
    <>
        {singleImages &&
    <Wrapper>
        <figure>
        <img src={bigImage} alt={prompt} />
        {!bigImage &&<img src={smallImage} alt={prompt_full} />}
        </figure>
            <div className="content">
                {/* <p><span>ID:</span>{ID}</p> */}
                {prompt &&  <p className='name'>
                <span>Name: </span>
                    {show ? prompt : `${prompt.substring(0, 50)}...`}
                    <span onClick={()=>setShow(!show)} className='show-detail'>{show?"hide":"show"}</span>
                </p>
                    }
              <hr />
                <p><span>AspectRatio: </span>{aspect}</p>
              <hr />

                <p><span>Created: </span>{created_at.substring(0,10)}</p>
              <hr />

                {score && <p><span>Score: </span>{score}</p>}
              {score && <hr />}
                <p><span>time: </span>{time.substring(0,19)}</p>
                <hr />
            {!prompt&&<h6>{prompt_full}</h6>}
            <Link to="/">Home</Link>
            </div>

            </Wrapper>
        }
        </>
  )
}
const Wrapper=styled.section`
   display: flex;
   margin: 40px;
   align-items: center;
            img{
                width: 640px;
                height: 640px;
                display: block;
                object-fit: contain;
            }
        .content{
            display: flex;
            flex-direction: column;
            p{
                font-size: 18px;
                font-weight: 500;
                margin-bottom:10px;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                text-transform:capitalize;
            }
            span{
               color:brown;
               font-size: 25px;
               font-weight: 600;
               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .name{
                .show-detail{
                    cursor: pointer;
                    display: none;
                    font-size: 18px !important;
                    color: saddlebrown;
                    transition: all 0.5s;
                }
                &:hover{
                    .show-detail{
                        display: block;
                    }
                }
            }
        }

`
export default SingleImage