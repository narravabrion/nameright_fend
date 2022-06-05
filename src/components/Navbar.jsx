import React from "react"
import { Link } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai"

const Navbar = () => {
	return (
		<>
			<nav className='w-full h-24 bg-gray-700 flex items-center justify-center'>
				<div className=' max-w-5xl h-full w-full flex items-center justify-between'>
					<Link to='/'>
						<h1 className=' text-gray-200 cursor-pointer text-xl font-bold first-letter:text-gray-900 first-letter:text-4xl'>
							NameRight
						</h1>
					</Link>
					<ul className='flex  items-center justify-center'>
						<li className='px-1 mx-1  '>
							<Link className="text-white hover:text-gray-400 " to='/'>Docs</Link>
						</li>
						<li className='px-1 mx-1  '>
							<Link className="text-white hover:text-gray-400 " to='/names'>Names</Link>
						</li>
						<li className='px-1 mx-1  '>
							<Link className="text-white hover:text-gray-400 " to='/add-name'>Add</Link>
						</li>
						<li className='px-1 mx-1  '>
							<a className="text-white hover:text-gray-400 " href='https://github.com/narravabrion/nameright_bend'>
								<AiFillGithub />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
