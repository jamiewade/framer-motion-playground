import Link from "next/link"

export default function Navigation() {
	return (
		<ul>
			<li>
				<Link href="/example-01">
					<a>Example 01</a>
				</Link>
			</li>

			<li>
				<Link href="/example-02">
					<a>Example 02</a>
				</Link>
			</li>
			<li>
				<Link href="/example-03">
					<a>Example 03</a>
				</Link>
			</li>
		</ul>
	)
}
