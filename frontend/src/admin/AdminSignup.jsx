import React from 'react'

const AdminSignup = () => {
  return (
    <div>
        <h1>Admin Signup</h1>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                <label htmlFor="role">Role</label>
                <select id="role" name="role" required>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default AdminSignup