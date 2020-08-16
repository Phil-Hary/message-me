import * as React from 'react';

const UsersOnline = ({users}) => {
	//<span class="animate-ping inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
	console.log(users);
	return(
		<div class="text-white ml-8 bg-black opacity-75 w-250 my-16">
			<div class="flex flex-col">
				<div class="text-white my-4 mx-auto">
					Users Online
				</div>
				{
					users.map((user, key) => {
						return(
							<div class="w-full h-12 px-4 py-2 flex">
								<div>{user.user_name}</div>
								<div class="rounded-full bg-blue-400 h-3 w-3 my-2 ml-auto shadow-outline"/>
							</div>
						);
					})
				}	
			</div>
		</div>
	);
};

export default UsersOnline;
