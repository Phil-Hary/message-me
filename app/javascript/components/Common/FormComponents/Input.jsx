import * as React from 'react';
//rounded w-400 h-10 px-5 border active:border-blue-400 active:shadow-2xl
export const Input = ({
	labelName,
	labelClassName,
	type,
	value,
	className,
	placeholder,
	onChange,
	...props

}) => {
	const [ labelClass, setLabelClass ] = React.useState(labelClassName);
	const [ inputClass, setInputClass ] = React.useState(className);

	const handleFocus = () => {
		setLabelClass(labelClass + " text-blue-400");
		setInputClass(inputClass + " border-blue-400");
	}

	const handleBlur = () => {
		setLabelClass(labelClassName);
		setInputClass(className);
	}

	return(
		<>
			<label
				htmlFor={labelName}
				className={labelClass}
			>
				{labelName}
			</label>
			<input
				id={labelName}
				type={type}
				value={value}
				className={inputClass}
				placeholder={placeholder}
				onChange={(e) => {onChange(e.target.value)}}
				onFocus={handleFocus}
				onBlur={handleBlur}
				{ ...props }
			/>

		</>
	);
}

