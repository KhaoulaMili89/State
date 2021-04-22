import React, { Component } from "react";
import "./App.css";
class AppClass extends Component {
  constructor(props) {
    console.log("constructor()");
    super(props);
    this.state = {
      fullname: "Khaoula Amri Mili",
      bio:
        "31 years old from Jemmel Master in information systems engineering, GOMYCODE candidate",
      profession: "Computer Trainer",
      show: false,
      intervall: null,
      timer: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount()");
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.intervall);
  }
  show = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    console.log("render()");
    return (
      <div>
        <img
          src="ProfilePhoto1.jpg"
          alt="my photo"
          style={{ width: 150, height: 150, borderRadius: 100 }}
        />
        <h1>My Profile</h1>
        {this.state.show && (
          <p>
            My name is {this.state.fullname}I have {this.state.bio} <br /> I'm{" "}
            {this.state.profession}
          </p>
        )}
        <button onClick={this.show}>show me</button>
        <h2> {this.state.timer}</h2>
      </div>
    );
  }
}
export default AppClass;
