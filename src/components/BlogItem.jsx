import { NavLink } from 'react-router-dom';

const BlogItem = ({ id, title, img }) => {
	return (
		<NavLink className='block' data-aos='fade-up' to={`/blog/${id}`}>
			<div className='w-full flex items-center justify-center bg-[#99DBFE] rounded-[20px] p-5'>
				<img
					loading='lazy'
					className='duration-200 h-[200px] hover:scale-105'
					src={img}
					alt={title}
				/>
			</div>
			<h3 className='font-bold text-xl sm:text-2xl mt-5'>{title}</h3>
		</NavLink>
	);
};

export default BlogItem;
