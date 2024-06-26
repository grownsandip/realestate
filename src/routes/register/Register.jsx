import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="registerPage">
        <div className="formContainer">
            <form>
                <h1>Create an Account</h1>
                <input name="username" type="text" placeholder="Username" />
                <input name="email" type="text" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button>Register</button>
                <Link to="/login">Do you have an account?</Link>
            </form>
        </div>
        <div className="imgContainer">
            <img src="./images/bg.png" alt="" />
        </div>
    </div>
  )
}

export default Register
