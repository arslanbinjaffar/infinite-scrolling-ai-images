import  {useState, memo, FC } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface IMagesProps{
  data:[]
  loading:boolean
}
const AiImages:FC<IMagesProps> = ({data,loading}) => {
  const [indx, setIndx] = useState(5);

  const fetchMoreData = () => {
    setIndx(indx + 2);
  };
  if(loading){
    <>
    <Skeleton count={5}/>
    </>
  }
  return (
    <InfiniteScroll
    dataLength={indx}
    next={fetchMoreData}
    hasMore={true}
    loader={<Skeleton count={5} />}
    endMessage={<p>You have reached the end!</p>}
    >
        <Wrapper>
        {data.slice(0, indx).map((item,indx) => {
          return (
            <Link to={`${item.id}`}  className="container" key={item.id |indx }>
              <figure>
                <img src={item.bigImage} alt="images" />
                {item.prompt && <span className="img-caption">{item.prompt.substring(0,20)}</span>}
              </figure>
            </Link>
          );
        })}
        </Wrapper>
      </InfiniteScroll>
  );
};

export default memo(AiImages);

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  .container {
    transition: all 0.4s;
    position: relative;
    figure{
      display: block;
      &::after {
  content: "";
  display: inline-block;
  padding-bottom: 100%;}
    &:hover {
      cursor: pointer;
      img {
        filter: brightness(50%);
      }
      .img-caption {
        display: block;
      }
    }
    img {
      display: block;
  width: 100%;
  /* height: auto; */
  border-radius: 10px;
  object-fit: cover;
  position: relative;
    }
  }

    .img-caption {
      display: none;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 25px;
      font-weight: 700;
      padding: 20px;
      color: #fff;
      z-index: 999;
      filter: brightness(150%);
    }
  }
`;

