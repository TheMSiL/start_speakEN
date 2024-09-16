import ContactForm from '../components/ContactForm';
import Gift from '../components/Home/Gift';
import Main from '../components/Home/Main';
import Packages from '../components/Home/Packages';
import Promo from '../components/Home/Promo';
import Questions from '../components/Home/Questions';
import Reviews from '../components/Home/Reviews';
import SignUp from '../components/Home/SignUp';
import StudyProcess from '../components/Home/StudyProcess';
import StudyStart from '../components/Home/StudyStart';
import Team from '../components/Home/Team';
import Views from '../components/Home/Views';
import WhyUs from '../components/Home/WhyUs';

const HomePage = () => {
	return (
		<>
			<Main />
			<section className='flex items-center justify-center pb-[50px] sm:pb-[100px]'>
				<div className='content'>
					<ContactForm
						animate={true}
						title='Запишись на пробний урок'
					/>
				</div>
			</section>
			<Views />
			<WhyUs />
			<Packages />
			<Promo />
			<StudyStart />
			<StudyProcess />
			<Team />
			<Reviews />
			<Gift />
			<Questions />
			<SignUp bg='#FEFCFB' id='sign' />
		</>
	);
};

export default HomePage;
