// const fs = require('fs');
// const path = require('path');

// function getAllFiles(dirPath, arrayOfFiles) {
// 	const files = fs.readdirSync(dirPath);

// 	arrayOfFiles = arrayOfFiles || [];

// 	files.forEach((file) => {
// 		if (fs.statSync(dirPath + '/' + file).isDirectory()) {
// 			arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
// 		} else {
// 			arrayOfFiles.push(path.join(dirPath, '/', file));
// 		}
// 	});

// 	return arrayOfFiles;
// }

// function checkInternalLinks() {
// 	const pagesDir = path.join(process.cwd(), 'pages');
// 	const allFiles = getAllFiles(pagesDir);
// 	const pageRoutes = allFiles.map((file) =>
// 		file
// 			.replace(pagesDir, '')
// 			.replace(/\.js$/, '')
// 			.replace(/index$/, '')
// 	);

// 	const brokenLinks = [];

// 	allFiles.forEach((file) => {
// 		const content = fs.readFileSync(file, 'utf8');
// 		const linkRegex = /<Link\s+href=["']([^"']+)["']/g;
// 		let match;

// 		while ((match = linkRegex.exec(content)) !== null) {
// 			const href = match[1];
// 			if (href.startsWith('/') && !pageRoutes.includes(href)) {
// 				brokenLinks.push({ file, href });
// 			}
// 		}
// 	});

// 	if (brokenLinks.length > 0) {
// 		console.error('Broken internal links found:');
// 		brokenLinks.forEach(({ file, href }) => {
// 			console.error(`  ${file}: ${href}`);
// 		});
// 		process.exit(1);
// 	} else {
// 		console.log('No broken internal links found.');
// 	}
// }

// checkInternalLinks();
