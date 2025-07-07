import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styling/SignInPage.css";

function SignInPage() {
  localStorage.setItem("role", "hi");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/signIn", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "Admin") {
          alert("Admin login");
          localStorage.setItem("username", formData.userName);
          localStorage.setItem("role", "Admin");
          navigate("/admin");
        } else if (data === "Customer") {
          alert("Customer login");
          localStorage.setItem("role", "Customer");
          localStorage.setItem("username", formData.userName);
          navigate("/customer");
        } else {
          alert("Incorrect username or password");
        }
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
