import { motion } from "framer-motion"

export default function Example01() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<h1 className="mb-6 font-bold text-5xl">Example 01</h1>

			<div className="flex flex-col gap-4">
				<p>Fermentum iaculis eu non diam phasellus vestibulum lorem. Nulla pharetra diam sit amet nisl suscipit. Eget nullam non nisi est sit amet. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Dignissim sodales ut eu sem integer. Laoreet id donec ultrices tincidunt arcu non. Nulla facilisi etiam dignissim diam quis. Mollis nunc sed id semper risus in hendrerit. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Dolor morbi non arcu risus quis varius. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.</p>
				<p>Velit ut tortor pretium viverra suspendisse potenti nullam. Blandit massa enim nec dui nunc mattis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Orci nulla pellentesque dignissim enim. Neque volutpat ac tincidunt vitae. Amet dictum sit amet justo donec enim diam. Ac tortor vitae purus faucibus ornare suspendisse sed. Urna nunc id cursus metus aliquam eleifend mi in. Quisque id diam vel quam elementum pulvinar etiam non. Ac auctor augue mauris augue. Eget nunc scelerisque viverra mauris. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Est placerat in egestas erat imperdiet sed euismod nisi. Sed risus ultricies tristique nulla. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Vel pharetra vel turpis nunc eget lorem dolor sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut.</p>
				<p>Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Proin fermentum leo vel orci porta non pulvinar neque. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Magna ac placerat vestibulum lectus mauris ultrices eros. Massa vitae tortor condimentum lacinia. Et netus et malesuada fames ac turpis. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Nullam ac tortor vitae purus. Eget gravida cum sociis natoque penatibus et. Placerat in egestas erat imperdiet. Nulla pellentesque dignissim enim sit. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Malesuada pellentesque elit eget gravida. Faucibus turpis in eu mi bibendum. Tellus orci ac auctor augue. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
				<p>Ultricies mi eget mauris pharetra et ultrices neque. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Ac felis donec et odio pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tincidunt tortor aliquam nulla facilisi. Enim nunc faucibus a pellentesque sit amet. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. At tempor commodo ullamcorper a lacus. Volutpat commodo sed egestas egestas fringilla. Ut sem viverra aliquet eget sit amet tellus. Odio pellentesque diam volutpat commodo sed egestas. Dictum at tempor commodo ullamcorper a. Vitae tempus quam pellentesque nec nam aliquam sem.</p>
				<p>Vel turpis nunc eget lorem dolor sed viverra ipsum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Lacus laoreet non curabitur gravida. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Id interdum velit laoreet id donec ultrices. Suspendisse in est ante in. Morbi tincidunt augue interdum velit euismod in. Purus viverra accumsan in nisl nisi scelerisque eu.</p>
			</div>
		</motion.div>
	)
}
