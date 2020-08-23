import * as React from 'react';

const TitleSvg = () => {
	const Nodes = document.querySelectorAll(".title path");
	console.log(Nodes);
	for(let i=0; i<Nodes.length; i++){
		console.log(Nodes[i]?.getTotalLength())
	}
	
	return(
		<svg width="404" height="81" viewBox="0 0 404 81" xmlns="http://www.w3.org/2000/svg" class="title">
			<g filter="url(#filter0_d)">
				<mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="4.20312" y="0.8125" width="396" height="73" fill="black">
					<rect fill="white" x="4.20312" y="0.8125" width="396" height="73"/>
					<path d="M18.7344 3.8125L33.5 43.0469L48.2305 3.8125H59.7266V55H50.8672V38.125L51.7461 15.5547L36.6289 55H30.2656L15.1836 15.5898L16.0625 38.125V55H7.20312V3.8125H18.7344Z"/>
					<path d="M86.1992 55.7031C80.7852 55.7031 76.3906 54.0039 73.0156 50.6055C69.6641 47.1836 67.9883 42.6367 67.9883 36.9648V35.9102C67.9883 32.1133 68.7148 28.7266 70.168 25.75C71.6445 22.75 73.707 20.418 76.3555 18.7539C79.0039 17.0898 81.957 16.2578 85.2148 16.2578C90.3945 16.2578 94.3906 17.9102 97.2031 21.2148C100.039 24.5195 101.457 29.1953 101.457 35.2422V38.6875H76.6016C76.8594 41.8281 77.9023 44.3125 79.7305 46.1406C81.582 47.9688 83.9023 48.8828 86.6914 48.8828C90.6055 48.8828 93.793 47.3008 96.2539 44.1367L100.859 48.5312C99.3359 50.8047 97.2969 52.5742 94.7422 53.8398C92.2109 55.082 89.3633 55.7031 86.1992 55.7031ZM85.1797 23.1133C82.8359 23.1133 80.9375 23.9336 79.4844 25.5742C78.0547 27.2148 77.1406 29.5 76.7422 32.4297H93.0195V31.7969C92.832 28.9375 92.0703 26.7812 90.7344 25.3281C89.3984 23.8516 87.5469 23.1133 85.1797 23.1133Z"/>
					<path d="M129.441 44.6641C129.441 43.1406 128.809 41.9805 127.543 41.1836C126.301 40.3867 124.227 39.6836 121.32 39.0742C118.414 38.4648 115.988 37.6914 114.043 36.7539C109.777 34.6914 107.645 31.7031 107.645 27.7891C107.645 24.5078 109.027 21.7656 111.793 19.5625C114.559 17.3594 118.074 16.2578 122.34 16.2578C126.887 16.2578 130.555 17.3828 133.344 19.6328C136.156 21.8828 137.562 24.8008 137.562 28.3867H129.02C129.02 26.7461 128.41 25.3867 127.191 24.3086C125.973 23.207 124.355 22.6562 122.34 22.6562C120.465 22.6562 118.93 23.0898 117.734 23.957C116.562 24.8242 115.977 25.9844 115.977 27.4375C115.977 28.75 116.527 29.7695 117.629 30.4961C118.73 31.2227 120.957 31.9609 124.309 32.7109C127.66 33.4375 130.285 34.3164 132.184 35.3477C134.105 36.3555 135.523 37.5742 136.438 39.0039C137.375 40.4336 137.844 42.168 137.844 44.207C137.844 47.6289 136.426 50.4062 133.59 52.5391C130.754 54.6484 127.039 55.7031 122.445 55.7031C119.328 55.7031 116.551 55.1406 114.113 54.0156C111.676 52.8906 109.777 51.3438 108.418 49.375C107.059 47.4062 106.379 45.2852 106.379 43.0117H114.676C114.793 45.0273 115.555 46.5859 116.961 47.6875C118.367 48.7656 120.23 49.3047 122.551 49.3047C124.801 49.3047 126.512 48.8828 127.684 48.0391C128.855 47.1719 129.441 46.0469 129.441 44.6641Z"/>
					<path d="M166.637 44.6641C166.637 43.1406 166.004 41.9805 164.738 41.1836C163.496 40.3867 161.422 39.6836 158.516 39.0742C155.609 38.4648 153.184 37.6914 151.238 36.7539C146.973 34.6914 144.84 31.7031 144.84 27.7891C144.84 24.5078 146.223 21.7656 148.988 19.5625C151.754 17.3594 155.27 16.2578 159.535 16.2578C164.082 16.2578 167.75 17.3828 170.539 19.6328C173.352 21.8828 174.758 24.8008 174.758 28.3867H166.215C166.215 26.7461 165.605 25.3867 164.387 24.3086C163.168 23.207 161.551 22.6562 159.535 22.6562C157.66 22.6562 156.125 23.0898 154.93 23.957C153.758 24.8242 153.172 25.9844 153.172 27.4375C153.172 28.75 153.723 29.7695 154.824 30.4961C155.926 31.2227 158.152 31.9609 161.504 32.7109C164.855 33.4375 167.48 34.3164 169.379 35.3477C171.301 36.3555 172.719 37.5742 173.633 39.0039C174.57 40.4336 175.039 42.168 175.039 44.207C175.039 47.6289 173.621 50.4062 170.785 52.5391C167.949 54.6484 164.234 55.7031 159.641 55.7031C156.523 55.7031 153.746 55.1406 151.309 54.0156C148.871 52.8906 146.973 51.3438 145.613 49.375C144.254 47.4062 143.574 45.2852 143.574 43.0117H151.871C151.988 45.0273 152.75 46.5859 154.156 47.6875C155.562 48.7656 157.426 49.3047 159.746 49.3047C161.996 49.3047 163.707 48.8828 164.879 48.0391C166.051 47.1719 166.637 46.0469 166.637 44.6641Z"/>
					<path d="M205.238 55C204.863 54.2734 204.535 53.0898 204.254 51.4492C201.535 54.2852 198.207 55.7031 194.27 55.7031C190.449 55.7031 187.332 54.6133 184.918 52.4336C182.504 50.2539 181.297 47.5586 181.297 44.3477C181.297 40.293 182.797 37.1875 185.797 35.0312C188.82 32.8516 193.133 31.7617 198.734 31.7617H203.973V29.2656C203.973 27.2969 203.422 25.7266 202.32 24.5547C201.219 23.3594 199.543 22.7617 197.293 22.7617C195.348 22.7617 193.754 23.2539 192.512 24.2383C191.27 25.1992 190.648 26.4297 190.648 27.9297H182.105C182.105 25.8438 182.797 23.8984 184.18 22.0938C185.562 20.2656 187.438 18.8359 189.805 17.8047C192.195 16.7734 194.855 16.2578 197.785 16.2578C202.238 16.2578 205.789 17.3828 208.438 19.6328C211.086 21.8594 212.445 25 212.516 29.0547V46.2109C212.516 49.6328 212.996 52.3633 213.957 54.4023V55H205.238ZM195.852 48.8477C197.539 48.8477 199.121 48.4375 200.598 47.6172C202.098 46.7969 203.223 45.6953 203.973 44.3125V37.1406H199.367C196.203 37.1406 193.824 37.6914 192.23 38.793C190.637 39.8945 189.84 41.4531 189.84 43.4688C189.84 45.1094 190.379 46.4219 191.457 47.4062C192.559 48.3672 194.023 48.8477 195.852 48.8477Z"/>
					<path d="M219.969 35.6992C219.969 29.793 221.352 25.082 224.117 21.5664C226.906 18.0273 230.598 16.2578 235.191 16.2578C239.527 16.2578 242.938 17.7695 245.422 20.793L245.809 16.9609H253.508V53.8398C253.508 58.832 251.949 62.7695 248.832 65.6523C245.738 68.5352 241.555 69.9766 236.281 69.9766C233.492 69.9766 230.762 69.3906 228.09 68.2188C225.441 67.0703 223.426 65.5586 222.043 63.6836L226.086 58.5508C228.711 61.668 231.945 63.2266 235.789 63.2266C238.625 63.2266 240.863 62.4531 242.504 60.9062C244.145 59.3828 244.965 57.1328 244.965 54.1562V51.5898C242.504 54.332 239.223 55.7031 235.121 55.7031C230.668 55.7031 227.023 53.9336 224.188 50.3945C221.375 46.8555 219.969 41.957 219.969 35.6992ZM228.477 36.4375C228.477 40.2578 229.25 43.2695 230.797 45.4727C232.367 47.6523 234.535 48.7422 237.301 48.7422C240.746 48.7422 243.301 47.2656 244.965 44.3125V27.5781C243.348 24.6953 240.816 23.2539 237.371 23.2539C234.559 23.2539 232.367 24.3672 230.797 26.5938C229.25 28.8203 228.477 32.1016 228.477 36.4375Z"/>
					<path d="M279.066 55.7031C273.652 55.7031 269.258 54.0039 265.883 50.6055C262.531 47.1836 260.855 42.6367 260.855 36.9648V35.9102C260.855 32.1133 261.582 28.7266 263.035 25.75C264.512 22.75 266.574 20.418 269.223 18.7539C271.871 17.0898 274.824 16.2578 278.082 16.2578C283.262 16.2578 287.258 17.9102 290.07 21.2148C292.906 24.5195 294.324 29.1953 294.324 35.2422V38.6875H269.469C269.727 41.8281 270.77 44.3125 272.598 46.1406C274.449 47.9688 276.77 48.8828 279.559 48.8828C283.473 48.8828 286.66 47.3008 289.121 44.1367L293.727 48.5312C292.203 50.8047 290.164 52.5742 287.609 53.8398C285.078 55.082 282.23 55.7031 279.066 55.7031ZM278.047 23.1133C275.703 23.1133 273.805 23.9336 272.352 25.5742C270.922 27.2148 270.008 29.5 269.609 32.4297H285.887V31.7969C285.699 28.9375 284.938 26.7812 283.602 25.3281C282.266 23.8516 280.414 23.1133 278.047 23.1133Z"/>
					<path d="M313.344 3.8125L328.109 43.0469L342.84 3.8125H354.336V55H345.477V38.125L346.355 15.5547L331.238 55H324.875L309.793 15.5898L310.672 38.125V55H301.812V3.8125H313.344Z"/>
					<path d="M380.809 55.7031C375.395 55.7031 371 54.0039 367.625 50.6055C364.273 47.1836 362.598 42.6367 362.598 36.9648V35.9102C362.598 32.1133 363.324 28.7266 364.777 25.75C366.254 22.75 368.316 20.418 370.965 18.7539C373.613 17.0898 376.566 16.2578 379.824 16.2578C385.004 16.2578 389 17.9102 391.812 21.2148C394.648 24.5195 396.066 29.1953 396.066 35.2422V38.6875H371.211C371.469 41.8281 372.512 44.3125 374.34 46.1406C376.191 47.9688 378.512 48.8828 381.301 48.8828C385.215 48.8828 388.402 47.3008 390.863 44.1367L395.469 48.5312C393.945 50.8047 391.906 52.5742 389.352 53.8398C386.82 55.082 383.973 55.7031 380.809 55.7031ZM379.789 23.1133C377.445 23.1133 375.547 23.9336 374.094 25.5742C372.664 27.2148 371.75 29.5 371.352 32.4297H387.629V31.7969C387.441 28.9375 386.68 26.7812 385.344 25.3281C384.008 23.8516 382.156 23.1133 379.789 23.1133Z"/>
				</mask>
				<path class="title-1" d="M18.7344 3.8125L33.5 43.0469L48.2305 3.8125H59.7266V55H50.8672V38.125L51.7461 15.5547L36.6289 55H30.2656L15.1836 15.5898L16.0625 38.125V55H7.20312V3.8125H18.7344Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-2" d="M86.1992 55.7031C80.7852 55.7031 76.3906 54.0039 73.0156 50.6055C69.6641 47.1836 67.9883 42.6367 67.9883 36.9648V35.9102C67.9883 32.1133 68.7148 28.7266 70.168 25.75C71.6445 22.75 73.707 20.418 76.3555 18.7539C79.0039 17.0898 81.957 16.2578 85.2148 16.2578C90.3945 16.2578 94.3906 17.9102 97.2031 21.2148C100.039 24.5195 101.457 29.1953 101.457 35.2422V38.6875H76.6016C76.8594 41.8281 77.9023 44.3125 79.7305 46.1406C81.582 47.9688 83.9023 48.8828 86.6914 48.8828C90.6055 48.8828 93.793 47.3008 96.2539 44.1367L100.859 48.5312C99.3359 50.8047 97.2969 52.5742 94.7422 53.8398C92.2109 55.082 89.3633 55.7031 86.1992 55.7031ZM85.1797 23.1133C82.8359 23.1133 80.9375 23.9336 79.4844 25.5742C78.0547 27.2148 77.1406 29.5 76.7422 32.4297H93.0195V31.7969C92.832 28.9375 92.0703 26.7812 90.7344 25.3281C89.3984 23.8516 87.5469 23.1133 85.1797 23.1133Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-3" d="M129.441 44.6641C129.441 43.1406 128.809 41.9805 127.543 41.1836C126.301 40.3867 124.227 39.6836 121.32 39.0742C118.414 38.4648 115.988 37.6914 114.043 36.7539C109.777 34.6914 107.645 31.7031 107.645 27.7891C107.645 24.5078 109.027 21.7656 111.793 19.5625C114.559 17.3594 118.074 16.2578 122.34 16.2578C126.887 16.2578 130.555 17.3828 133.344 19.6328C136.156 21.8828 137.562 24.8008 137.562 28.3867H129.02C129.02 26.7461 128.41 25.3867 127.191 24.3086C125.973 23.207 124.355 22.6562 122.34 22.6562C120.465 22.6562 118.93 23.0898 117.734 23.957C116.562 24.8242 115.977 25.9844 115.977 27.4375C115.977 28.75 116.527 29.7695 117.629 30.4961C118.73 31.2227 120.957 31.9609 124.309 32.7109C127.66 33.4375 130.285 34.3164 132.184 35.3477C134.105 36.3555 135.523 37.5742 136.438 39.0039C137.375 40.4336 137.844 42.168 137.844 44.207C137.844 47.6289 136.426 50.4062 133.59 52.5391C130.754 54.6484 127.039 55.7031 122.445 55.7031C119.328 55.7031 116.551 55.1406 114.113 54.0156C111.676 52.8906 109.777 51.3438 108.418 49.375C107.059 47.4062 106.379 45.2852 106.379 43.0117H114.676C114.793 45.0273 115.555 46.5859 116.961 47.6875C118.367 48.7656 120.23 49.3047 122.551 49.3047C124.801 49.3047 126.512 48.8828 127.684 48.0391C128.855 47.1719 129.441 46.0469 129.441 44.6641Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-4" d="M166.637 44.6641C166.637 43.1406 166.004 41.9805 164.738 41.1836C163.496 40.3867 161.422 39.6836 158.516 39.0742C155.609 38.4648 153.184 37.6914 151.238 36.7539C146.973 34.6914 144.84 31.7031 144.84 27.7891C144.84 24.5078 146.223 21.7656 148.988 19.5625C151.754 17.3594 155.27 16.2578 159.535 16.2578C164.082 16.2578 167.75 17.3828 170.539 19.6328C173.352 21.8828 174.758 24.8008 174.758 28.3867H166.215C166.215 26.7461 165.605 25.3867 164.387 24.3086C163.168 23.207 161.551 22.6562 159.535 22.6562C157.66 22.6562 156.125 23.0898 154.93 23.957C153.758 24.8242 153.172 25.9844 153.172 27.4375C153.172 28.75 153.723 29.7695 154.824 30.4961C155.926 31.2227 158.152 31.9609 161.504 32.7109C164.855 33.4375 167.48 34.3164 169.379 35.3477C171.301 36.3555 172.719 37.5742 173.633 39.0039C174.57 40.4336 175.039 42.168 175.039 44.207C175.039 47.6289 173.621 50.4062 170.785 52.5391C167.949 54.6484 164.234 55.7031 159.641 55.7031C156.523 55.7031 153.746 55.1406 151.309 54.0156C148.871 52.8906 146.973 51.3438 145.613 49.375C144.254 47.4062 143.574 45.2852 143.574 43.0117H151.871C151.988 45.0273 152.75 46.5859 154.156 47.6875C155.562 48.7656 157.426 49.3047 159.746 49.3047C161.996 49.3047 163.707 48.8828 164.879 48.0391C166.051 47.1719 166.637 46.0469 166.637 44.6641Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-5" d="M205.238 55C204.863 54.2734 204.535 53.0898 204.254 51.4492C201.535 54.2852 198.207 55.7031 194.27 55.7031C190.449 55.7031 187.332 54.6133 184.918 52.4336C182.504 50.2539 181.297 47.5586 181.297 44.3477C181.297 40.293 182.797 37.1875 185.797 35.0312C188.82 32.8516 193.133 31.7617 198.734 31.7617H203.973V29.2656C203.973 27.2969 203.422 25.7266 202.32 24.5547C201.219 23.3594 199.543 22.7617 197.293 22.7617C195.348 22.7617 193.754 23.2539 192.512 24.2383C191.27 25.1992 190.648 26.4297 190.648 27.9297H182.105C182.105 25.8438 182.797 23.8984 184.18 22.0938C185.562 20.2656 187.438 18.8359 189.805 17.8047C192.195 16.7734 194.855 16.2578 197.785 16.2578C202.238 16.2578 205.789 17.3828 208.438 19.6328C211.086 21.8594 212.445 25 212.516 29.0547V46.2109C212.516 49.6328 212.996 52.3633 213.957 54.4023V55H205.238ZM195.852 48.8477C197.539 48.8477 199.121 48.4375 200.598 47.6172C202.098 46.7969 203.223 45.6953 203.973 44.3125V37.1406H199.367C196.203 37.1406 193.824 37.6914 192.23 38.793C190.637 39.8945 189.84 41.4531 189.84 43.4688C189.84 45.1094 190.379 46.4219 191.457 47.4062C192.559 48.3672 194.023 48.8477 195.852 48.8477Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-6" d="M219.969 35.6992C219.969 29.793 221.352 25.082 224.117 21.5664C226.906 18.0273 230.598 16.2578 235.191 16.2578C239.527 16.2578 242.938 17.7695 245.422 20.793L245.809 16.9609H253.508V53.8398C253.508 58.832 251.949 62.7695 248.832 65.6523C245.738 68.5352 241.555 69.9766 236.281 69.9766C233.492 69.9766 230.762 69.3906 228.09 68.2188C225.441 67.0703 223.426 65.5586 222.043 63.6836L226.086 58.5508C228.711 61.668 231.945 63.2266 235.789 63.2266C238.625 63.2266 240.863 62.4531 242.504 60.9062C244.145 59.3828 244.965 57.1328 244.965 54.1562V51.5898C242.504 54.332 239.223 55.7031 235.121 55.7031C230.668 55.7031 227.023 53.9336 224.188 50.3945C221.375 46.8555 219.969 41.957 219.969 35.6992ZM228.477 36.4375C228.477 40.2578 229.25 43.2695 230.797 45.4727C232.367 47.6523 234.535 48.7422 237.301 48.7422C240.746 48.7422 243.301 47.2656 244.965 44.3125V27.5781C243.348 24.6953 240.816 23.2539 237.371 23.2539C234.559 23.2539 232.367 24.3672 230.797 26.5938C229.25 28.8203 228.477 32.1016 228.477 36.4375Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-7" d="M279.066 55.7031C273.652 55.7031 269.258 54.0039 265.883 50.6055C262.531 47.1836 260.855 42.6367 260.855 36.9648V35.9102C260.855 32.1133 261.582 28.7266 263.035 25.75C264.512 22.75 266.574 20.418 269.223 18.7539C271.871 17.0898 274.824 16.2578 278.082 16.2578C283.262 16.2578 287.258 17.9102 290.07 21.2148C292.906 24.5195 294.324 29.1953 294.324 35.2422V38.6875H269.469C269.727 41.8281 270.77 44.3125 272.598 46.1406C274.449 47.9688 276.77 48.8828 279.559 48.8828C283.473 48.8828 286.66 47.3008 289.121 44.1367L293.727 48.5312C292.203 50.8047 290.164 52.5742 287.609 53.8398C285.078 55.082 282.23 55.7031 279.066 55.7031ZM278.047 23.1133C275.703 23.1133 273.805 23.9336 272.352 25.5742C270.922 27.2148 270.008 29.5 269.609 32.4297H285.887V31.7969C285.699 28.9375 284.938 26.7812 283.602 25.3281C282.266 23.8516 280.414 23.1133 278.047 23.1133Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-8" d="M313.344 3.8125L328.109 43.0469L342.84 3.8125H354.336V55H345.477V38.125L346.355 15.5547L331.238 55H324.875L309.793 15.5898L310.672 38.125V55H301.812V3.8125H313.344Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
				<path class="title-9" d="M380.809 55.7031C375.395 55.7031 371 54.0039 367.625 50.6055C364.273 47.1836 362.598 42.6367 362.598 36.9648V35.9102C362.598 32.1133 363.324 28.7266 364.777 25.75C366.254 22.75 368.316 20.418 370.965 18.7539C373.613 17.0898 376.566 16.2578 379.824 16.2578C385.004 16.2578 389 17.9102 391.812 21.2148C394.648 24.5195 396.066 29.1953 396.066 35.2422V38.6875H371.211C371.469 41.8281 372.512 44.3125 374.34 46.1406C376.191 47.9688 378.512 48.8828 381.301 48.8828C385.215 48.8828 388.402 47.3008 390.863 44.1367L395.469 48.5312C393.945 50.8047 391.906 52.5742 389.352 53.8398C386.82 55.082 383.973 55.7031 380.809 55.7031ZM379.789 23.1133C377.445 23.1133 375.547 23.9336 374.094 25.5742C372.664 27.2148 371.75 29.5 371.352 32.4297H387.629V31.7969C387.441 28.9375 386.68 26.7812 385.344 25.3281C384.008 23.8516 382.156 23.1133 379.789 23.1133Z" stroke="#00B2FF" stroke-width="6" mask="url(#path-1-outside-1)"/>
			</g>
			<defs>
				<filter id="filter0_d" x="0.203125" y="0.8125" width="403.163" height="80.1641" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
					<feOffset dy="4"/>
					<feGaussianBlur stdDeviation="2"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
				</filter>
			</defs>
		</svg>

	);
}

export default TitleSvg;