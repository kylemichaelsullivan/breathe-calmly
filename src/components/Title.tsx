type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return (
		<h1 className='Title prose text-center font-serif text-5xl font-bold'>
			{title}
		</h1>
	);
}

export default Title;
