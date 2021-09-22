import react, {Component} from "react"
export class Footer extends Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-box">
                    <h3>Ecology</h3>
                    <h4>Contact Us</h4>
                    A-15, The Air, Somewhere In. The World
                    <button id="footer-btn"> Email Us</button>
                </div>
                <div className="footer-box">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                </div>
                <h5>&copy; 2021 Something. All rights reserved.</h5>
            </div>
        )
    }
}

export default Footer