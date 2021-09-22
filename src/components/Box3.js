import react, {Component} from "react"
export class Box3 extends Component {
    render(){
        return (
            <div className="features">
                <h2>Save The World!</h2>
                <div className="feature-box">
                    <i className="fas fa-mountain"></i>
                    <p>Discover</p>
                </div>
                <div className="feature-box">
                    <i className="fas fa-ad"></i>
                    <p>Promote</p>
                </div>
                <div className="feature-box">
                    <i className="fas fa-search"></i>
                    <p>Investigate</p>
                </div>
                <div className="feature-box">
                    <i className="fas fa-phone"></i>
                    <p>Support</p>
                </div>
            </div>
        )
    }
}

export default Box3