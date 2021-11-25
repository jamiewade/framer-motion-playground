import "tailwindcss/tailwind.css"
import { AnimatePresence } from "framer-motion"
import Navigation from "components/navigation"

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence exitBeforeEnter>
			<div className="overflow-x-hidden w-screen h-screen">
				<div className="grid grid-cols-4 h-full">
					<div className="col-span-1">
						<div className=" bg-gray-100 p-8 w-full h-full">
							<Navigation />
						</div>
					</div>

					<div className="col-span-3">
						<div className="p-12 w-full h-full">
							<Component {...pageProps} />
						</div>
					</div>
				</div>
			</div>
		</AnimatePresence>
	)
}

export default MyApp
