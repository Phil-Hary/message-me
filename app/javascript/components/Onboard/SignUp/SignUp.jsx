import * as React from 'react';
import { Input } from '../../Common/FormComponents';

const SignUp = () => {
  const [ userName, setUserName ] = React.useState("");
  const [ email, setEmail] = React.useState("");
  const [ password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    const csrfToken = document.getElementsByName("csrf-token")[0].content;
    const body = {
      authenticity_token: csrfToken,
      user_details: {
        user_name: userName,
        email: email,
        password: password,
      }
    };

    const res = await fetch(
      '/signUp',
      {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    );

    const { redirect } = await res.json();
    window.location.href = redirect;
  }

	return(
		<div class="flex justify-center items-center h-screen w-full"> 
      <div class="flex flex-col py-4 w-480 bg-black bg-opacity-25 items-center">
        <h1 class="tube-light-effect">MessageMe</h1>
        <div class="bg-black text-white w-400 h-48 my-8 p-6 bg-opacity-50 rounded">
          Hi Amigo, This is SignUp!!!!
        </div>
        <div class="mb-4 mx-5 flex flex-col">
          <Input
            labelName={"USER NAME"}
            labelClassName={"text-white mb-2 px-2 font-sm font-semibold"}
            type={"text"}
            value={userName}
            className={"rounded w-400 h-10 px-5 border"}
            placeholder={"your name"}
            onChange={setUserName}
           
          />
        </div>
        <div class="mb-4 mx-5 mt-2 flex flex-col">
          <Input
            labelName={"EMAIL ADDRESS"}
            labelClassName={"text-white mb-2 px-2 font-sm font-semibold"}
            type={"text"}
            value={email}
            className={"rounded w-400 h-10 px-5 border"}
            placeholder={"you@example.com"}
            onChange={setEmail}
          />
        </div>  
        <div class="mb-4 mx-5 mt-2 flex flex-col">
           <Input
            labelName={"PASSWORD"}
            labelClassName={"text-white mb-2 px-2 font-sm font-semibold"}
            type={"password"}
            value={password}
            className={"rounded w-400 h-10 px-5 border"}
            placeholder={"password"}
            onChange={setPassword}
          />
        </div>
        <div class="mb-4 mx-auto mt-6">
          <button
            class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Launch MessageMe
          </button>
        </div>
        <div class="mb-4 mx-auto mt-4">
          <div class="text-white">
            Already have an account?
            <span
              class="text-blue-400 ml-2 cursor-pointer"
              onClick={()=>{
                window.location.href = "/login"
              }}
            > LogIn </span>
          </div>
        </div>
      </div>
     </div>
	);
}

export default SignUp;
