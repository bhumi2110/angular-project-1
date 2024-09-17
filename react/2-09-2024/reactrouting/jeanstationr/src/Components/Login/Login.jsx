import React from 'react'
const Login = () => {
  return (
    <div>login user
        <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default Login