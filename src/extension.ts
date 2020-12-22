import * as vscode from 'vscode';
const cleanCSS = require('clean-css');

export function activate(context: vscode.ExtensionContext) {
	let disp = [
		vscode.commands.registerCommand('clean-css-vscode.Format', () => format()),
		vscode.commands.registerCommand('clean-css-vscode.FastBeauty', () => format({format: 'beautify'})),
		vscode.commands.registerCommand('clean-css-vscode.FastKBreaks', () => format({format: 'keep-breaks'})),
		vscode.commands.registerCommand('clean-css-vscode.FastCompact', () => format({}))
	];
	disp.forEach(command => {context.subscriptions.push(command);});
}

function format(option?: object){
	let options = vscode.workspace.getConfiguration('extension').get<object>('CleanCSS');
	let editor = vscode.window.activeTextEditor;
	if (editor !== undefined && editor.document.languageId == 'css'){
		let doc = editor.document;
		editor.edit(edit => {
			edit.replace(
				new vscode.Range(0, 0, doc.lineCount-1, doc.lineAt(doc.lineCount-1).text.length),
				new cleanCSS(option?? options).minify(doc.getText()).styles);
		});
	} else { return; }
}
