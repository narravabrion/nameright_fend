import React from "react"
import { AddNameForm, CodeBlockComp } from "../components"

const AddNamePage = () => {
	return (
		<>
			<div className='w-full h-full flex flex-col items-center justify-center'>
				<section className='   p-2  max-w-5xl h-full w-full py-2 flex flex-col items-center justify-center min-h-max'>
					<h1 className='w-full flex items-center justify-center text-lg font-semibold text-gray-700'>
						Add Name
					</h1>
					<AddNameForm />

					<div className='border border-gray-200 rounded max-w-2xl w-full p-1 bg-gray-100'>
						<p>
							Alternatively if you have a list of names in JSON formart you can
							use the endpoint below to upload them
						</p>
						<CodeBlockComp
							code={` https://namerightbend.herokuapp.com/api/v1/name/create`}
							language={"javascript"}
							showLineNumbers={false}
						/>
						<p>The JSON format for each name should look like this:</p>
						<CodeBlockComp
							code={code}
							language={"javascript"}
							showLineNumbers={false}
						/>
						<p className="font-semibold italic ">*Please note that all the fields listed above are required</p>
					</div>
				</section>
			</div>
		</>
	)
}

export default AddNamePage

const code = `{
  "name":"jane" ,
  "origin_country":"kenya",
  "religion":"religion",
  "origin_year":"2050",
  "meaning":"meaning of the name" ,
  "gender": "female"
}`
