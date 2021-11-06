import * as vscode from 'vscode';
import {Option, Output} from 'clean-css';
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
async function format(option?: Option) {
  // Get a CleanCSS.Option object in formatterOptions
  let formatterOptions: Option = vscode.workspace.getConfiguration('cleanCSS').get<Option>('formatterOptions') ?? {};

  // If there is a active TextEditor, call cleanCSS.minify() method to set the output in the TextEditor, calling CleanCSSCallback.
  if (vscode.window.activeTextEditor !== undefined) {
    let editor = vscode.window.activeTextEditor;
    new cleanCSS(option ?? formatterOptions)
      .minify(editor.document.getText(), (errors: string[] | null, output: Output) => CleanCSSCallback(errors, output, editor));
  } else {
    // ...else show a error message
    vscode.window.showErrorMessage("Editor not available");
  }
}

//Use the Debug Output Channel
function debugInfo(output: Output) { 
  if (vscode.workspace.getConfiguration('cleanCSS').get('debugTool.showMessage')) {
    debugCh.clear();
    debugCh.show();
    // Show a list of warnings.
    debugCh.appendLine('WARNINGS:');
    if (output.warnings.length) {
      output.warnings.forEach((element, index) => {
        debugCh.appendLine("\t" + (index+1) + ". " + element);
      })
    } else { debugCh.appendLine('\tNo warnings founds') }
    // Show a list of errors.
    debugCh.appendLine('ERRORS:');
    if (output.errors.length) {
      output.errors.forEach((element, index) => {
        debugCh.appendLine("\t" + (index+1) + ". " + element);
      })
    } else { debugCh.appendLine('\tNo errors founds') }
    debugCh.appendLine('STATS:');
    // Clean CSS Doc: Using inline options is going to change the size of the file. This shows the stats of the file AFTER the change.
    debugCh.appendLine("\t1. File size: " + output.stats.originalSize + "B (before) -> " + output.stats.minifiedSize + "B (now)");
    debugCh.appendLine("\t2. Efficiency: " + (output.stats.efficiency * 100).toFixed(2) + "%");
    debugCh.appendLine("\t3. Time Spent: " + output.stats.timeSpent + "ms");
  }
}

//Callback for "minify" function of Clean CSS
function CleanCSSCallback(errors: string[] | null, output: Output, editor: vscode.TextEditor) {
  // Just return if there are errors
  if (errors !== null) {
    vscode.window.showErrorMessage('[Clean CSS] Errors were found | See the Output Channel for more info.');
  }
  // Edit the document asociated with the current TextEditor
  editor.edit(edit => {
    edit.replace(
      // Replace need a range (In this case, all the text in the document) and a string to replace the old text (Clean CSS output)
      new vscode.Range(0, 0, editor.document.lineCount - 1, editor.document.lineAt(editor.document.lineCount - 1).text.length), 
      output.styles);
  });
  //Use Output channel to info.
  debugInfo(output);
}
