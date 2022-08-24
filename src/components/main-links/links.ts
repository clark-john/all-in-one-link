interface Link {
	title: string,
	link: string,
	icon?: string,
	width?: number,
	isAvailable: boolean
}

export const links: Array<Link> = [
	{
		title: "My Website",
		link: "https://clark-john.github.io",
		isAvailable: true
	},
	{
		title: "Blogspot Area",
		link: "https://clark-john.blogspot.com/",
		isAvailable: true
	},
	{
    title: 'Tumblr', 
    link: "http://cl4rk-tmblr.tumblr.com/",
    isAvailable: true
	},
	{
		title: "Download PostgreSQL",
		link: "https://www.postgresql.org/",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/postgresql.svg",
		width: 25,
		isAvailable: true
	},
	{
		title: "ClarkDoesTech on Twitter",
    link: "https://twitter.com/ClarkDoesTech",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/twitter.svg",
    width: 25,
    isAvailable: true
	}
] 