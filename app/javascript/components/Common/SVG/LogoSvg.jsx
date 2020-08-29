import * as React from 'react';

const LogoSvg = () => {
	return(
		<svg width="118" height="40" className="logo" viewBox="0 0 118 108" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="M" filter="url(#filter0_d)">
				<path d="M4.36 5.24799V0.927997H30.856L72.328 89.056L67.576 100H48.856L4.36 5.24799ZM85.72 58.384H85.144L75.496 81.712L63.112 55.216L85.72 0.927997H113.08V100H85.72V58.384ZM4.36 19.504L30.856 75.952V100H4.36V19.504Z" fill="#0393FC"/>
			</g>
			<defs>
				<filter id="filter0_d" x="0.360001" y="0.928009" width="116.72" height="107.072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
};

export default LogoSvg;
