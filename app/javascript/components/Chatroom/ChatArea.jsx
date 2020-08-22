import * as React from 'react';
import Scrollbar from "react-scrollbars-custom";
import { ActionCableConsumer } from 'react-actioncable-provider';

const ChatArea = ({messages}) => {
	const [ message, setMessage ] = React.useState("");
	const scrollBarRef = React.useRef(null);
	const inputRef = React.useRef(null);

	React.useEffect(() => {
		scrollBarRef.current.scrollToBottom();
		inputRef.current.focus();
	},[])

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
			<Scrollbar ref={scrollBarRef}
				trackYProps={{
			    renderer: props => {
			      const { elementRef, ...restProps } = props;
			      return <span {...restProps} ref={elementRef} className="trackY" />;
			    }
			  }}
				style={{ width: "100%", height: "100%" }}
			>
			{
				messages.map((message, key) => {
					return(
						<div style={{overflowWrap: "break-word"}}>
							<span class="text-blue-400">{message.user.user_name}:</span>{" "}
							<span>{message.message}</span>
						</div>

					)
				})
			}
			</Scrollbar>
			<div class="mt-auto">
				<span class="text-blue-400" placeholder="Type your message here">Message:</span>{" "}
				<input
					ref={inputRef}
					type="text"
					class="bg-black border-0 focus:outline-none w-3/4"
					onKeyDown={handleKeyDown}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					style={{overflowWrap: "break-word"}}/>
			</div>
		</div>
	);
}

export default ChatArea;