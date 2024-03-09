import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../actions/accountsActions';

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        console.error('Username or password cannot be blank');
        return; 
      }
      await dispatch(login(username, password));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      // Do not redirect if login fails
    }
  };
  
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://media.discordapp.net/attachments/752779863651385387/1207574840626651166/IMG_4086.jpg?ex=65e024b5&is=65cdafb5&hm=dd955b48ded4f8590888c0db9d3d08815ba4d61b5fc77bb855efc3dec455ce83&=&format=webp&width=371&height=662"
            className="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <form onSubmit={submitHandler}>
            <div className="d-flex flex-row align-items-center justify-content-center"></div>

            <div className="divider d-flex align-items-center my-4"></div>

            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="formControlLg"
              type="text"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn type="submit" className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account? <Link to = '/register'>Register</Link>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright Â© 2020. All rights reserved.
        </div>

        <div>
          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: 'white' }}>
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
