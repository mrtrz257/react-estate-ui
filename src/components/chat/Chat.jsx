import { useState } from "react"
import "./chat.scss"
import { messages } from "../../lib/dummydata"

const Chat = () => {

    const [chat, setChat] = useState(false)



  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p onClick={()=>setChat(true)}>{messages[0].message.length > 25 ? messages[0].message.substring(0, 25)+"..." : messages[0].message}</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Mary Gold</span>
                <p onClick={()=>setChat(true)}>{messages[1].message.length > 25 ? messages[1].message.substring(0, 25)+"..." : messages[1].message}</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Mike Smith</span>
                <p onClick={()=>setChat(true)}>{messages[2].message.length > 25 ? messages[2].message.substring(0, 25)+"..." : messages[2].message}</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Martin Gonzalez</span>
                <p onClick={()=>setChat(true)}>{messages[3].message.length > 25 ? messages[3].message.substring(0, 25)+"..." : messages[3].message}</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Steve Sanderson</span>
                <p onClick={()=>setChat(true)}>{messages[4].message.length > 25 ? messages[4].message.substring(0, 25)+"..." : messages[4].message}</p>
            </div>
        </div>

        

        {chat && (<div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                    alt="profile-img" />
                    Jane Doe
                </div>
                <span className="closeBtn" 
                onClick={()=>setChat(false)}>X</span>
            </div>

            <div className="center">
                <div className="chatMessage">
                    <p>This is an example of a message</p>
                    <span>just now</span>
                </div>
                <div className="chatMessage own">
                    <p>OK!</p>
                    <span>30 minutes ago</span>
                </div>
                <div className="chatMessage own">
                    <p>and this is how another reply looks</p>
                    <span>30 minutes ago</span>
                </div>
                <div className="chatMessage">
                    <p>This is how an answer from another user looks</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>This is how a message in the chat looks</p>
                    <span>1 hour ago</span>
                </div>
            </div>

            <div className="bottom">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
        </div>)}
    </div>
  )
}

export default Chat