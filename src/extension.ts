import * as vscode from 'vscode';
const cleanCSS = require('clean-css');
var debugCh: vscode.OutputChannel;

// List of commands to push.
let CommandList: Array<vscode.Disposable> = [
  vscode.commands.registerCommand('clean-css-vscode.Format', () => format()),
  vscode.commands.registerCommand('clean-css-vscode.FastBeauty', () => format({ format: 'beautify' })),
  vscode.commands.registerCommand('clean-css-vscode.FastKBreaks', () => format({ format: 'keep-breaks' })),
  vscode.commands.registerCommand('clean-css-vscode.FastCompact', () => format({}))
];

// Activating extension
export function activate(context: vscode.ExtensionContext) {
  // Add commands to the subscription array.
  context.subscriptions.push(...CommandList);
  // Creating the Output Channel for warning, errors and info.
  debugCh = vscode.window.createOutputChannel("Clean CSS");
}

//for "clean-css-vscode.Format" command and others
async function format(option?: object) {
  let formatterOptions: any = vscode.workspace.getConfiguration('cleanCSS').get<Object>('formatterOptions');
  let editor = vscode.window.activeTextEditor;
  if (editor !== undefined) {
    new cleanCSS(option ?? formatterOptions)
      .minify(editor.document.getText(), (error: object, output: { styles: string }) => CleanCSSCallback(error, output, editor));
  } else {
    vscode.window.showErrorMessage("Editor not available");
  }
}

//Use the Debug Output Channel
function debugInfo(output: any) { 
  if (vscode.workspace.getConfiguration('cleanCSS').get('debugTool.showMessage')) {
    debugCh.clear();
    debugCh.show();
    // Show a list of errors.
    debugCh.appendLine('ERRORS:');
    if (output.errors.length) {
      output.errors.forEach((element: any, index: number) => {
        debugCh.appendLine("\t" + index + ". " + element);
      })
    } else { debugCh.appendLine('\tNo errors found') }
    // Show a list of warnings.
    debugCh.appendLine('WARNINGS:');
    if (output.warnings.length) {
      output.warnings.forEach((element: any, index: number) => {
        debugCh.appendLine("\t" + index + ". " + element);
      })
    } else { debugCh.appendLine('\tNo warnings founds') }
    debugCh.appendLine('STATS:');
    // Clean CSS Doc: Using inline options is going to change the size of the file. This shows the stats of the file AFTER the change.
    debugCh.appendLine("\t1. File size: " + output.stats.originalSize + "B (before) -> " + output.stats.minifiedSize + "B (now)");
    debugCh.appendLine("\t2. Efficiency: " + (output.stats.efficiency * 100).toFixed(2) + "%");
    debugCh.appendLine("\t3. Time Spent: " + output.stats.timeSpent + "ms");
  }
}

//Callback for "minify" function of Clean CSS
function CleanCSSCallback(error: object, output: { styles: string }, editor?: vscode.TextEditor) {
  // This because typescript need to verify "editor" existence every time
  if (editor) {
    editor.edit(edit => {
      edit.replace(
        new vscode.Range(0, 0,
          editor.document.lineCount - 1,
          editor.document.lineAt(editor.document.lineCount - 1).text.length),
        output.styles)
    });
    //Use Output channel to info.
    debugInfo(output);
  } else {
    vscode.window.showErrorMessage(error.toString());
  }
}
