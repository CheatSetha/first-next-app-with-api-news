import React from "react"

const Card = ({ title, descripton, img, url, onClickHandle }) => {
	console.log(title, descripton, img)
	return (
		<div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow '>
			<a href={url ? url : "#"}>
				<img
					class='rounded-t-lg'
					src={
						img
							? img
							: "https://imgs.search.brave.com/9k7VJ4RbUaNyuTK_x1Bj6XhBXws1G6nk9fD_15G3MFY/rs:fit:1200:500:1/g:ce/aHR0cHM6Ly9oeXBl/Lm15L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAxL3hhdmll/ci1wYWthbHVwYXBp/dG8tbWVtZS0xMjAw/eDUwMC0xLmpwZw"
					}
					alt=''
				/>
			</a>
			<div class='p-5'>
				<a href='#'>
					<h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
						{title ? title : "I love you"}
					</h5>
				</a>
				<p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{descripton
						? descripton
						: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
				</p>
				<button
					className='p-3 bg-blue-600 text-white rounded-lg w-full'
					onClick={onClickHandle}
				>
					view
				</button>
			</div>
		</div>
	)
}

export default Card
