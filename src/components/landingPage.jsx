import { Link } from "react-router-dom";
import '../styles/landingPage.css'

const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="selectLogin">
                <h1>Library Mangement System</h1>
                <div className="button_input">
                    <div className="loginimage">
                    <img width="100px" src='./image/admin.png' alt="" />
                    <img width="100px" src='./image/user.png' alt="" />
                    </div>
                    <div className="login_input">
                    <button><Link to='/admin-login' >Admin Login</Link></button>
                    <button><Link to='/user-login' >User Login</Link></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default LandingPage;