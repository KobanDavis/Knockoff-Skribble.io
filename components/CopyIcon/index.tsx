import React, { FC, HTMLAttributes, SVGAttributes } from 'react'

interface CopyIconProps extends SVGAttributes<SVGElement> {}

const CopyIcon: FC<CopyIconProps> = ({ ...rest }) => {
	return (
		<svg {...rest} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
			<path d='M15.143 13.244l.837-2.244 2.698 5.641-5.678 2.502.805-2.23s-8.055-3.538-7.708-10.913c2.715 5.938 9.046 7.244 9.046 7.244zm8.857-7.244v18h-18v-6h-6v-18h18v6h6zm-2 2h-12.112c-.562-.578-1.08-1.243-1.521-2h7.633v-4h-14v14h4v-3.124c.6.961 1.287 1.823 2 2.576v6.548h14v-14z' />
		</svg>
	)
}

export default CopyIcon
