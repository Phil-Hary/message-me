import * as React from 'react';
import Scrollbar from "react-scrollbars-custom";

const UsersOnline = ({ users, messageFrom }) => {
	return(
		<div className="text-white ml-8 bg-black opacity-75 w-250 my-16">
			<div className="flex flex-col">
				<div className="text-white my-4 mx-auto">
					Users Online
				</div>
				<Scrollbar
					trackYProps={{
				    renderer: props => {
				      const { elementRef, ...restProps } = props;
				      return <span {...restProps} ref={elementRef} className="trackY" />;
				    }
				  }}
					style={{ width: "230px", height: "320px" }}
				>
				{
					users.map((user, key) => {
						const userStatus = user.online
										   ? "rounded-full bg-blue-400 h-3 w-3 my-2 ml-auto shadow-outline"
										   : "rounded-full bg-gray-400 h-3 w-3 my-2 ml-auto shadow-outline";
						return(
							<div className="w-full h-12 px-4 py-2 flex" key={key}>
								<div>{user.user_name}</div>
								<div className={
									messageFrom === user.user_name 
									? "rounded-full bg-blue-400 h-3 w-3 my-2 ml-auto shadow-outline animate-ping inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"
									: userStatus
								}/>
							</div>
						);
					})
				}
				</Scrollbar>
			</div>
		</div>
	);
};

export default UsersOnline;
