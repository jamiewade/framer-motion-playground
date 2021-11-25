import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "components/navigation"

export default function Example03() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<div className="grid grid-cols-3">
				<div className="col-span-2">
					<div className="flex flex-col gap-4 p-8 bg-green-800 text-white w-full h-screen">
						<Link href="/">
							<a className="opacity-50 text-white text-sm underline">Back to Homepage</a>
						</Link>

						<h1 className="font-bold text-3xl">Example 03</h1>
					</div>
				</div>

				<div className="col-span-1">
					<div className="bg-green-900 p-8 text-white w-full h-screen">
						<Navigation />
					</div>
				</div>
			</div>
		</motion.div >
	)
}
