import react, {Component} from "react"
export class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <span id="logo">Ecology</span>
                <a id="sign_up" href="#"><i className='fas fa-user-alt'></i>Sign Up</a>
                <a id="log_in" href="#"><i className='far fa-question-circle'></i>Login</a>
            </div>
        )
    }
}

export default Navbar