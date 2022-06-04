import React from "react"

const Footer = () => {
	return (
		<>
			<footer className='w-full p-1 flex items-center justify-center bg-gray-600'>
                <p>Developed with ❤️ by brion | {new Date().getFullYear()}</p>
            </footer>
		</>
	)
}

export default Footer
