import * as React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Onboard = () => {
	const [ currentScreen, setCurrentScreen ] = React.useState("LOGIN");
	return(
		currentScreen === "LOGIN"
		? <Login toggle={() => setCurrentScreen("SIGN_UP")} />
		: <SignUp toggle={() => setCurrentScreen("LOGIN")} />
	);
}

export default Onboard;
