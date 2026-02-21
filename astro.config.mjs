// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://agent-sh.github.io',
	base: '/agent-sh.dev',
	integrations: [
		starlight({
			title: 'agent-sh',
			tagline: 'Code does code work. AI does AI work.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/agent-sh' },
			],
			sidebar: [
				{
					label: 'AgentSys',
					items: [
						{ label: 'Overview', slug: 'agentsys' },
						{ label: 'Getting Started', slug: 'agentsys/getting-started' },
						{ label: 'Plugin Catalog', slug: 'agentsys/plugins' },
						{ label: 'CLI Reference', slug: 'agentsys/cli' },
					],
				},
				{
					label: 'Agnix',
					items: [
						{ label: 'Overview', slug: 'agnix' },
						{ label: 'Getting Started', slug: 'agnix/getting-started' },
					],
				},
				{
					label: 'Skills',
					items: [
						{ label: 'Agent Skills Catalog', slug: 'skills' },
					],
				},
			],
		}),
	],
});
