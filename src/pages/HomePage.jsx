import React from "react"
import { Link } from "react-router-dom"
import { GetAllNames, GetNameById, GetNameByStr } from "../components"
const HomePage = () => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center'>
			<section className=' mt-[-1rem] shadow-sm rounded-sm bg-gray-100 p-2  max-w-5xl h-full w-full '>
				<div>
					<article className='py-2'>
						<h3 className='text-xl font-bold'>Introduction</h3>
						<p className='py-1 px-3'>
							Welcome to version 1 of The name API. Below you will find a
							current list of the available methods on name API.
						</p>
						<p className='py-1 px-3'>
							The names database is new and doesn't have many names. If you feel
							there is a name you could add please do so{" "}
							<Link
								className='text-blue-900 italic font-semibold'
								to='add-name'
							>
								HERE!
							</Link>
						</p>
						<p className='py-1 px-3'>
							Please Note the API has no rate limit in place!{" "}
							<span className='text-blue-900 italic font-semibold'>
								BE A DARLING WITH IT!
							</span>
						</p>{" "}
						<p className='py-1 px-3'>
							The endpoins provided are useful to get the static lists of data
							we use throughout the database. Responses will typically return
							names with (the name, origin_country, origin_year, meaning,
							gender, and the number of upvotes)
						</p>
					</article>
					<article className='py-2'>
						<h3 className='text-xl font-bold'>Endpoints</h3>
						<p className='py-1 px-3'>
							*Please note that the current endpoints are not exhaustive and I'm
							still working on more
						</p>
					</article>
				</div>
				<GetAllNames />
				<GetNameById />
				<GetNameByStr />
			</section>

			<p className='py-1 '>
				Looking forward to developing more endpoints as the number of names
				increase! cheers🥂
			</p>
		</div>
	)
}

export default HomePage
