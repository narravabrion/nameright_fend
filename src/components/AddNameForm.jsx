import React, { useState } from "react"
import { useForm } from "react-hook-form"
import axios  from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import Spinner from "./Spinner"

const AddNameForm = () => {
    const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data) => {
		try {
            setLoading(true)
			const res = await axios.post(" https://namerightbend.herokuapp.com/api/v1/name/create", data)
			toast.success(res.data.message)
			navigate("/names", { replace: true })
            setLoading(false)
		} catch (error) {
            toast.error(error.response.data.error)
            setLoading(false)
		}
	}

	return (
		<>
			<div className='block py-6 rounded-sm bg-white max-w-2xl w-full'>
				<form className='w-full ' onSubmit={handleSubmit(onSubmit)}>
					<div className=' mb-6'>
						<input
							type='text'
							className=' block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
							id='name'
							name='name'
							placeholder='name'
							{...register("name", {
								required: "name is required",
							})}
						/>
						<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
							{errors.name?.message}
						</p>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div className=' mb-6'>
							<input
								type='text'
								className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
								id='gender'
								name='gender'
								aria-describedby='gender'
								placeholder='gender'
								{...register("gender", {
									required: "gender is required",
								})}
							/>
							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.gender?.message}
							</p>
						</div>
						<div className=' mb-6'>
							<input
								type='text'
								className=' block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
								id='origin_country'
								name='origin_country'
								aria-describedby='origin_country'
								placeholder='origin country'
								{...register("origin_country", {
									required: "origin_country is required",
								})}
							/>
							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.origin_country?.message}
							</p>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div className=' mb-6'>
							<input
								type='text'
								className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
								id='religion'
								name='religion'
								aria-describedby='religion'
								placeholder='religion'
								{...register("religion", {
									required: "religion is required",
								})}
							/>
							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.religion?.message}
							</p>
						</div>
						<div className=' mb-6'>
							<input
								type='text'
								className=' block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
								id='origin_year'
								name='origin_year'
								aria-describedby='origin_year'
								placeholder='origin year'
								{...register("origin_year", {
									required: "origin_year is required",
								})}
							/>
							<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
								{errors.origin_year?.message}
							</p>
						</div>
					</div>
					<div className=' mb-6'>
						<textarea
							className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
							id='meaning'
							name='meaning'
							rows='3'
							placeholder='meaning'
							{...register("meaning", {
								required: "meaning is required",
							})}
						></textarea>
						<p className='w-full rounded px-1 mt-1 bg-red-400/50 text-xs'>
							{errors.meaning?.message}
						</p>
					</div>
					<button
						type='submit'
						className=' w-full px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out'
					>
						{/* {loading? `add name` : <Spinner/>} */}
						{loading? <Spinner/> : `Add Name`}
					</button>
				
				</form>
			</div>
		</>
	)
}

export default AddNameForm
