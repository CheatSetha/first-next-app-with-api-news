import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"

export default function SwiperV2() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}}
				modules={[Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-white rounded-lg shadow-lg p-3 '>
						<h1 className='text-[25px] font-bold'>
							One Bank is a truly great bank
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium dolorum, amet eaque error minus accusamus impedit unde
							sint natus adipisci, incidunt laborum perferendis totam ratione
						</p>
						<div className='pf flex  md:flex-nowrap space-x-6'>
							<img
								className='w-[100px] h-[100px] rounded-full'
								src='https://images.pexels.com/photos/5912322/pexels-photo-5912322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div>
								<h1 className='font-bold md:text-2xl'>Cheat Setha</h1>
								<small>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</small>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
