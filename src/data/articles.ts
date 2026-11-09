/**
 * ===================================================================
 * Articles Data Store (src/data/articles.ts)
 * ===================================================================
 *
 * This file contains our sample blog post data for Stage 1.
 * It provides structured mock data mimicking what Drupal's JSON:API
 * or WordPress's REST API returns:
 *  - id, slug, title, excerpt, full body content (HTML)
 *  - metadata: author, date, read time, category, featured image
 *
 * In Stage 4, this static array will be replaced by an API fetcher
 * that pulls live nodes from Drupal 11!
 */

export interface Article {
	id: number;
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	imageUrl: string;
	date: string;
	readTime: string;
	author: {
		name: string;
		role: string;
		avatar: string;
	};
	content: string;
}

export const articles: Article[] = [
	{
		id: 1,
		slug: 'headless-drupal-with-astro',
		title: 'Headless Drupal with Astro: The Modern Front End Architecture',
		excerpt: 'Learn how to decouple Drupal 11 using Astro to achieve blazing fast Core Web Vitals, zero client-side JavaScript, and seamless content workflows.',
		category: 'Architecture',
		imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80',
		date: 'Nov 09, 2026',
		readTime: '5 min read',
		author: {
			name: 'Alex Rivera',
			role: 'Senior Solutions Architect',
			avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
		},
		content: `
			<p class="text-xl leading-relaxed text-base-content/90 font-medium">
				For years, organizations faced a difficult trade-off when choosing a web architecture: stick with a monolithic CMS like Drupal or WordPress for editorial ease, or jump into a modern JavaScript framework for frontend performance at the cost of complex developer overhead.
			</p>

			<h2 class="text-2xl font-bold text-base-content mt-8 mb-4">The Problem with Monolithic Theming</h2>
			<p>
				Traditional CMS themes bundle server-side templating (like Drupal's Twig or WordPress PHP) with client-side scripts, stylesheets, and core libraries. Over time, as plugins and modules accumulate, the browser is forced to download, parse, and execute hundreds of kilobytes of unused JavaScript on every page visit.
			</p>
			<p>
				This heavy payload directly impairs Google's <strong>Core Web Vitals</strong> — specifically <em>Interaction to Next Paint (INP)</em> and <em>Largest Contentful Paint (LCP)</em> — leading to lower search rankings and sluggish mobile user experiences.
			</p>

			<div class="my-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-2xl">
				<h3 class="font-bold text-lg text-primary flex items-center gap-2">
					💡 Why Astro Changes the Game
				</h3>
				<p class="mt-2 text-base-content/85">
					Astro is designed specifically for content-rich websites. By default, Astro generates <strong>100% pure HTML with zero client-side JavaScript</strong>. If a page doesn't need interactivity, no JS is shipped to the user's browser.
				</p>
			</div>

			<h2 class="text-2xl font-bold text-base-content mt-8 mb-4">How Decoupled Architecture Works</h2>
			<p>
				In this modern headless model, the responsibility of your website is divided between two specialized engines:
			</p>

			<ul class="list-disc pl-6 space-y-2 my-4">
				<li><strong>The Backend (Drupal 11):</strong> Acts as the content repository and administrative dashboard. Content authors draft, edit, upload media, and manage taxonomies inside Drupal's structured fields.</li>
				<li><strong>The API Layer (JSON:API):</strong> Drupal automatically exposes clean, standard JSON endpoints for all content types without requiring custom PHP code.</li>
				<li><strong>The Frontend (Astro + Tailwind + daisyUI):</strong> Fetches the clean JSON from Drupal and compiles semantic, accessible HTML served globally from edge CDN networks.</li>
			</ul>

			<h2 class="text-2xl font-bold text-base-content mt-8 mb-4">Next Steps: Connecting Live Content</h2>
			<p>
				Once the frontend layout and components are styled locally, connecting to live Drupal content requires just a standard <code>fetch()</code> request during the build or request cycle:
			</p>

			<pre class="bg-neutral text-neutral-content p-4 rounded-xl overflow-x-auto text-sm my-6 font-mono"><code>// Fetching live articles directly from Drupal JSON:API
const response = await fetch('https://drupal-site.ddev.site/jsonapi/node/article');
const { data: articles } = await response.json();</code></pre>

			<p>
				In the upcoming stages, we will initialize our Git repository, deploy this Astro app to edge hosting, and connect it to a live Drupal backend!
			</p>
		`
	},
	{
		id: 2,
		slug: 'styling-modern-components-tailwind-daisyui',
		title: 'Styling Modern Components with Tailwind CSS v4 and daisyUI',
		excerpt: 'Explore how daisyUI brings accessible, pre-built component classes to Tailwind without sacrificing utility-first flexibility.',
		category: 'Design Systems',
		imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
		date: 'Nov 08, 2026',
		readTime: '6 min read',
		author: {
			name: 'Sarah Chen',
			role: 'Lead UI/UX Designer',
			avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80'
		},
		content: `
			<p class="text-xl leading-relaxed text-base-content/90 font-medium">
				Tailwind CSS revolutionized web styling with utility classes, but composing complex components like modals, navbars, and buttons from scratch can lead to verbose class lists. Enter daisyUI.
			</p>
			<h2 class="text-2xl font-bold text-base-content mt-8 mb-4">Semantic Components Meet Utility Power</h2>
			<p>
				daisyUI provides clean, semantic class names like <code>btn</code>, <code>card</code>, and <code>badge</code> that compile into lightweight Tailwind utilities without adding runtime JavaScript.
			</p>
		`
	},
	{
		id: 3,
		slug: 'edge-deployment-cloudflare-pages',
		title: 'Edge Deployment: Serving Astro from 300+ Cities on Cloudflare',
		excerpt: 'Discover why edge CDN hosting outclasses traditional origin servers for Time To First Byte (TTFB) and traffic spike resilience.',
		category: 'DevOps',
		imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
		date: 'Nov 07, 2026',
		readTime: '5 min read',
		author: {
			name: 'Marcus Brody',
			role: 'Cloud Infrastructure Engineer',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
		},
		content: `
			<p class="text-xl leading-relaxed text-base-content/90 font-medium">
				Serving content from a single data center in one country means visitors on the other side of the planet suffer high latency. Edge CDNs solve this permanently.
			</p>
		`
	},
	{
		id: 4,
		slug: 'drupal-canvas-experience-composition',
		title: 'Drupal Canvas & Experience Composition Explained',
		excerpt: 'How visual page builders and headless component schemas bridge the gap between developer velocity and editorial freedom.',
		category: 'Drupal CMS',
		imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
		date: 'Nov 06, 2026',
		readTime: '7 min read',
		author: {
			name: 'Elena Rostova',
			role: 'Principal CMS Architect',
			avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
		},
		content: `
			<p class="text-xl leading-relaxed text-base-content/90 font-medium">
				Drupal Canvas introduces component schemas that sync directly between frontend JavaScript repositories and Drupal's visual editorial tools.
			</p>
		`
	},
	{
		id: 5,
		slug: 'ssg-vs-ssr-rendering-strategy',
		title: 'Comparing SSG vs. SSR: Which Rendering Strategy Fits Your Site?',
		excerpt: 'Static Site Generation gives you maximum speed and free CDN hosting, while Server-Side Rendering provides real-time instant publishing.',
		category: 'Web Dev',
		imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
		date: 'Nov 05, 2026',
		readTime: '5 min read',
		author: {
			name: 'Alex Rivera',
			role: 'Senior Solutions Architect',
			avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
		},
		content: `
			<p class="text-xl leading-relaxed text-base-content/90 font-medium">
				Understanding the trade-offs between static pre-rendering at build time and on-demand server rendering is crucial for architectural success.
			</p>
		`
	},
	{
		id: 6,
		slug: 'migrating-from-elementor-to-astro',
		title: 'Migrating from Elementor to Astro: Lessons Learned',
		excerpt: 'A deep dive into replacing legacy page builders with clean semantic components and lightning-fast Lighthouse scores.',
		category: 'Case Study',
		imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=80',
		date: 'Nov 04, 2026',
		readTime: '8 min read',
		author: {
			name: 'Sarah Chen',
			role: 'Lead UI/UX Designer',
			avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80'
		},
		content: `
			<p class="text-xl leading-relaxed text-base-content/90 font-medium">
				Moving away from WordPress page builders requires rethinking component models, but the payoff in speed, security, and developer joy is unmatched.
			</p>
		`
	}
];
