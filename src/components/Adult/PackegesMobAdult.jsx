import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { packages } from './PackagesAdult';

const PackegesMobAdult = ({ setShowForm }) => {
	return (
		<div className='sm:hidden block mb-10 packages_items'>
			<Swiper
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				modules={[Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
			>
				{packages.map(pack => {
					return (
						<SwiperSlide key={pack.title}>
							<div
								key={pack.color}
								className='flex flex-col w-[85%] shadow_itemPack rounded-[20px] bg-[#F4F4F5] pt-[23px] pb-[35px] px-[25px] h-[635px]'
							>
								<div className='border-b border-b-[#B5b5b5] mb-[28px] h-[111px] flex flex-col items-center justify-center '>
									<h4 className='font-bold text-[30px] leading-[46px]'>
										{pack.title}
									</h4>
									<p className='font-medium text-[28px] leading-[46px]'>
										{pack.price}
										<span className='text-[24px] font-normal'>
											/{pack.time}
										</span>{' '}
									</p>
								</div>
								<ul className='flex flex-col flex-1 gap-[17px] text-lg s:text-[22px] leading-[28px]'>
									{pack.list_items.map(
										(item, index) =>
											item && (
												<li
													key={index}
													className='flex items-center gap-[17px] '
												>
													<img src={pack.img} alt='icon' />
													{item}
												</li>
											)
									)}
								</ul>
								<div className='mt-auto'>
									<div className='pl-[23px] text-lg mb-5'>
										<p>
											<span className='font-bold text-2xl s:text-[32px] leading-[28px]'>
												{pack.fullPrice}
											</span>{' '}
											/пакет
										</p>
										<p>
											+ {pack.title !== '"Уроки з нейтів"' ? '750' : '500'} грн
											за підручник
										</p>
										<p>(може бути розстрочка на два платежі)</p>
										{pack.title !== '"Уроки з нейтів"' ? (
											<p className='italic'>
												2 семестри - це 1 рівень англійської
											</p>
										) : null}
									</div>
									<button
										style={{ background: pack.color, color: pack.textColor }}
										className='cursor-pointer py-[13px] mt-[17px] text-lg s:text-xl duration-300 hover:scale-95 font-bold  text-center w-full rounded-[6px]'
									>
										Xочу навчатись
									</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default PackegesMobAdult;
