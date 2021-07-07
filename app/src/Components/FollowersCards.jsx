import React from "react";
import styled from "styled-components";
const FollowersContainer = styled.div`
  width: 700px;
  box-shadow: 2px 10px 10px gray;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background: gray;
  :hover {
    box-shadow: 2px 10px 20px skyblue;
    cursor: pointer;
  }
`;

class FollowersCard extends React.Component {
  render() {
    return (
      <FollowersContainer>
        {this.props.followers.map((follower) => (
          <div
            key={follower.id}
            style={{ margin: "20px", border: "1px solid red", width: "130px" }}
          >
            <img src={follower.avatar_url} width="130" alt="myprofile" />
            <p>Follower Login: {follower.login}</p>
            <a href={follower.html_url}>{follower.login} Profile</a>
          </div>
        ))}
      </FollowersContainer>
    );
  }
}

export default FollowersCard;
