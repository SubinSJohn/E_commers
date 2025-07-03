import { useState } from "react";
import{ useNavigate } from 'react-router-dom';

function SignUpPage() {

    localStorage.setItem("role","hi");
    const navigate = useNavigate();
    
    const[formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        dob:'',
        gender:'',
        role:''
    });

    const handleChange = (e) =>{
        setFormData( (prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/signUp', {
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        })
        .then((res) => res.text())
        .then((data) => {
            if(data === "Success") {
                alert('Signing up : ' + data);
                navigate('/')
            } else {
                alert('Signing up : ' + data + '  User name not available');
            }
        })
        .catch((err) => {
            console.error('Error: ',err);
        })
    };
    
    return(
        <div>
            <h2>
                Sign Up
            </h2>
            <form onSubmit = {handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                /><br />
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br />
                <input 
                    type="text"
                    name="dob"
                    placeholder="DOB"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                /><br />
                <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="male">male</option>
                    <option value="female">Female</option>
                    <option value="other">Doesn't like to disclose</option>
                </select> 
                    <br />
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
                </select><br /><br />
                <button type="Submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpPage