function Footer() {
	return (
		<footer className="w-full rounded-lg bg-gray-100 px-0 py-8 text-gray-800 dark:bg-neutral-800 dark:text-gray-200">
			<div className="mx-auto max-w-7xl px-6">
				{/* Top row */}
				<div className="mb-8 grid items-start gap-8 md:grid-cols-3">
					{/* Logo */}
					<div className="mb-6 text-2xl font-extrabold tracking-tight md:mb-0">
						LUYU
					</div>

					{/* Sections */}
					<div className="col-span-2 grid grid-cols-2 gap-6 md:grid-cols-4">
						<div>
							<h3 className="mb-2 text-base font-bold">
								Product
							</h3>
							<ul>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/#overview"
									>
										Overview
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/pricing"
									>
										Pricing
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-2 text-base font-bold">
								Resources
							</h3>
							<ul>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/blog"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/guide"
									>
										Guide
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/help"
									>
										Help Center
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-2 text-base font-bold">
								Company
							</h3>
							<ul>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/about"
									>
										About
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/careers"
									>
										Careers
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/contact"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-2 text-base font-bold">Legal</h3>
							<ul>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/privacy"
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 hover:underline dark:text-gray-300"
										href="/terms"
									>
										Terms of Service
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom row */}
				<div className="flex flex-col items-center justify-between border-t border-gray-300 pt-6 text-sm text-gray-500 md:flex-row dark:border-neutral-700 dark:text-gray-400">
					<p>
						© {new Date().getFullYear()} LUYU. All rights reserved.
					</p>
					<div className="mt-4 flex gap-6 md:mt-0">
						<a className="hover:underline" href="/privacy">
							Privacy Policy
						</a>
						<a className="hover:underline" href="/terms">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
