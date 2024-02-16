import React from 'react'

const Login = () => {
  return (

    <div
      className='container my-5 d-flex justify-content-center'>

      <div className="card w-50">
        <div className="card-header">
          <h1>Login </h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <form action="">
                <div className="form-group">
                  <label htmlFor="username">  Username</label>
                  <input type="text" name='username' id='username' className='form-control' />

                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name='password' id='password' className='form-control' />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 m-2">
              <button className='btn btn-success btn-sm '> Login</button>
              <a href='/signUp'> SignUp</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login