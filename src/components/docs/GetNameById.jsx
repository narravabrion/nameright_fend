import React from "react"
import { CodeBlockComp } from "../index"

const GetNameById = () => {
	return (
		<>
			<div>
				<article>
					<h1 className='text-xl font-semibold'>
						{" "}
						<span className='text-lg font-semibold'>2. </span>Get a name by id
					</h1>
					<CodeBlockComp
						code={"  https://namerightbend.herokuapp.com/api/v1/name/<id-value>"}
						language={"javascript"}
						showLineNumbers={false}
					/>
					<p className="pl-3">
						Returns a single value from the database. The response will
						resemble:
					</p>
					<CodeBlockComp
						code={code}
						language={"javascript"}
						showLineNumbers={false}
					/>
				</article>
			</div>
		</>
	)
}

export default GetNameById

const code = `{
    "_id": "62978f2a23d6b7ad882033b6",
    "name": "jane",
    "origin_country": "kenya",
    "religion": "religion",
    "origin_year": "2050",
    "meaning": "meaning of the name",
    "gender": "female",
    "votes": 1,
    "createdAt": "2022-06-01T16:09:14.593Z",
    "updatedAt": "2022-06-01T16:46:07.681Z",
    "__v": 0
}`
