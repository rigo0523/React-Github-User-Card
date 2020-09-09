import React from "react";
import styled from "styled-components";
const CardContainer = styled.div`
  width: 400px;
  box-shadow: 2px 10px 10px gray;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: skyblue;
  :hover {
    box-shadow: 2px 10px 20px black;
    cursor: pointer;
  }
`;

class UserCard extends React.Component {
  render() {
    console.log(this.props, "this.props inside USERCARD container");
    return (
      <CardContainer>
        <img src={this.props.user.avatar_url} width="200" alt="myprofile" />
        <h1>username: {this.props.user.login}</h1>
        <h2>Location: {this.props.user.location}</h2>
        <a href={this.props.user.html_url}>{this.props.user.login} Profile</a>
      </CardContainer>
    );
  }
}

export default UserCard;
