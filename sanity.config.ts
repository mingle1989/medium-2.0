import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import Logo from './app/(admin)/Logo';
import StudioNavbar from './app/(admin)/StudioNavbar';
import { schemaTypes } from './schemas';
import { getDefaultDocumentNode } from './structure';
import { myTheme } from './theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: '/studio',
	name: 'Medium_Blog',
	title: 'Medium Blog Studio',
	projectId,
	dataset,
	plugins: [
		deskTool({
			defaultDocumentNode: getDefaultDocumentNode,
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			logo: Logo,
			navbar: StudioNavbar,
		},
	},
	theme: myTheme,
});
