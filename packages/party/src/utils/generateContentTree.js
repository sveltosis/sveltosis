import fs from 'node:fs/promises';
import path from 'path';

const CONTENT_DIR = path.resolve('content');

const EXPERIMENTAL_IDS = ['actions'];

export default async function generateContentTree() {
	const tree = [];

	const contentDirs = await fs.readdir(CONTENT_DIR);

	for (const contentDir of contentDirs) {
		const sectionDir = `${CONTENT_DIR}/${contentDir}`;
		const subSectionDirs = (await fs.readdir(sectionDir)).filter((path) => !path.includes('.'));
		const contentDirTitle = dirNameToTitle(contentDir);
		const treeNode = {
			id: contentDir.split('-').splice(1).join('-'),
			title: contentDirTitle,
			sections: [],
		};

		for (const subSectionDir of subSectionDirs) {
			const subSectionDirTitle = dirNameToTitle(subSectionDir);
			const id = subSectionDir.split('-').splice(1).join('-');
			treeNode.sections.push({
				id,
				title: subSectionDirTitle,
				experimental: EXPERIMENTAL_IDS.includes(id),
			});
		}

		tree.push(treeNode);
	}

	return tree;
}

function dirNameToTitle(dirName) {
	return capitalize(dirName.split('-').splice(1).join(' '));
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
