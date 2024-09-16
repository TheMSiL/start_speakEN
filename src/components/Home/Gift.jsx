import gift from '../../assets/gift.png';
import Btn from '../Btn';
import { useState, useEffect } from 'react';

const Gift = () => {
	const [visibleBlock, setVisibleBlock] = useState(null);

	useEffect(() => {
		if (visibleBlock) {
			const block = document.getElementById(visibleBlock);
			if (block) {
				block.scrollIntoView({ behavior: 'smooth' });

				// Set a timeout to reset visibleBlock after scrolling
			}
			const resetVisibleBlock = () => setVisibleBlock(null);
			setTimeout(resetVisibleBlock, 500); // Adjust timeout as needed
		}
	}, [visibleBlock]);
	return (
		<section className='sm:py-[40px] py-[50px] mt-[50px] bg-[#91E2F8]'>
			<div className='content flex md:flex-row flex-col-reverse items-center justify-between gap-5 lg:gap-10 2xl:gap-20'>
				<div data-aos='fade-up-right'>
					<h2 className='lg:leading-[60px] leading-normal sm:leading-[52px] text-[28px] s:text-[32px] sm:text-[42px] font-bold lg:text-[48px] mb-12 sm:mb-[70px] md:max-w-[540px]'>
						Хочете зробити подарунок який може змінити майбутне?
					</h2>
					<Btn
						click={() => setVisibleBlock('sign')}
						text='Заказати сертифікат'
						btn_style='main_btn gift_btn'
					/>
				</div>
				<img
					data-aos='fade-up-left'
					loading='lazy'
					className='md:w-1/2 w-[352px] sm:w-[650px]'
					src={gift}
				/>
			</div>
		</section>
	);
};

export default Gift;
