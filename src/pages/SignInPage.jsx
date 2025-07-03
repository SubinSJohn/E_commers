import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignInPage() {

    localStorage.setItem("role","hi");

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName:'',
        password:''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/signIn',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        })
        .then((res) => res.text())
        .then((data) => {
            if(data === "Admin"){
                alert('Admin login');
                localStorage.setItem("username",formData.userName);
                localStorage.setItem("role","Admin");
                navigate('/admin')
            } else if(data === "Customer"){
                alert('customer login');
                localStorage.setItem("role","Customer");
                localStorage.setItem("username",formData.userName);
                navigate('/customer')
                
            } else{
                alert('Incorrect user Name or Pssword');
            
            }
        })
        .catch((err) => {
            console.error('Error: ', err);
        })
    };

    return(
        <div>
            <h2>Sign In</h2>
            <form onSubmit={ handleSubmit } >
                <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                /><br/><br/>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={ formData.password}
                    onChange={handleChange}
                    required 
                /><br/><br/>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInPage

