import React from "react"
import { CodeBlockComp } from "../index"

const GetNameByStr = () => {
	return (
		<>
			<div>
				<article>
					<h1 className='text-xl font-semibold'>
						{" "}
						<span className='text-lg font-semibold'>3. </span>Get a name by string value
					</h1>
					<CodeBlockComp
						code={" http://127.0.0.1:8080/api/v1/name/value/<str-name-value>"}
						language={"javascript"}
						showLineNumbers={false}
					/>
					<p className="pl-3">
						Returns a single value from the database given the name in string
						value. The response will resemble:
						<span className='block'>
							- Notice however that this only returns a name if the passed
							string matches the lowercase and trimmed value of the name stored
							in the database. Any variation will yield a null value
						</span>
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

export default GetNameByStr

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
