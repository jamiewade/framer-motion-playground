import { motion } from "framer-motion"

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<div className="grid grid-cols-4 gap-6">
				<article className="rounded shadow bg-purple-500 h-48"></article>
				<article className="rounded shadow bg-purple-500 h-48"></article>
				<article className="rounded shadow bg-purple-500 h-48"></article>
				<article className="rounded shadow bg-purple-500 h-48"></article>
			</div>
		</motion.div>
	)
}
