const Btn = ({ href, text, btn_style, target, click }) => {
	return (
		<a
			href={href}
			onClick={click && click}
			target={target && '_blank'}
			className={btn_style}
		>
			{text}
		</a>
	);
};

export default Btn;
