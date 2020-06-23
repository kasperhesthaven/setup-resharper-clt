import { getInput, addPath, setFailed } from '@actions/core';
import { downloadTool, extractTar, extractZip } from '@actions/tool-cache';

const IS_WINDOWS = process.platform === 'win32';

async function run(): Promise<void> {
	try {
		const version: string = getInput('resharper-version');
		const downloadUrl: string = IS_WINDOWS
			? `https://download.jetbrains.com/resharper/ReSharperUltimate.${version}/JetBrains.ReSharper.CommandLineTools.${version}.zip`
			: `https://download.jetbrains.com/resharper/ReSharperUltimate.${version}/JetBrains.ReSharper.CommandLineTools.Unix.${version}.tar.gz`;

		console.log(`Downloading version ${version} from: `, downloadUrl);
		const downloadPath: string = await downloadTool(downloadUrl);

		console.log('Extracting ReSharper CTL from: ', downloadPath);
		const extractionPath: string = IS_WINDOWS
			? await extractZip(downloadPath)
			: await extractTar(downloadPath);

		console.log('Adding ReSharper CTL to path with value:', extractionPath);
		addPath(extractionPath);
	} catch (error) {
		setFailed(error.message);
	}
}

run();
