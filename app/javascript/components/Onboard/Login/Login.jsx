import React from 'react';

const Login = () => {
  return(
    <div class="flex flex-col mx-auto my-10 py-4 w-2/5 bg-black bg-opacity-25">
      <h4 class="text-blue-300 py-6 mx-auto">MessageMe</h4>
      <div class="mb-4 mx-16 flex flex-col">
        <label htmlFor="email" class="text-white mb-2 px-2">Email Address</label>
        <input type="email" value="" class="rounded w-4/5 h-10 px-5" placeholder="you@example.com"/>
      </div>
      <div class="mb-4 mx-16 flex flex-col">
        <label htmlFor="password" class="text-white mb-2 px-2">Password</label>
        <input type="password" value="" class="rounded w-4/5 h-10 px-5" placeholder="password"/>
      </div>
      <div class="mb-4 mx-auto mt-4">
        <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Launch MessageMe
        </button>
      </div>
    </div>
  )
}

export default Login;
