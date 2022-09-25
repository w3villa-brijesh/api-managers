import React, { Component } from "react";
import axios from 'axios';
import './Aside.css';

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



            <div className="aside-bar col-md-3" >
                <br />
                <br />
                <br />
                <br />
                {this.state.loader ?
                    <>



                        {/* <details>
                            <summary>Project1  </summary>
                            <ul className="ul-style">

                                <li>Project1</li>
                                <li>Project1</li>
                                <li>Project1</li>
                                <li>Project1</li>
                                <li>Project1</li>
                                <li>Project1</li>
                                <li>Project1</li>
                                <li>Project1</li>
                            </ul>
                        </details> */}







                        {this.state.asideData.map((item) =>
                            <details>

                                <summary>{item.name} </summary>
                                <ul className="ul-style">
                                    <li key={item.name.toString()}>
                                        <button>
                                        {
                                            item.apis.map((subItem) => <li key={subItem.toString()}>{subItem.name}</li>)
                                        }
                                        </button>
                                    </li>
                                </ul>
                            </details>
                        )}
                    </> :
                    <><h1>Loading</h1></>}

                    

            </div>
        );
    }
}
export default Login;