import React from 'react';
import LogoSvg from './Common/SVG/LogoSvg';

const NavBar = ({user}) => {
	const csrfToken = document.getElementsByName("csrf-token")[0].content;
	const body = {
    authenticity_token: csrfToken,
  }
	const handleLogout = async () => {
		const res = await fetch(
			`/logout/${user.id}`,
			{
        method: "DELETE",
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

	console.log(user);
  return(
    <div className="flex w-full h-16 bg-black absolute top-0 items-center">
    	<LogoSvg />
    	{ user &&
    		(
					<button 
						class="ml-auto mr-4 bg-transparent hover:bg-red-600 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded"
						onClick={handleLogout}
					>
						Log out
					</button>
    	 )
    	}
    </div>
  );
}

export default NavBar;
