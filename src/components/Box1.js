import react, {Component} from "react"
export class Box1 extends Component {
    render(){
        return (
            <><div className="main-content-box">
                <div className="box">
                    <img className="wall-img" src="images/25636.jpg" width="400" height="300" />
                    <img className="user-img" src="images/user1.jpg" width="50" height="50" />
                    <p> I declare the world is so beautiful that I can hardly believe it exists.</p>
                </div>
                <div className="box">
                    <img className="wall-img" src="images/25638.jpg" width="400" height="300" />
                    <img className="user-img" src="images/user2.jpg" width="50" height="50" />
                    <p> The beauty of nature can have a profound effect upon our senses.</p>
                </div>
                <div className="box">
                    <img className="wall-img" src="images/25640.jpg" width="400" height="300" />
                    <img className="user-img" src="images/user3.jpg" width="50" height="50" />
                    <p> Though we travel around the world over to find the beautiful, we must carry it with us.</p>
                </div>
            </div><hr /></>
        )
    }
}

export default Box1