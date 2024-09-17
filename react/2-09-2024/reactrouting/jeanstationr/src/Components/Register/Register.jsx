import React from 'react'
const Register = () => {
  return (
    <div>register user
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>
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

export default Register