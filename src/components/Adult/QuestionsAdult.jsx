import { useState } from 'react';

const QuestionsAdult = () => {
	const [openBlocks, setOpenBlocks] = useState([]);

	const toggleBlock = index => {
		setOpenBlocks(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
		);
	};

	const questions = [
		{
			id: 0,
			question: 'Як довго триває курс навчання онлайн англійської мови?',
			answer: (
				<div className='mt-[60px]'>
					<p>
						Один рівень англійської мови -це 3 семестри по 36 уроків. Якщо все
						іде по графіку без форс -мажорів, то 3 місяці продовжуєтьься один
						семестр та 9 місяців 1 рівень англійської мови оналйн.
					</p>
				</div>
			),
		},
		{
			id: 1,
			question: 'Коли я зможу заговорити англійською?',
			answer: (
				<div className='mt-[60px]'>
					<p>
						Говорити всі студенти починають вже з першого уроку, тобто
						заговорите ви зразу на своєму рівні англійської мови.
					</p>
				</div>
			),
		},
		{
			id: 2,
			question: 'Звідки англомовні вчителі, з Америки?',
			answer: (
				<div className='mt-[60px]'>
					<p>
						Всі вчителі підбираються дуже ретельно. Це можуть бути вчителі не
						тільки з Америки, але і з інших англовомних країн, де англіська мови
						є основною мовою країни, всі наші вчителі розмовляють англійської з
						дитинства. Чи видаєте ви сертифікат після курсу? Так, після
						закінчення кожного курсу ви отримаєте сертифікат на пошту.
					</p>
				</div>
			),
		},
		{
			id: 3,
			question: 'Чи видаєте ви сертифікат після курсу англійської мови?',
			answer: (
				<div className='mt-[60px]'>
					<p className='mb-5'>
						Так, після закінчення кожного курсу ви отримаєте сертифікат на
						пошту.
					</p>
				</div>
			),
		},
		{
			id: 4,
			question: 'Який графік занять онлайн англійської?',
			answer: (
				<div className='mt-[60px]'>
					<p className='mb-5'>
						Графік групових занять встановлює школа, це можуть бути ранкові або
						вечірні години, також є групи вихідного дня. Парні та індивідуальні
						уроки за домовленістью з вчителем, обговорюється як правило на
						пробному уроці.
					</p>
					<p>P.S. В з’язку з віключенням світла графік може змінюватись.</p>
				</div>
			),
		},
	];

	return (
		<section className='sm:pt-[90px] sm:pb-[100px] pb-[50px] pt-0 md:pt-[108px] bg-[#FEFCFB]'>
			<div className='content'>
				<h2 className='section_title text-center mb-10 md:mb-20'>
					Загальні питання про курси <br className='lg:block hidden' />
					онлайн англійської мови
				</h2>
				<span className='block h-[1px] bg-[#B5b5b5]' />
				{questions.map((q, index) => (
					<div
						key={q.id}
						className='select-none relative'
						onClick={() => toggleBlock(index)}
					>
						<div
							className={`pt-[15px] lg:pt-[30px] pb-[20px] lg:pb-[31px] border-b border-b-[#b5b5b5]`}
						>
							<h5 className='lg:text-3xl text-lg s:text-xl md:text-2xl xl:text-4xl max-w-[90%] sm:max-w-[90%] xl:max-w-[85%] font-bold'>
								{q.question}
							</h5>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='14'
								viewBox='0 0 24 14'
								fill='none'
								className={`absolute top-[40px] right-0 s:right-2 sm:hidden block cursor-pointer duration-300 ${
									openBlocks.includes(index) ? 'rotate-180' : ''
								}`}
							>
								<path
									d='M21.8643 2L11.9319 11.9324L1.99954 2'
									stroke='#A032C7'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<svg
								className={`absolute top-[35px] lg:top-[50px] right-2 sm:block hidden cursor-pointer duration-300 ${
									openBlocks.includes(index) ? 'rotate-180' : ''
								}`}
								xmlns='http://www.w3.org/2000/svg'
								width='37'
								height='21'
								viewBox='0 0 37 21'
								fill='none'
							>
								<path
									d='M34.6089 2L18.5412 18.0676L2.4736 2'
									stroke='#A032C7'
									strokeWidth='4'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<div
								className={`text-base sm:text-[22px] grid gap-6 sm:leading-[28px] lg:max-w-[80%] ${
									openBlocks.includes(index)
										? 'visible-content'
										: 'hidden-content'
								}`}
							>
								{q.answer}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default QuestionsAdult;
