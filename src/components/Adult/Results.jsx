import { useEffect, useState } from 'react';

const items = [
	{
		num: 'A1',
		delay: 300,
		color: '#534C72',
		title: 'Elementary',
		text: 'До 500-1500 слів. Зможете будувати прості речення та писати короткі тексти до 100-150 слів. Привітання, прощання, погода.',
	},
	{
		num: 'B2',
		delay: 400,
		color: '#FBA226',
		title: 'Upper-Intermediate',
		text: 'До 4000 слів. Зможете розказати про свої проблеми лікарю, поділитись своїми емоціями, поговорити про політику та моду, та читати легко не складну літературу.',
	},

	{
		num: 'A2',
		delay: 350,
		color: '#73ACFF',
		title: 'Pre-Intermediate',
		text: 'До 2000 слів. Зможете поговорити на тему де і ким працюєте, хобі, спорт, їжа, подорожі. Можете зрозуміти короткі репортажі та новини.',
	},
	{
		delay: 450,
		num: 'C1',
		color: '#A032C7',
		title: 'Advanced',
		text: 'До 6000 слів. Рівень для робити де вам потрібно їздити на наукові конференції, слухати лекціі в університеті, говорити на теми культури, технологій, приймати участь у виставках, форумах, бути спікером на англійській мові, вести блог і тд.',
	},
	{
		num: 'B1',
		delay: 400,
		color: '#99DBFE',
		title: 'Intermediate',
		text: 'До 3000 слів.  Зможете описувати людей, розповідати про що був фільм чи книга, обговорювати робочі моменти, тобто на цьому рівні можете працювати в або з іноземними компаніями.',
	},
];

const itemsMob = [
	{
		num: 'A1',
		color: '#534C72',
		title: 'Elementary',
		text: 'До 500-1500 слів. Зможете будувати прості речення та писати короткі тексти до 100-150 слів. Привітання, прощання, погода.',
	},
	{
		num: 'A2',
		color: '#73ACFF',
		title: 'Pre-Intermediate',
		text: 'До 2000 слів. Зможете поговорити на тему де і ким працюєте, хобі, спорт, їжа, подорожі. Можете зрозуміти короткі репортажі та новини.',
	},
	{
		num: 'B1',
		color: '#99DBFE',
		title: 'Intermediate',
		text: 'До 3000 слів.  Зможете описувати людей, розповідати про що був фільм чи книга, обговорювати робочі моменти, тобто на цьому рівні можете працювати в або з іноземними компаніями.',
	},
	{
		num: 'B2',
		color: '#FBA226',
		title: 'Upper-Intermediate',
		text: 'До 4000 слів. Зможете розказати про свої проблеми лікарю, поділитись своїми емоціями, поговорити про політику та моду, та читати легко не складну літературу.',
	},
	{
		num: 'C1',
		color: '#A032C7',
		title: 'Advanced',
		text: 'До 6000 слів. Рівень для робити де вам потрібно їздити на наукові конференції, слухати лекціі в університеті, говорити на теми культури, технологій, приймати участь у виставках, форумах, бути спікером на англійській мові, вести блог і тд.',
	},
];
const Results = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1050);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const data = isMobile ? itemsMob : items;
	return (
		<section className='sm:pt-[100px] pt-[50px] pb-[50px] sm:pb-[120px]'>
			<div className='content'>
				<h2 className='section_title text-center mb-10 sm:mb-[70px]'>
					Ваші результати
				</h2>
				<div className='grid lg:grid-cols-2 justify-between gap-results'>
					{data.map(item => {
						return (
							<div
								data-aos='fade-up'
								data-aos-delay={item.delay}
								className='flex gap-4'
								key={item.num}
							>
								<div
									className='text-[50px] sm:text-[80px] w-[65px] xl:text-[100px] sm:w-[100px] xl:w-[150px] font-bold'
									style={{ color: item.color }}
								>
									{item.num}
								</div>
								<div className='w-[90%] sm:w-[85%]'>
									<h4 className='text-xl sm:text-2xl font-bold mt-2'>
										{item.title}
									</h4>
									<p className='text-base s:text-lg sm:text-xl xl:text-[22px] leading-7'>
										{item.text}
									</p>
								</div>
							</div>
						);
					})}
					<div
						data-aos='fade-up'
						data-aos-delay='500'
						className='rounded-[10px] italic p-3 border-2 mb-10  border-[#99DBFE] s:text-lg text-base sm:text-xl xl:text-[22px] font-medium leading-7'
					>
						Ми на 100% впевнені в нашій професійній платформі, підручниках ,
						середовищі та наших викладачах. Просто займайтесь по графіку,
						знайдіть мотивацію і все у вас вийде!
					</div>
				</div>
			</div>
		</section>
	);
};

export default Results;
