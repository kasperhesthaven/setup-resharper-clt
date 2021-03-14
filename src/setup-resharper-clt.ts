import { getInput, addPath, setFailed } from '@actions/core';
import { downloadTool, extractZip } from '@actions/tool-cache';

async function run(): Promise<void> {
	try {
		const version: string = getInput('resharper-version');
		const downloadUrl = `https://download.jetbrains.com/resharper/dotUltimate.${version}/JetBrains.ReSharper.CommandLineTools.${version}.zip`;

		console.log(`Downloading version ${version} from: `, downloadUrl);
		const downloadPath: string = await downloadTool(downloadUrl);

		console.log('Extracting ReSharper CLT from: ', downloadPath);
		const extractionPath: string = await extractZip(downloadPath);

		console.log('Adding ReSharper CLT to path with value:', extractionPath);
		addPath(extractionPath);
	} catch (error) {
		setFailed(error.message);
	}
}

run();
