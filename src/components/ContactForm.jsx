import { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import form_img from '../assets/form_img.png';

const ContactForm = ({ setShowForm, animate, sign, adult, title }) => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [active, setActive] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const [isSend, setIsSend] = useState(false);

	const formRef = useRef(null);

	const validatePhone = phone => {
		const phoneRegex = /^\+380 \d{2} \d{3} \d{4}$/;
		return phoneRegex.test(phone);
	};

	const onSubmit = async event => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append('access_key', '3fe4bf41-ae25-417a-9159-d439bd8b7838');
		formData.append('contact_method', active);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		})
			.then(res => res.json())
			.then(() => {
				setIsSend(true);
				setTimeout(() => {
					setIsSend(false);
				}, 5000);
			});
	};

	useEffect(() => {
		const handleClickOutsideMenu = event => {
			if (formRef.current && !formRef.current.contains(event.target)) {
				setShowForm(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutsideMenu);
		return () => {
			document.removeEventListener('mousedown', handleClickOutsideMenu);
		};
	}, [setShowForm]);

	useEffect(() => {
		if (name.trim() !== '' && validatePhone(phone)) {
			setIsFormValid(true);
		} else {
			setIsFormValid(false);
		}
	}, [name, phone]);

	return (
		<form
			data-aos={animate && 'zoom-out'}
			onSubmit={onSubmit}
			className={`rounded-[20px] border-4 border-[#99DBFE] pt-[42px] pb-[5px] sm:pb-[50px] ${
				adult ? 'bg-[#F4F4F5]' : 'bg-[#FEFCFB]'
			} shadow_item relative ${
				sign
					? 'lg:border-l-0 border-t-0 w-full lg:pt-[42px] pt-[35px] sm:pt-[60px] lg:border-t-4 2xl:pl-[92px] lg:w-[700px] pl-[24px] sm:pl-[50px] rounded_formMob'
					: `${
							title
								? 'w-full p-[25px] sm:p-[50px]'
								: '2xl:pl-[117px] pl-[25px] sm:pl-[52px] s:w-[90%] md:w-[80%] lg:w-1/2'
					  }`
			} 2xl:pr-[107px] pr-[25px] sm:pr-[50px]`}
			ref={formRef}
		>
			{!adult && !title && (
				<img
					className='absolute right-2 s:right-8 sm:right-4 lg:right-2 top-6 sm:top-4 lg:top-2 sm:size-[100px] size-[60px]'
					src={form_img}
					alt='Form'
					loading='lazy'
				/>
			)}
			<h2
				className={`3xl:text-[50px] max-w-[670px] font-bold sm:leading-[60px] text-[30px] sm:text-[42px] 2xl:text-[46px] mb-5 sm:mb-10 ${
					title ? 'text-center' : 'text-left'
				}`}
			>
				{title ? title : 'Залишити заявку'}
			</h2>

			<input
				className='block w-full text-[#8D8B8B] bg-transparent text-base sm:text-[22px] leading-[22px] border-b border-b-[#8D8B8B] mb-[27px] pb-1'
				type='text'
				placeholder='Ім’я'
				value={name}
				onChange={e => setName(e.target.value)}
				required
				name='name'
			/>
			<InputMask
				mask='+380 99 999 9999'
				value={phone}
				onChange={e => setPhone(e.target.value)}
				onFocus={() => {
					if (phone === '') setPhone('+380 ');
				}}
			>
				{() => (
					<input
						className='block w-full text-[#8D8B8B] bg-transparent text-base sm:text-[22px] leading-[22px] border-b border-b-[#8D8B8B] pb-1'
						type='text'
						placeholder='+380 99 999 9999'
						required
						name='phone'
					/>
				)}
			</InputMask>
			<p className='mt-[31px] sm:mt-[46px] text-base sm:mb-[30px] mb-[22px] font-medium sm:text-[22px] leading-[22px]'>
				Оберіть зручний спосіб для зв’язку
			</p>
			<div className='flex items-center gap-2 s:gap-5 xl:justify-between mb-[30px] sm:mb-[43px]'>
				<div
					className='flex items-center gap-2 sm:gap-5 cursor-pointer'
					onClick={() => setActive('Дзвінок')}
				>
					{active === 'Дзвінок' ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34'
							height='34'
							viewBox='0 0 34 34'
							fill='none'
							className='sm:size-[34px] size-[20px]'
						>
							<circle cx='17' cy='17' r='17' fill='#FB9D18' />
							<path
								d='M10.2642 16.4203L15.3325 23.1238C15.7739 23.7076 16.6724 23.635 17.0143 22.9878L20.0081 17.3208L23.7359 10.2642'
								stroke='#FEFCFB'
								strokeWidth='4'
								strokeLinecap='round'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34'
							height='34'
							viewBox='0 0 34 34'
							fill='none'
							className='sm:size-[34px] size-[20px]'
						>
							<circle cx='17' cy='17' r='16' stroke='#8D8B8B' strokeWidth='2' />
						</svg>
					)}
					<p className='text-base sm:text-[22px] leading-[22px]'>Дзвінок</p>
				</div>
				<div
					className='flex items-center gap-3 cursor-pointer'
					onClick={() => setActive('Телеграм')}
				>
					{active === 'Телеграм' ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34'
							height='34'
							viewBox='0 0 34 34'
							fill='none'
							className='sm:size-[34px] size-[20px]'
						>
							<circle cx='17' cy='17' r='17' fill='#FB9D18' />
							<path
								d='M10.2642 16.4203L15.3325 23.1238C15.7739 23.7076 16.6724 23.635 17.0143 22.9878L20.0081 17.3208L23.7359 10.2642'
								stroke='#FEFCFB'
								strokeWidth='4'
								strokeLinecap='round'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34'
							height='34'
							viewBox='0 0 34 34'
							fill='none'
							className='sm:size-[34px] size-[20px]'
						>
							<circle cx='17' cy='17' r='16' stroke='#8D8B8B' strokeWidth='2' />
						</svg>
					)}
					<p className='text-base sm:text-[22px] leading-[22px]'>Телеграм</p>
				</div>
				<div
					className='flex items-center gap-3 cursor-pointer'
					onClick={() => setActive('Viber')}
				>
					{active === 'Viber' ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34'
							height='34'
							viewBox='0 0 34 34'
							fill='none'
							className='sm:size-[34px] size-[20px]'
						>
							<circle cx='17' cy='17' r='17' fill='#FB9D18' />
							<path
								d='M10.2642 16.4203L15.3325 23.1238C15.7739 23.7076 16.6724 23.635 17.0143 22.9878L20.0081 17.3208L23.7359 10.2642'
								stroke='#FEFCFB'
								strokeWidth='4'
								strokeLinecap='round'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34'
							height='34'
							viewBox='0 0 34 34'
							fill='none'
							className='sm:size-[34px] size-[20px]'
						>
							<circle cx='17' cy='17' r='16' stroke='#8D8B8B' strokeWidth='2' />
						</svg>
					)}
					<p className='text-base sm:text-[22px] leading-[22px]'>Viber</p>
				</div>
			</div>
			<button
				type='submit'
				className={`block w-full py-3 mb-5 sm:py-4 font-semibold leading-[22px] sm:text-[22px] text-base text-center text-[#FEFCFB] rounded-full ${
					isFormValid
						? 'bg-[#23BEC0] cursor-pointer duration-300 hover:bg-[#4dd9db]'
						: 'bg-[#8D8B8B] cursor-not-allowed'
				}`}
				disabled={!isFormValid}
			>
				Відправити
			</button>

			<div
				className='text-green-500 text-center font-semibold text-lg'
				style={isSend ? { opacity: 1 } : { opacity: 0 }}
			>
				Дякуємо, ми скоро з вами зв’яжемся!
			</div>
		</form>
	);
};

export default ContactForm;
