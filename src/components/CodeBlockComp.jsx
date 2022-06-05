import React from "react"
import { CodeBlock, dracula } from "react-code-blocks"

const CodeBlockComp = ({ code, language, showLineNumbers }) => {
	return (
		<>
			<div className='py-2 pl-2 sm:pl-3 md:pl-5'>
				<CodeBlock
					className=''
					text={code}
					language={language}
					showLineNumbers={showLineNumbers}
					theme={dracula}
					codeBlock
					onCopy
				/>
			</div>
		</>
	)
}

export default CodeBlockComp
