import styled from "styled-components";
import { postData } from "../../../data";

const MiddleSection = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt=""/>
          <button style={{color: 'rgba(0,0,0,0.6)'}}>Start a post</button>
        </div>

        <div style={{display: 'flex'}}>
          <button>
            <img src="/images/photo-icon.png" alt="" style={{color: 'rgba(0,0,0,0.6)'}}/>
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.png" alt="" />
            <span >Video</span>
          </button>

          <button>
            <img src="/images/job-icon.png" alt="" />
            <span>Job</span>
          </button>

          <button>
            <img src="/images/write-article-icon.png" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <hr style={{margin: 10}}/>
      <div>
        {
         postData.map((data,key) => (
        <Article key={data.id}>
          <SharedActor>
            <a href="/">
              <img src={data.avatar} alt=""/>
                <div>
                  <span  style={{marginTop: 5, color: 'rgba(0,0,0,0.8)', fontSize: '14px'}}>{data.name}</span>
                  <span style={{marginLeft: 2, color: 'rgba(0,0,0,0.8)'}}>{data.info}</span>
                  <span style={{marginLeft: 2, color: 'rgba(0,0,0,0.8)'}}>{data.time}</span>
                </div>

                <button>
                  <img src="/images/ellipsis.png" alt=""/>
                </button>
            </a>
          </SharedActor>
          <Description>{data.description}</Description>
          <SharedImage>
            <a href="/">
              <img src={data.url} alt=""/>
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like-icon.png" alt=""/>
                <img src="/images/clap-icon.png" alt=""/>
                <span>{data.likes}</span>
                
              </button>
            </li>
            <li>
              <a href="/">{data.comments} Comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
            
                <img src="/images/like-icon.png" alt=""/>
                <span>Like</span>
          
            </button>
            <button>
          
                <img src="/images/comment-icon.png" alt=""/>
                <span>Comment</span>
          
            </button>
            <button>
              
                <img src="/images/share-icon.png" alt=""/>
                <span>Share</span>
              
            </button>
            <button>
            
                <img src="/images/send-icon.png" alt=""/>
                <span>Send</span>
          
            </button>
          </SocialActions>
        </Article>
        ))
       }
      </div>
    </Container>

  )
};

const Container = styled.div`
  grid-area: middlesection;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div{
    button{
      outline: none;
      color: rgba(0 0 0 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600; 
    }
    &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img{
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button{
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 2px solid rgba(0,0,0,0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-bottom: 4px;
      
      button{
        img{
        width: 20px;
        margin:0 6px 0 -2px;
        @media(min-width: 768px){
          margin-right: 2px;
          padding-right: 5px;
          height: 20px;
          width: auto
        }
      }
      span{
        color: rgba(0,0,0,0.6);
        @media(min-width: 768px){
          margin-top: 2px
        }

      }
        
      }
    }
  }
  
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img{
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    &>div{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span{
        text-align: left;
        &:first-child{
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.1);
        }

        &:nth-child(n+1){
          font-size: 12px;
          color: rgba(0, 0, 0, 0.57);

        }
      }
    }
  }

  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img{
      width: 20px;
      height: 20px;
    }

  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0 0 0 0.6);
  font-size: 14px;
  text-align: left;

`;
const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li{
    margin-right: 5px;
    font-size: 12px;
    button{
      display: flex;
      border: none;
      background-color: white;
      img{
        width: 20px;
      }
      span{
        margin-left: 5px;
        margin-top: 6px;
      }
    }
  }
  a{
    text-decoration: none;
    color: rgba(0,0,0,0.9);
   
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-height: 40px;
  padding: 4px 8px;
  @media(max-width: 768px){
    button{
      display: flex;
      flex-direction: column;
      max-width: 90%;
      
    }
    span{
        margin-top: 4px;
    }
  }
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: white;
    
    span{
      margin-left: 5px;
      color: rgba(0,4,0,0.6);
    }


    img{
      width: 25px;
      height: 25px;
      background-color: white;
    }
  }
`;

export default MiddleSection;