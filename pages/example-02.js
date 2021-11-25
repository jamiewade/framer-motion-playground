import Link from "next/link"

export default function Example02() {
	return (
		<div className="grid grid-cols-3">
			<div className="col-span-2">
				<div className="flex flex-col gap-4 p-8">
					<Link href="/">
						<a className="text-blue-700 text-sm underline">Back to Homepage</a>
					</Link>

					<h1 className="font-bold text-3xl">Example 02</h1>
				</div>
			</div>

			<div className="col-span-1">
				<div className="bg-gray-100 p-8 w-full h-screen">
					<p>Sidebar</p>
				</div>
			</div>
		</div>
	)
}
