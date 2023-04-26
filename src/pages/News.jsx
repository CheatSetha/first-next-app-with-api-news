import React from "react"
import Card from "../components/Card"
import { data } from "autoprefixer"
import { Prosto_One } from "next/font/google"

const News = ({ posts }) => {
	const news = posts?.articles || []
	console.log(news)
	const handleClickUrl = (url) => {
		window.open(url)
	}
	return (
		<div className='flex justify-center flex-wrap gap-4'>
			{news.length > 0 &&
				news.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						url={item.url}
						descripton={item.description}
						img={item.urlToImage}
                        onClickHandle={()=>{handleClickUrl(item.url)}}
					/>
				))}
		</div>
	)
}
//use this function to get called at build time
export async function getStaticProps() {
	const res = await fetch(
		"https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
	)
	const posts = await res.json() //convert to js object
	console.log(posts)
	return {
		props: {
			posts,
		},
	}
}

export default News
