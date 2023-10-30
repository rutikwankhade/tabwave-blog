import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
	return (
		<div className="lg:w-8/12 prose md:prose-lg prose-sm prose-h1:text-center mx-auto max-w-screen-lg px-5">
			<h1 className="font-dmsans">{children}</h1>
		</div>
	);
};
