import mob from '../../assets/sign_mob.png';
import sigh_img from '../../assets/signup.png';
import ContactForm from '../ContactForm';

const SignUp = ({ bg, id }) => {
	return (
		<section
			className='pt-[50px] sm:pt-[80px] pb-[50px] sm:pb-[100px]'
			style={{ background: bg }}
			id={id}
		>
			<div className='content'>
				<h2 className='section_title mx-auto text-center max-w-[90%] sm:max-w-[744px] mb-[10px] sm:mb-[50px]'>
					Мені все зрозуміло, хочу записати свою дитину до вас!
				</h2>
				<div className='flex lg:flex-row flex-col justify-center'>
					<img
						className='sign_img relative bottom-[-10px] object-cover block sm:hidden'
						src={mob}
					/>
					<img
						loading='lazy'
						className='sign_img relative z-10 object-cover w-full sm:block hidden lg:w-[450px] lg:bottom-0 bottom-[-10px] xl:w-[550px] 2xl:w-[710px] lg:left-4'
						src={sigh_img}
					/>
					<ContactForm sign={true} />
				</div>
			</div>
		</section>
	);
};

export default SignUp;
