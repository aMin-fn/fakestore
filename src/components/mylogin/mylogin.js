import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './mylogin.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2";

function Mylogin() {
    let [username, Setusername] = useState('');
    let [password, Setpassword] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify the content type
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();
            
            if (response.ok) {
                navigate('/'); // Navigate to the home page
            } else {
                console.error('Login failed:', data);
               
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "username or password incorrect",
              });
              
        }
    };

    return (
        <div className="login-container">
            <form action="" onSubmit={handleSubmit}>
                <div className="login-header">
                    <h2 style={{fontFamily : 'satisfy', color : 'darkred'}}>Login</h2>
                </div>
                <div className="user-c" style={{margin : '25px 0 15px '}}>
                    <label style={{display : 'flex' , alignItems : 'center'}} htmlFor="">
                        <FaUser style={{marginRight : '5px'}}></FaUser>
                        <p>Username</p>
                    </label>
                    <input type="text" value={username} onChange={(e) => Setusername(e.target.value)} />
                </div>
                <div className="pass-c">
                    <label style={{display : 'flex' , alignItems : 'center'}} htmlFor="">
                        <RiLockPasswordFill style={{marginRight : '5px'}}></RiLockPasswordFill>
                        <p>Password</p>
                    </label>
                    <input value={password} onChange={(e) => Setpassword(e.target.value)} type="password" /> {/* Changed to type="password" */}
                </div> 
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                <a href="">Forget password?</a>
                <input style={{backgroundColor : 'darkred' , color : 'white'}} type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Mylogin;
