import * as Popover from '@radix-ui/react-popover';
import { Button } from './button';
import { NewsletterPlusSVG } from './icons';
import { SubscribeForm } from './subscribe-form';

export const Subscribe = () => {
	return (
		<div className="fixed bottom-10 right-10 z-50">
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button
						label="Subscribe"
						icon={<NewsletterPlusSVG className="h-5 w-5 fill-current" />}
						className="bg-white"
					/>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content
						className="w-[350px] md:max-w-[400px] rounded-xl border bg-white p-6 shadow-xl "
						align="end"
						sideOffset={15}
					>
						<h3 className="mb-2 text-center text-md font-semibold">
						Subscribe to get the latest updates from Tabwave and some productivity tips.
						</h3>
						<SubscribeForm />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	);
};
