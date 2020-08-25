import * as React from 'react';
import { Input } from '../../Common/FormComponents';

const SignUp = () => {
	return(
		<div class="flex justify-center items-center h-screen w-full"> 
      <div class="flex flex-col py-4 w-480 bg-black bg-opacity-25 items-center">
        <h1 class="tube-light-effect">MessageMe</h1>
        <div class="bg-black text-white w-400 h-48 my-8 p-6 bg-opacity-50 rounded">
          Hi Amigo, This is SignUp!!!!
        </div>
        <div class="mb-4 mx-5 flex flex-col">
          <Input
            labelName={"EMAIL ADDRESS"}
            labelClassName={"text-white mb-2 px-2 font-sm font-semibold"}
            type={"text"}
            className={"rounded w-400 h-10 px-5 border"}
            placeholder={"you@example.com"}
           
          />
        </div>  
        <div class="mb-4 mx-5 mt-2 flex flex-col">
           <Input
            labelName={"PASSWORD"}
            labelClassName={"text-white mb-2 px-2 font-sm font-semibold"}
            type={"password"}
            
            className={"rounded w-400 h-10 px-5 border"}
            placeholder={"password"}
            
          />
        </div>
        <div class="mb-4 mx-auto mt-6">
          <button
            class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
           
          >
            Launch MessageMe
          </button>
        </div>
        <div class="mb-4 mx-auto mt-4">
          <div class="text-white">
            Don't have an accont?
            <span class="text-blue-400 ml-2 cursor-pointer"> Sign Up </span>
          </div>
          <div class="text-blue-400 cursor-pointer">
            Forgot Password ?
          </div>
        </div>
      </div>
     </div>
	);
}

export default SignUp;
