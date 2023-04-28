import styled from 'styled-components'
import { FC, useEffect } from 'react'

interface ImagesProps{
    data?:[
        {url:string}
    ]
}

const Images:FC<ImagesProps> = ({data}) => {
  // let newArr;
  // if(data){
  //   newArr=[...data,data]
  // }
  // newArr?.flat();
  
  return (
    <Wrapper>
        {data?.map(({url}:any,indx)=>{
            return(
      <div key={indx}>
        <img src={url} alt="images url" />
      </div>
            )
        })}
    </Wrapper>
  )
}
const Wrapper=styled.section`
   margin-bottom: 10px;
   display: grid;
   grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
   grid-gap: 20px;
   width: 100%;
   div{
       display: block;
    width: 100%;
    height: 100%;
    img{
       border-radius: 5px;
        display: block;
        object-fit: contain;
        width: 100%;
        height:100%;
    }
   }
`
export default Images