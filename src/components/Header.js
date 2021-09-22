import react, {Component} from "react"
export class Header extends Component {
    render(){
        return (
            <div id="header">
                <div className="header-text">
                    <p>Green is the primer color of the world</p>
                    <h1>The Beauty of Nature</h1>
                    <button id="header_btn">Read More</button>
                </div>
            </div>
        )
    }
}

export default Header