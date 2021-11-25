import { motion } from "framer-motion"
import Navigation from "components/navigation"

export default function Home() {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="p-8">
				<Navigation />
			</div>
		</motion.div>
	)
}
