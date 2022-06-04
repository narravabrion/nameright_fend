import React from "react"
import { CodeBlockComp } from "../index"

const GetAllNames = () => {
	return (
		<>
			<div>
			
				<article>
					<h1 className='text-xl font-semibold'>
						{" "}
						<span className='text-lg font-semibold'>1. </span>Get all names
					</h1>
					<CodeBlockComp
						code={" http://127.0.0.1:8080/api/v1/name"}
						language={"javascript"}
						showLineNumbers={false}
					/>
					<p className="pl-3">
						Returns a list of all names in the database. The response will
						resemble:
					</p>
					<CodeBlockComp
						code={code}
						language={"javascript"}
						showLineNumbers={false}
					/>
					<p className="pl-3">
						You can pass an optional limit query to specify the numer of results
						you want back
					</p>
					<CodeBlockComp
						code={
							" http://127.0.0.1:8080/api/v1/name?limint=<arbitrary int value>"
						}
						language={"javascript"}
						showLineNumbers={false}
					/>
				</article>
			</div>
		</>
	)
}

export default GetAllNames

const code = `
[
  {
      "_id": "62978f2a23d6b7ad882033b6",
      "name": "john",
      "origin_country": "kenya",
      "religion": "religion",
      "origin_year": "2050",
      "meaning": "meaning of the name",
      "gender": "male",
      "votes": 1,
      "createdAt": "2022-06-01T16:09:14.593Z",
      "updatedAt": "2022-06-01T16:46:07.681Z",
      "__v": 0
  },
  {
      "_id": "62978fbb52531a071b132e42",
      "name": "jane",
      "origin_country": "wakanda",
      "religion": "religion",
      "origin_year": "2050",
      "meaning": "meaning of the name",
      "gender": "female",
      "votes": 0,
      "createdAt": "2022-06-01T16:11:39.423Z",
      "updatedAt": "2022-06-01T16:11:39.423Z",
      "__v": 0
  },
  
]
`
