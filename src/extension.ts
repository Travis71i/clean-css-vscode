import * as vscode from 'vscode';
const cleanCSS = require('clean-css');
var debugCh: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {
	let disp = [
		vscode.commands.registerCommand('clean-css-vscode.Format', () => format()),
		vscode.commands.registerCommand('clean-css-vscode.FastBeauty', () => format({format: 'beautify'})),
		vscode.commands.registerCommand('clean-css-vscode.FastKBreaks', () => format({format: 'keep-breaks'})),
		vscode.commands.registerCommand('clean-css-vscode.FastCompact', () => format({}))
	];
  disp.forEach(command => {context.subscriptions.push(command);});
  debugCh = vscode.window.createOutputChannel("Clean CSS");
}

function format(option?: object){
  let editor = vscode.window.activeTextEditor;
  
	if (editor !== undefined && editor.document.languageId == 'css'){
    let doc = editor.document;
    let options = vscode.workspace.getConfiguration('cleanCSS');
    new cleanCSS(option??options.get('formatterOptions')).minify(editor.document.getText(),
    function(error: object,output: {styles: string}) {
      if(!error){    
        editor?.edit(edit => {
          edit.replace(new vscode.Range(0,0,doc.lineCount-1,doc.lineAt(doc.lineCount-1).text.length),
          output.styles)
        });
        if(options.get<boolean>('debugTool.showMessage')) debugInfo(output);
      }else {
        vscode.window.showErrorMessage(error.toString())
      }
    });
	} else { return; }
}

function debugInfo (output: any){
  debugCh.clear();
  debugCh.appendLine('ERRORS:'); let i = 0;
  if(output.errors.length){output.errors.forEach((element: any) => {
    debugCh.appendLine("\t"+(++i)+". "+element);
  })}else {debugCh.appendLine('\tNo errors found')}
  debugCh.appendLine('WARNINGS:'); i = 0;
  if(output.warnings.length){output.warnings.forEach((element: any) => {
    debugCh.appendLine("\t"+(++i)+". "+element);
  })}else {debugCh.appendLine('\tNo warnings founds')}
  debugCh.appendLine('STATS:')
  debugCh.appendLine("\t1. File size: "+output.stats.originalSize+"B (before) -> "+output.stats.minifiedSize+"B (now)")
  debugCh.appendLine("\t2. Efficiency: "+(output.stats.efficiency*100).toFixed(2) + "%")
  debugCh.appendLine("\t3. Time Spent: "+output.stats.timeSpent+"ms")
}