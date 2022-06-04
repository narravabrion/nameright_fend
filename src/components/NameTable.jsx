import React, { useCallback, useEffect, useState } from "react"
import axios from "axios"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import { MDBDataTable } from "mdbreact"
import { toast } from "react-toastify"
import { AiOutlineEye } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const NameTable = () => {
	const [names, setnames] = useState([])
	const navigate = useNavigate()

	const viewNameDetails = useCallback(
		(e) => {
			console.log(e.target.id)
			navigate(`/name-details/${e.target.id}`)
		},

		[navigate]
	)
	const addActions = useCallback(
		(values) => {
			const data = values.map((val) => {
				return {
					...val,
					view: (
						<button
							className='m-auto'
							id={val._id}
							onClick={(e) => viewNameDetails(e)}
						>
							<AiOutlineEye className='pointer-events-none' size={25} />
						</button>
					),
				}
			})
			return data
		},
		[viewNameDetails]
	)
	const fetchData = useCallback(async () => {
		try {
			const res = await axios.get(" http://127.0.0.1:8080/api/v1/name")
			setnames(addActions(res.data))
		} catch (error) {
			console.log(error)
			toast.error("could not load names!")
		}
	}, [addActions])

	useEffect(() => {
		fetchData()
		// setnames(data)
	}, [fetchData])

	const data = {
		columns: columns,
		rows: names,
	}
	return <MDBDataTable striped bordered small data={data} />
}

export default NameTable

const columns = [
	{
		label: "Name",
		field: "name",
		sort: "asc",
		width: 150,
	},
	{
		label: "Country",
		field: "origin_country",
		sort: "asc",
		width: 270,
	},
	{
		label: "Religion",
		field: "religion",
		sort: "asc",
		width: 200,
	},
	{
		label: "Year",
		field: "origin_year",
		sort: "asc",
		width: 100,
	},
	{
		label: "Gender",
		field: "gender",
		sort: "asc",
		width: 150,
	},
	{
		label: "Votes",
		field: "votes",
		sort: "asc",
		width: 100,
	},
	{
		label: "View",
		field: "view",
		sort: "asc",
		width: 100,
	},
]
