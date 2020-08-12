import * as React from 'react';
import ChatArea from './ChatArea';
import UsersOnline from './UsersOnline';

const Layout = () => {
	return(
		<div class="w-full h-full flex flex-col justify-content item-center">
			<div class="text-blue-400 mx-auto">
				MessageMe
			</div>
			<div class="w-100 h-full text-white mx-64 px-32 py-16 flex">
				<ChatArea />
				<UsersOnline />
			</div>
		</div>
	);
};

export default Layout;
