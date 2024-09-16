import advant_img from '../../assets/adult/advantages.png';
import Btn from '../Btn';

const items = [
	{
		num: '1',
		color: '#73ACFF',
		title: 'ІННОВАЦІЙНО:',
		text: (
			<p className='text-lg sm:text-[22px] leading-[28px]'>
				навчання проходить на інтерактивній платформі Notes для дорослих. Всі
				матеріали, графіки, тести, підручники в одному місці, відео та
				безкоштовні курси.
			</p>
		),
	},
	{
		num: '2',
		color: '#99DBFE',
		title: 'ПРОФЕСІЙНО:',
		text: (
			<p className='text-lg sm:text-[22px] leading-[28px]'>
				всі наші викладачі проходять підготовку в
				<span className='font-bold'> Teaching Centre by Nadia Diachuk</span> , а{' '}
				<span className='font-medium'>НЕЙТІВИ</span> підбираються по особливим
				критеріям.
			</p>
		),
	},
	{
		num: '3',
		color: '#FBA226',
		title: 'ЗРУЧНО:',
		text: (
			<p className='text-lg sm:text-[22px] leading-[28px]'>
				для начання можна використовувати любий гаджет, навчатись чи хоч з дому,
				чи з будь-якої точки на карті світу.
			</p>
		),
	},
	{
		num: '4',
		color: '#534C72',
		title: 'НАВЧАННЯ:',
		text: (
			<p className='text-lg sm:text-[22px] leading-[28px]'>
				за міжнародною системою
				<span className='font-bold'> CEFR</span>.
			</p>
		),
	},
];

const AdvantagesAdult = () => {
	return (
		<section className='pb-[50px] sm:pb-[100px]'>
			<div className='content'>
				<div className='flex lg:flex-row flex-col items-center lg:items-start sm:gap-[120px] gap-[50px] mb-[50px] sm:mb-[100px]'>
					<div data-aos='zoom-out-left'>
						<h2 className='section_title sm:mb-10 lg:max-w-[700px]'>
							Онлайн курси англійської мови для дорослих в школі StartSpaekEn
						</h2>
						<img
							className='sm:block hidden text-center mx-auto'
							src={advant_img}
						/>
					</div>
					<div className='flex flex-col lg:items-start items-center gap-[67px]'>
						{items.map(item => {
							return (
								<div
									data-aos='zoom-out-right'
									key={item.num}
									className='relative w-full py-[26px] min-h-[135px] pl-[45px] sm:pl-[60px] xl:pl-[80px] pr-[25px] sm:pr-[36px] 2xl:pr-[46px] shadow_item rounded-[20px] bg-[#FEFCFB] min-w-[90%]  max-w-[90%] lg:max-w-[633px]'
								>
									<div
										className='absolute top-[-15px] sm:top-[-30px] xl:top-[-50px] text-[#FEFCFB] text-[60px] xl:text-[80px] font-bold leading-[75%] left-[-30px] sm:left-[-50px] rounded-[50%] flex items-center justify-center size-[70px] sm:size-[90px] xl:size-[115px]'
										style={{ background: item.color }}
									>
										{item.num}
									</div>
									<h4 className='font-bold text-[24px] mb-1 leading-[28px]'>
										{item.title}
									</h4>
									{item.text}
								</div>
							);
						})}
					</div>
				</div>
				<Btn
					href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
					target='_blank'
					text='Дізнатись свій рівень EN'
					btn_style='test_btn'
				/>
			</div>
		</section>
	);
};

export default AdvantagesAdult;
