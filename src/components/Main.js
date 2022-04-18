import styled from "styled-components";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import PostModal from "./PostModal";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getArticleAPI } from "../actions";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() =>{
    props.getArticles()
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <Container>
      <ShareBox style={{ paddingTop: "10px" }}>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} />
          ) : (
            <img src="/images/user.svg" alt="avatar" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            {" "}
            Start a post{" "}
          </button>
        </div>

        <div>
          <button>
            <ImageIcon style={{ color: "rgb(112 181 249)" }} />
            <span>Photo</span>
          </button>
          <button>
            <SubscriptionsIcon style={{ color: "rgb(127 193 94)" }} />
            <span>Video</span>
          </button>
          <button>
            <BusinessCenterIcon 
            style={{ color: "rgb(168 212 255)" }} />
            <span>Job</span>
          </button>
          <button>
            <NewspaperIcon 
            style={{ color: "rgb(252 146 149)" }} />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Content>
        {props.loading && 
        <img src="images/loading-spinner.svg" />}

        <Article>
          <ShareActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>{props.user.displayName}</span>
                <span>{props.user.email}</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis-svg.svg" alt="" />
            </button>
          </ShareActor>
          <Description>Description</Description>
          <ShareImg>
            <a>
              <img src="/images/img1.jpg" alt="" />
            </a>
          </ShareImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/Linkedin-Like-Icon.png" alt="like" />
                <img
                  src="/images/Linkedin-Celebrate-Icon.png"
                  alt="celebrate"
                />
                <img src="/images/Linkedin-Support-Icon.png" alt="support" />
                <img src="/images/Linkedin-Love-Icon.png" alt="love" />
                <img
                  src="/images/Linkedin-Insightful-Icon.png"
                  alt="insightful"
                />
                {/* <img src="/images/Linkedin-Curious-Icon.png" alt="curious" /> */}
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 Comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/Linkedin-Like-Icon.png" alt="" />
              <span>Like</span>
            </button>

            <button>
              <img src="/images/comment.svg" alt="" />
              <span>Comment</span>
            </button>

            <button>
              <img src="/images/share.svg" alt="" />
              <span>Share</span>
            </button>

            <button>
              <img src="/images/send.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </Content>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1 2px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0px;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: #fff;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-bottom: 4px;

      span {
        margin-left: 8px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const ShareActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const ShareImg = styled(CommonCard)`
  margin-top: 10px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      img {
        height: 20px;
        width: 20px;
        padding: 3px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 5px;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
text-align: center;
&>img{
  width: 30px;

}
`;

const mapStateToProps = (state) => {
  return{
    loading: state.articleState.loading,
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
 getArticles: () => dispatch(getArticleAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
