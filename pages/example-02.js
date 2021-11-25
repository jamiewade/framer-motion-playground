import { motion } from "framer-motion"

export default function Example02() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<h1 className="mb-6 font-bold text-5xl">Example 02</h1>

			<div className="flex flex-col gap-4">
				<p>Faucibus ornare suspendisse sed nisi lacus. Purus in massa tempor nec feugiat. Egestas maecenas pharetra convallis posuere morbi leo urna. Volutpat diam ut venenatis tellus in metus vulputate. Neque convallis a cras semper auctor. Vulputate dignissim suspendisse in est ante. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Nisl tincidunt eget nullam non nisi est. Senectus et netus et malesuada fames ac turpis egestas maecenas. In nibh mauris cursus mattis molestie. Quis hendrerit dolor magna eget est lorem ipsum dolor. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Molestie nunc non blandit massa enim.</p>
				<p>Ornare aenean euismod elementum nisi quis. Tellus in metus vulputate eu. Rutrum tellus pellentesque eu tincidunt tortor. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Diam maecenas ultricies mi eget. Sagittis vitae et leo duis ut diam quam. Placerat in egestas erat imperdiet. Nisl nisi scelerisque eu ultrices vitae auctor eu. Interdum velit euismod in pellentesque. Morbi enim nunc faucibus a pellentesque sit amet.</p>
				<p>Tellus molestie nunc non blandit massa enim nec. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Dignissim enim sit amet venenatis urna cursus eget. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Sed adipiscing diam donec adipiscing tristique risus nec. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Senectus et netus et malesuada fames ac turpis egestas sed. Quis blandit turpis cursus in. Nulla facilisi morbi tempus iaculis urna id volutpat. Tellus molestie nunc non blandit massa enim nec dui nunc. Elementum nibh tellus molestie nunc non blandit massa.</p>
				<p>Platea dictumst quisque sagittis purus. Habitasse platea dictumst quisque sagittis. Adipiscing elit pellentesque habitant morbi tristique. Vestibulum lectus mauris ultrices eros. Ultricies mi eget mauris pharetra et ultrices neque ornare. Aliquet porttitor lacus luctus accumsan tortor posuere. Augue mauris augue neque gravida in fermentum. Blandit aliquam etiam erat velit. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt.</p>
			</div>
		</motion.div>
	)
}
