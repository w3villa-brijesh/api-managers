import React, { Component } from "react";
import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    }
  }
  componentWillMount() {
    const self = this
    console.log("componentWillMount");
    try {
      var authOptions = {
        method: 'GET',
        url: `http://52.33.80.175:1337/user/projects`,
        data: {},
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2NDA2Mzk0MSwiZXhwIjoxNjY2NjU1OTQxfQ.OP_y3LT0WFxoVH1tjXCs8T919TPzQzmyYB6pFpnczCI'
        }
      };
      return axios(authOptions).then(res => {
        self.setState({ loader: true })
        this.setState({ asideData: res.data.data })
      })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <>
        <div>
        safsdsfsfs
        </div>
      </>
      // <>
      //   {this.state.loader ?
      //     <>
      //       { this.state.asideData.map((item) =>
      //         <li key={item.name.toString()}>
      //           project: {item.name}
      //           {
      //             item.apis.map((subItem) => <li key={subItem.toString()}> apis: {subItem.name}</li>)
      //           }
      //         </li>
      //       )}
      //     </> :
      //     <><h1>Loading</h1></>}
      // </>
    );
  }
}
export default Login;