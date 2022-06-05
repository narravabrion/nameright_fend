import React from "react"
import { NameTable } from "../components"

const NamesPage = () => {
	return (
		<>
			<div className='w-full h-full flex flex-col items-center justify-center'>
				<section className='overflow-x-auto p-2 md:overflow-hidden max-w-5xl h-full w-full '>
					<NameTable/>
				</section>
			</div>
		</>
	)
}

export default NamesPage
