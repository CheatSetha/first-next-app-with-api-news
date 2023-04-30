import React from "react"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
import {
	MdAccountBalanceWallet,
	MdKeyboardArrowRight,
	MdTrendingUp,
	MdArrowForward,
	MdLocalPhone,
} from "react-icons/md"

import SwiperV2 from "./Swiper"

const MainHome = () => {
	return (
		<>
			<div className='flex  justify-between flex-wrap my-3'>
				<div className='man-img md:w-[200px] lg:w-[350px] rounded-lg '>
					<img
						className='w-full rounded-lg'
						src='https://images.pexels.com/photos/2698935/pexels-photo-2698935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt='main with glasses'
					/>
				</div>
				<div className='text-banner md:w-[460px] lg:w-[500px] flex flex-col justify-around '>
					<div>
						<h1 className='text-[22px] md:text-[35px] lg:text-[50px] font-bold text-start'>
							Meet the credit card of the future
						</h1>
						<p>
							We understand that managing your finances can be a dauting task.
							That is why we committed to providing you with the guidance.
						</p>
					</div>
					<input
						className='border-2 shadow-lg  p-3 text-white rounded-lg placeholder:text-slate-300 hover:border-l-4 hover:border-blue-800 hover:bg-gray-400'
						type='text'
						placeholder='Get the app'
					/>
				</div>
				{/* card section */}
				<div className='card-bank flex flex-col  justify-between'>
					<div className='card-top md:w-[380px] md:items-end md:self-end'>
						<img
							className='rounded-lg w-full object-cover'
							src='https://thefinancialtechnologyreport.com/wp-content/uploads/2022/07/Brex-300x201.png'
							alt='credit card img'
						/>
					</div>
					<div className='card-buttom md:w-[260px]  rounded-lg self-center'>
						<img
							className='object-cover '
							src='https://img.freepik.com/free-vector/illustration-credit-card-icon-isolated-white_1284-47653.jpg?w=740&t=st=1682781383~exp=1682781983~hmac=bd856c97cfa5bd284d389555ceb5d0a08f503097b49ca62ca16b15e46a2b580e'
							alt=''
						/>
					</div>
				</div>
			</div>
			{/* 2nd section */}
			<div className='bg-slate-200 rounded-lg p-2 mt-5 flex justify-evenly flex-wrap md:flex-nowrap'>
				<div className='l-content md:w-5/12 self-center '>
					<h2 className='text-[20px] md:text-[40px] font-bold'>
						Browse our set of banking services and offerings
					</h2>
					<p>
						we offer a variety of tools and resouces to help you manage your
						finances more effectively
					</p>
					<button className='my-2 md:mt-10 p-2 md:p-3 rounded-lg bg-yellow-400'>
						Learn mores <BsFillArrowUpRightCircleFill className='inline ml-2' />
					</button>
				</div>
				<div className=' grid grid-cols-2 gap-2 md:gap-4 lg:gap-5 w-full md:w-auto'>
					<div className='justify-center items-center flex  md:w-[200px] h-[200px] bg-white  rounded-lg shadow-sm'>
						<div>
							<div className='bg-yellow-400 p-3 rounded-full w-[50px] mx-auto'>
								<MdAccountBalanceWallet className='text-[25px] ' />
							</div>
							<p className='w-[50%] text-center block mx-auto mt-1'>
								Checking Account
							</p>
						</div>
					</div>
					<div className='justify-center items-center flex md:w-[200px] h-[200px] bg-white  rounded-lg shadow-sm'>
						<div>
							<div className='bg-yellow-400 p-3 rounded-full w-[50px] mx-auto'>
								<MdAccountBalanceWallet className='text-[25px] ' />
							</div>
							<p className='w-[50%] text-center block mx-auto mt-1'>
								Checking Account
							</p>
						</div>
					</div>
					<div className='justify-center items-center flex md:w-[200px] h-[200px] bg-white  rounded-lg shadow-sm'>
						<div>
							<div className='bg-yellow-400 p-3 rounded-full w-[50px] mx-auto'>
								<MdAccountBalanceWallet className='text-[25px] ' />
							</div>
							<p className='w-[50%] text-center block mx-auto mt-1'>
								Checking Account
							</p>
						</div>
					</div>
					<div className='justify-center items-center flex md:w-[200px] h-[200px] bg-white   rounded-lg shadow-sm'>
						<div>
							<div className='bg-yellow-400 p-3 rounded-full w-[50px] mx-auto'>
								<MdAccountBalanceWallet className='text-[25px] ' />
							</div>
							<p className='w-[50%] text-center block mx-auto mt-1'>
								Checking Account
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* 3rd section */}
			<h1 className='md:text-[50px] md:w-1/2 mx-auto text-center font-semibold my-3'>
				What makes our bank stand out from the rest?
			</h1>

			<div className='flex justify-between flex-wrap'>
				<div className='md:w-[40%] mb-5 md:mb-0'>
					{/* secury box */}
					<div className='border-l-4 px-5 border-sky-500'>
						<h3 className='md:text-[50px] font-semibold pb-3'>Security</h3>
						<p className='opacity-70'>
							One important feature of banking security is multi-factor
							authentication. This means that in addition to the treaditonal
							username and password, cutomers are required to provide additional
							verification.
						</p>
					</div>
					{/* list of cate?t */}
					<div className='border-l-4 px-5 '>
						<h3 className='md:text-[30px] font-semibold opacity-70 py-3'>
							Security <MdKeyboardArrowRight className='inline ' />{" "}
						</h3>
						<h3 className='md:text-[30px] font-semibold opacity-70 py-3'>
							Security <MdKeyboardArrowRight className='inline ' />{" "}
						</h3>
						<h3 className='md:text-[30px] font-semibold opacity-70 py-3'>
							Security <MdKeyboardArrowRight className='inline ' />{" "}
						</h3>
					</div>
				</div>
				{/* img box */}
				<div className='grid md:grid-cols-3 gap-y-4 md:gap-y-0  md:gap-4 md:w-[60%]'>
					<div>
						<img
							className='rounded-lg w-full  '
							src='https://www.ppcbank.com.kh/wp-content/uploads/2022/04/ekyc.jpg'
							alt=''
						/>
					</div>

					<div className='md:col-span-2  md:row-span-2 w-full '>
						<img
							className='rounded-lg w-full lg:h-[535px]'
							src='https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=''
						/>
					</div>
					<div>
						<img
							className='rounded-lg'
							src='https://www.bidc.com.kh/DataFiles/Imported/Images/Transfer%20to%20VN.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
			{/* mission part */}
			<section className='flex flex-wrap bg-slate-200 rounded-lg w-full mt-5 items-center justify-evenly'>
				<div className='ceo-img  my-6 self-center'>
					<img
						className='rounded-lg h-[43rem]  w-[42rem] object-cover object-top '
						src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt='ceo'
					/>
				</div>
				<div>
					<div className='text md:w-[550px] space-y-7 p-3'>
						<h1 className='text-[20px] md:text-[50px] font-bold'>
							Discover the mission & story behind our company
						</h1>
						<p>
							Discover is a US-based bank that was founded in 1985 with a
							mission to help people achieve a brighter financial future. The
							company was originally known as Sears Financial Network, but it
							was later acquired by Morgan Stanley
						</p>
						<div className='btn-group flex justify-between'>
							<button className='btn  p-3 bg-slate-900 text-white rounded-lg'>
								Learn More{" "}
								<MdTrendingUp className='inline ml-5 bg-white text-3xl p-1 rounded-full text-blue-700' />{" "}
							</button>
							<span>
								About us <MdArrowForward className='inline ml-3 mr-4 ' />{" "}
							</span>
						</div>
					</div>
				</div>
			</section>
			{/* our impacth in number */}
			<section>
				<div className=' flex flex-wrap md:flex-nowrap justify-around items-center gap-10'>
					<div className='img w-[80rem]'>
						<h1 className='text-[40px] my-7 font-bold'>
							Our impact in numbers
						</h1>
						<img
							className='rounded-lg'
							src='https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=''
						/>
					</div>
					<div className=''>
						<div className='content text-start mx-auto'>
							{" "}
							banking security is a crucial feature that helps to protect
							customers finanical information and prevent fraud. By implementing
							multi-factor authentication, encryption, and advanced fraud
							detection systems, banks can provide their customeers with secure{" "}
						</div>
						<div className=' grid text-center md:text-start md:grid-cols-2 gap-10 mx-auto'>
							<div className=''>
								<h5 className='font-bold text-[80px] '> 900k</h5>
								<p>Customer</p>
							</div>
							<div className=''>
								<h5 className='font-bold text-[80px] '> 97%</h5>
								<p>Customer</p>
							</div>
							<div className=''>
								<h5 className='font-bold text-[80px] '> 85% </h5>
								<p>Customer</p>
							</div>
							<div className=''>
								<h5 className='font-bold text-[80px] '> 300b</h5>
								<p>Customer</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className=' mt-10  flex justify-between flex-wrap'>
				<div className='md:w-1/2 space-y-14'>
					<h1 className='md:text-[40px] font-bold '>
						Open your account today and experience the next-generation banking
					</h1>

					<button className='btn  p-3 bg-slate-900 text-white rounded-lg'>
						Call us now{" "}
						<MdLocalPhone className='inline ml-5 bg-white text-3xl p-1 rounded-full text-blue-700' />{" "}
					</button>
				</div>
				<div className='bg-yellow-400 md:w-[38rem] rounded-l-[15rem] flex justify-center'>
					<div className='card mx-auto '>
						<img
							className='w-full'
							src='https://cdn-icons-png.flaticon.com/512/9334/9334565.png'
							alt='card'
						/>
					</div>
				</div>
			</section>
			{/* service */}
			<section>
				<h1 className='text-[50px] text-center font-bold md:w-1/2 mx-auto mt-5'>
					Our services are designed for businesses of all sizes
				</h1>
				<div className='flex gap-5 '>
					<div>
						<img
							className='rounded-lg'
							src='https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=''
						/>
					</div>
					<div>
						<img
							className='rounded-lg '
							src='https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=''
						/>
					</div>
					<div>
						<img
							className='rounded-lg'
							src='https://images.pexels.com/photos/6694918/pexels-photo-6694918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=''
						/>
					</div>
				</div>
			</section>
			{/* final boss game */}
			<section className='bg-slate-500 p-5 my-5 rounded-lg'>
				<h1 className='font-bold text-3xl md:w-96 text-white p-5'>
					You are in good company
				</h1>
				<SwiperV2 />
			</section>
		</>
	)
}

export default MainHome
