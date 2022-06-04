import React, { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { AiFillHeart } from "react-icons/ai"

const NameDetailPage = () => {
	const [name, setName] = useState(null)
	const { id } = useParams()
	const fetchName = useCallback(async () => {
		try {
			const res = await axios.get(` http://127.0.0.1:8080/api/v1/name/${id}`)
			setName(res.data)
		} catch (error) {
			toast.error(error.response.data.error)
		}
	}, [id])

	useEffect(() => {
		fetchName()
	}, [fetchName])

	const handleVote = async (e) => {
		if (e.target.checked) {
			try {
				const res = await axios.put(
					`http://127.0.0.1:8080/api/v1/name/upvote/${id}`,
					{}
				)
				toast.success(res.data.message)
			} catch (error) {
				toast.error(error.response.data.error)
			}
		} else {
			try {
				const res = await axios.put(
					`http://127.0.0.1:8080/api/v1/name/downVote/${id}`,
					{}
				)
				toast.success(res.data.message)
			} catch (error) {
				toast.error(error.response.data.error)
			}
		}
	}

	return (
		<>
			<div className='w-full h-full flex flex-col items-center justify-center'>
				<section className='  p-2  max-w-5xl h-full w-full '>
					<article className='bg-gray-100/50 rounded-sm shadow border'>
						<div className='flex py-2 items-center justify-between p-2 bg-gray-200'>
							<h3 className='w-1/2 text-xl text-gray-900 font-semibold'>
								{name?.name}
							</h3>
							<div className='flex flex-col items-center justify-center'>
								<input
									className='absolute -left-full'
									type='checkbox'
									name='vote'
									id='vote'
									onClick={handleVote}
								/>
								<label htmlFor='vote'>
									<AiFillHeart />
								</label>
								<p className='text-xs text-gray-700 italic'>
									{name?.votes} votes
								</p>
							</div>
						</div>
						<div className='border border-gray-200 rounded-sm px-2'>
							<div className='flex py-2 items-center justify-between'>
								<h5 className='w-1/2 text-md font-serif'>
									<span className='text-sm font-sans text-gray-700 font-semibold italic'>
										country:{" "}
									</span>
									{name?.origin_country}
								</h5>
								<h5 className='w-1/2 text-md font-serif'>
									<span className='text-sm font-sans text-gray-700 font-semibold italic'>
										religion:{" "}
									</span>
									{name?.religion}
								</h5>
							</div>
							<div className='flex py-2 items-center justify-between'>
								<h5 className='w-1/2 text-md font-serif'>
									<span className='text-sm font-sans text-gray-700 font-semibold italic'>
										gender:{" "}
									</span>
									{name?.gender}
								</h5>
								<h5 className='w-1/2 text-md font-serif'>
									<span className='text-sm font-sans text-gray-700 font-semibold italic'>
										origin:{" "}
									</span>
									{name?.origin_year}
								</h5>
							</div>
						</div>
						<p className=' px-2 font-mono'>{name?.meaning}</p>
					</article>
				</section>
			</div>
		</>
	)
}

export default NameDetailPage
