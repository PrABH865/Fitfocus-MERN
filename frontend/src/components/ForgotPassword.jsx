import React from 'react'

const ForgotPassword = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle password reset link sending
        console.log("Password reset link sent to email");
    }

  return (
    <div>
        <h1>Forgot Password</h1>
        <p>Please enter your email address to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <button type="submit">Send Reset Link</button>
        </form>
    </div>
  )
}

export default ForgotPassword