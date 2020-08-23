import * as React from 'react';
import ChatArea from './ChatArea';
import UsersOnline from './UsersOnline';
import TitleSvg from '../Common/SVG/TitleSvg';
import { ActionCableProvider, ActionCableConsumer } from 'react-actioncable-provider';


const Layout = (props) => {
	const [ chatDetails, setChatDetails ] = React.useState({
		messages:[],
		users:[],
		messageFrom:"",
	});

	let ws = new WebSocket("ws://localhost:3000/cable");

	ws.onopen = () => {
		console.log("opened");
	}

	ws.onclose =() => {
		console.log("closed");
	}

	const { messages, users, messageFrom } = chatDetails;

	React.useEffect(() => {
		const getChatData = async() => {
			const res = await fetch(
				"/",
				{
					method: "GET",
	        headers: {
	          Accept: 'application/json',
	          'Content-Type': 'application/json',
	        },
				}
			);
			const resData = await res.json();
			setChatDetails(resData);
		};
		getChatData();
	},[]);

	return(
		<ActionCableProvider>
			<ActionCableConsumer 
				channel="ChatroomChannel"
				onReceived={(res) => {
					setChatDetails(res);
				}}
				onDisconnected={() => {
					console.log("Disconected boss")
				}}>
				<div class="w-full h-full flex flex-col justify-content item-center">
					<div class="mx-auto">
						<TitleSvg />
					</div>
					<div class="w-100 h-full text-white mx-64 px-32 py-16 flex">
						<ChatArea messages={messages}/>
						<UsersOnline users={users} messageFrom={messageFrom} />
					</div>
				</div>
				</ActionCableConsumer>
		</ActionCableProvider>
	);
};

export default Layout;
