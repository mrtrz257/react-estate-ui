import { useState } from "react"
import "./chat.scss"

const Chat = () => {

    const [chat, setChat] = useState(true)

  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p onClick={()=>setChat(true)}>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
                alt="profile-img" />
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
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
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>just now</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>30 minutes ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>30 minutes ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
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