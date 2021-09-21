import React, { Component } from 'react';
import '../component/user.css'

class User extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        maiData: []

    }

    handler = (e) => {
        console.log(e);
        var id = e.target.id
        var c = {}
        c[id] = e.target.value
        this.setState(c)
    }

    onsubmith = (e) => {
        if (e.key == "Enter"){
        var data = this.state
        var myArr = data.maiData
        if (data.firstName != "" && data.lastName != "" && data.email != ""){
            delete data.maiData
            myArr.push(data)
            this.setState(
                { maiData: myArr, firstName: "", lastName: "", email: "" }
            )
            }
    }
    }
    onsubmith2 = (e) => {
        var data = this.state
        var myArr = data.maiData
        if (data.firstName != "" && data.lastName != "" && data.email != ""){
            delete data.maiData
            myArr.push(data)
            this.setState(
                { maiData: myArr, firstName: "", lastName: "", email: "" }
            )
        }
    }
    render() {
        var data1 = this.state.maiData.map((item) => {
            return <>
                <div className="container">
                    <table>
                        <tr>
                            <td className="f-name-main">{item.firstName}</td>
                            <td className="l-name-main">{item.lastName}</td>
                            <td className="email-main">{item.email}</td>
                        </tr>
                    </table>
                </div>
            </>
        })
        return (
            <>
            <div className="UserData">
                <form onKeyPress={this.onsubmith} >
                <h1>User Form</h1>
                <input id="firstName" onChange={this.handler} value={this.state.firstName} placeholder="Enter Your First Name" required></input>
                <input id="lastName" onChange={this.handler} value={this.state.lastName} placeholder="Enter Your Last Name" required></input>
                <input id="email" onChange={this.handler} value={this.state.email} placeholder="Enter Your Email" required></input>
                <input type="button" id='subb' value="Submit" onClick={this.onsubmith2}></input>
                </form>
                </div>
                <div className="DataMenu">
                    <table>
                        <tr>
                            <th className="f-name">First Name</th>
                            <th className="l-name">Last Name</th>
                            <th className="email">Email</th>
                        </tr>
                    </table>
                {data1}
            </div>
            </>

        )
    }
}

export default User;