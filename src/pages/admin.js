import Link from "next/link"
import React, { useEffect, useState } from "react"

const Admin = (users) => {
	const [show, setShow] = useState(false)
	const toggle = () => {
		setShow(!show)
		console.log("clicked bro");
	}
	const usersList = users.users.list
	const pagination = users.users.navigatepageNums
	console.log(pagination);

	console.log(users.users)
	//do delete function here
	const deleteUserHandler = async (id) => {
		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/users/${id}`,
				{
					method: "DELETE",
				}
			)

			const data = await response.json()

			console.log("User deleted successfully:", data)
		} catch (error) {
			console.error("Error deleting user:", error)
		}
	}

	
	
	return (
		<div>

            <div className="flex flex-wrap justify-center gap-5">
			{usersList &&
				usersList.map((user, index) => (
					<div
						key={index}
						class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
					>
						<div class='flex justify-end px-4 pt-4'>
							<button
							onClick={toggle}
								id='dropdownButton'
								data-dropdown-toggle='dropdown'
								class='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
								type='button'
							>
								<span class='sr-only'>Open dropdown</span>
								<svg
									class='w-6 h-6'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
								</svg>
							</button>
							{/* <!-- Dropdown menu --> */}
							<div
								id='dropdown'
								class= { show?'z-10 absolute mt-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700':'z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'}
							>
								<ul
									class='py-2'
									aria-labelledby='dropdownButton'
								>
									<li>
										<a
											href='#'
											class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-sky-500 dark:text-gray-200 dark:hover:text-white'
										>
											Edit
										</a>
									</li>
									
									<li 
										class='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-red-700 dark:text-gray-200 dark:hover:text-white'
									onClick={()=> deleteUserHandler(user.id)}
									>
									
										
											
										
											Delete
										
									</li>
								</ul>
							</div>
						</div>
						<div class='flex flex-col items-center pb-10'>
							<img
								class='w-24 h-24 mb-3 rounded-full shadow-lg'
								src='https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/343739604_1305127710427460_1236880039674723131_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFvbP0kUS6tAQXbmYU7xgbBHZwpHe0WLlIdnCkd7RYuUjPeovzPNt4kUG0GtQwjMe25ujDxRmMBCI5jNiI2u93y&_nc_ohc=B3S9uVTbNKIAX9Ieo2z&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AfCqG8ugJ5Fu2o2JkGqk31IJ1qSGBAxnQNlc_k4eBpr8kg&oe=64538F54'
								alt='Bonnie image'
							/>
							<h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
								{user.name}
							</h5>
							<span class='text-sm text-gray-500 dark:text-gray-400'>
								{user.studentCardId}
							</span>
							<div class='flex mt-4 space-x-3 md:mt-6'>
								<a
									href='#'
									class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
								>
									Add friend
								</a>
								<a
									href='#'
									class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
								>
									{user.isStudent?"single":"in relationship"}
								</a>
							</div>
						</div>
					</div>
				))}
                </div>
				<div className="w-20 fixed bottom-10 right-0 cursor-pointer">
					<Link href="/addnewuser"> <img src="https://cdn-icons-png.flaticon.com/512/1771/1771013.png" alt="" /></Link>
				</div>
				{

				}
				
<div aria-label="Page navigation example" className="flex justify-center my-3 ">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
	{
		pagination && pagination.map((item,index)=>(
			<li key={index}>
			<a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{item}</a>
		  </li>
		))
	}
   
  
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</div>

		</div>
	)
}
export async function getStaticProps() {
	const res = await fetch("http://localhost:8080/api/v1/users")
	const data = await res.json()
	return {
		props: {
			users: data.data,
		},
	}
}
export default Admin
