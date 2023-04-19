import { render } from "@testing-library/react";
import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gender: ""
    }
  }
  
  handleChange =(e) =>{
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state.name)
  }
  handleChange =(e) =>{
    e.preventDefault();
    this.setState({[e.target.email]:e.target.value})
    console.log(this.state.email)
  }
  
  handleChange =(e) =>{
    e.preventDefault();
    this.setState({[e.target.gender]:e.target.value})
    console.log(this.state.gender)
}

render() {
return (
    <div className="form">
        <h1>student Form</h1>
        <form>
            <label>Fullname</label>
            <br />
            <input type="text" name="name"value={this.state.name} onChange={this.handleChange}/>
            <label>email</label>
            <br />
            <input type="email" name="email"value={this.state.email} onChange={this.handleChange}/>
            <label>Fullname</label>
            <br />
            <input type="text" name="gender"value={this.state.gender} onChange={this.handleChange}/>
            <br />
            <button type="submit">submit</button>
        </form>
    </div>
);
}
}

  export default Form;
