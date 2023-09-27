interface InputProps {
	placeholder: string;
	register: any;
	id: string;
	type: string;
	autoComplete?: string;
	className?: string;
}

const Input = ({ register, id, placeholder, ...rest }: InputProps) => {
	return (
		<div className={`${rest.className}`}>
			<label
				className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
				htmlFor={id}
			>
				{placeholder}
			</label>
			<input
				{...rest}
				id={id}
				className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
				placeholder={placeholder}
				{...register(id)}
			/>
		</div>
	);
};

export default Input;
