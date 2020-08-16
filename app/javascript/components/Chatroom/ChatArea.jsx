import * as React from 'react';

const ChatArea = ({messages}) => {
	const [ message, setMessage ] = React.useState("");

	const sendMessage = async () => {
		const csrfToken = document.getElementsByName("csrf-token")[0].content;
		const body = {
			authenticity_token: csrfToken,
			message
		}
		const res = await fetch(
			'/message',
			{
				method:"POST",
				headers: {
         	Accept: 'application/json',
          'Content-Type': 'application/json',
       	},
       	body: JSON.stringify(body)
			}
		);
	};

	const handleKeyDown = (e) => {
		if(e.key === "Enter" && message.length > 0)
			sendMessage();
	}

	return(
		<div
			class="h-500 w-3/4 bg-black font-chat p-5 flex flex-col"
		>
			{
				messages.map((message, key) => {
					return(
						<div>
							<span class="text-blue-400">{message.user.user_name}:</span>{" "}
							<span>{message.message}</span>
						</div>

					)
				})
			}
			<div class="mt-auto">
				<span class="text-blue-400" placeholder="Type your message here">Message:</span>{" "}
				<input 
					type="text"
					class="bg-black border-0 focus:outline-none w-3/4"
					onKeyDown={handleKeyDown}
					value={message}
					onChange={(e) => setMessage(e.target.value)}/>
			</div>
		</div>
	);
}

export default ChatArea;