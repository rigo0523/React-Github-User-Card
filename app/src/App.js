import React from "react";
import UserCard from "./Components/UserCard";
import axios from "axios";
import FollowersCards from "./Components/FollowersCards";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    console.log("component did mount", this.state);
    axios
      .get("https://api.github.com/users/rigo0523")
      .then((res) => {
        console.log(res, "res.data axios call for rigo0523 userCard");
        this.setState({ user: res.data });
      })
      .catch((err) =>
        console.log(err, "error, could not get res.data for rigo0523 CARD")
      );

    axios
      .get("https://api.github.com/users/rigo0523/followers")
      .then((res) => {
        console.log(res, "FOLLOWERCARD RES.DATA AXIOS");
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err, "error, could not get Followers"));
  }

  render() {
    return (
      <div>
        <UserCard user={this.state.user} />
        <h1>{this.state.user.login}'s Followers</h1>
        <FollowersCards followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
