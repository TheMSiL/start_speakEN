import img from '../../assets/adult/Why.png';

const WhyUsAdult = () => {
	return (
		<section className='py-10 sm:py-[90px] bg-[#8CE0F8]'>
			<div className='content flex lg:flex-row flex-col items-end justify-between gap-5 2xl:gap-12'>
				<div
					data-aos='zoom-out-right'
					className='flex flex-col justify-center items-center lg:items-end gap-5'
				>
					<h2 className='font-bold text-2xl s:text-3xl lg:text-start text-center sm:text-[38px] 2xl:text-[48px] mb-5 sm:mb-10 leading-normal sm:leading-[46px] xl:leading-[56px] lg:max-w-[658px]'>
						Чому онлайн курси англійської для дорослих в{' '}
						<span className='text-[#A032c7]'>StartSpaekEn</span> ефективні та
						результативні?
					</h2>
					<img className='s:block hidden' src={img} />
				</div>
				<div
					data-aos='zoom-out-left'
					className='bg-[#FEFCFB] lg:max-w-[500px] 2xl:max-w-[600px] 3xl:max-w-[740px] rounded-[20px] shadow_item sm:pt-[37px] pt-[20px] pr-[20px] pl-[20px] sm:pr-[32px] sm:pl-[46px] text-base s:text-lg sm:text-[22px] leading-7 pb-[20px] sm:pb-[46px]'
				>
					<p className='mb-2 s:mb-5'>
						Програма в наших підручниках англійської мови онлайн розроблена на
						конткретний результат для кожного рівня.
					</p>
					<p className='mb-2 s:mb-5'>
						Сучасна онлайн-платформа <span className='font-bold'>NOTES </span>
						для вивчення англійської мови, де комфортно навчатись та бути в
						середовищі, є дуже важливим при вивченні іноземної мови.
					</p>
					<p className='mb-2 s:mb-5'>
						Пройшовши тест ти почнеш з того рівня який вже маєш, вдосконалиш
						свої знання та вийдеш на наступний рівень.
					</p>
					<p className='mb-2 s:mb-5'>
						Немає вікових обмежень, тому що весь матеріал поділений по віковим
						категоріям.
					</p>
					Наші викладачі обираються дуже ретельно, особливо{' '}
					<span className='font-bold'>нейтіви</span>.
				</div>
			</div>
		</section>
	);
};

export default WhyUsAdult;
