import { Component } from 'react';
import UserContext from '../utils/userContext';
// const About = () =>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is about us page</p>
//         </div>
//     )
// }

export class About extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>This is about us page</p>
                <UserContext.Consumer>
                    {({loggedInUser})=> <p>Username : {loggedInUser}</p>}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default About;