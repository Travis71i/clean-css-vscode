<h1 style="text-align: center;">
    <img src="https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/clean-css-vscode-v1.png" alt="Clean CSS for VSCode" width="800px"/>
</h1>

CSS file optimizer. Using [Clean CSS](https://github.com/jakubpawlowicz/clean-css) and adapting it to work as an extension of VSCode. 

**Note:** The functionality of this extension depends entirely on Clean CSS. Thanks to [jakubpawlowicz](https://github.com/jakubpawlowicz) for creating and managing it!

# Features

- Compress CSS files using Clean CSS optimizer.
- Quickly format using different presets, in the editor context menu.
- Use "Clean CSS: Format Document" command (Shift+Alt+F) to format using user settings.

# Extension Settings

## Debug Tool

### Show Output

`cleanCSS.debugTool.showOutput`: Display information about formatter usage on an output channel.

![Clean CSS: Debug Output Channel example](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/debugOutputExample.png)

## Formatter Options

All options in this group go directly to the formatter.
See [Clean CSS: Options](https://github.com/jakubpawlowicz/clean-css#constructor-options) for more info about it.

### List of Supported Settings in Settings UI

#### Compatibility

- `cleanCSS.formatterOptions.compatibility` Type: string

#### Format

- `cleanCSS.formatterOptions.format.breaks` Type: object
- `cleanCSS.formatterOptions.format.breakWith` Type: string
- `cleanCSS.formatterOptions.format.indentBy` Type: number
- `cleanCSS.formatterOptions.format.indentWith` Type: string
- `cleanCSS.formatterOptions.format.spaces` Type: object
- `cleanCSS.formatterOptions.format.wrapAt` Type: number or boolean
- `cleanCSS.formatterOptions.format.semicolonAfterLastProperty` Type: boolean

#### Inline

- `cleanCSS.formatterOptions.inline` Type: Array

#### Levels

- `cleanCSS.formatterOptions.level.1` Type: object
- `cleanCSS.formatterOptions.level.2` Type: object

# Release Notes
See [CHANGELOG.md](CHANGELOG.md) for more info.

## 1.0.0

### Added
 - **"Clean CSS: Format Document" command** to format the whole document using the `settings.json` settings
 - **"Clean CSS: Fast Compact" command** to compact the document into a single line, using default settings.
 - **"Clean CSS: Fast Beautify" Format** command to format the document in a nice way, using default settings.
 - **"Clean CSS: Fast Keep Breaks" Format** command to format the document in a compact but more readable way, using default settings.
 - **"Format Document (Clean CSS)" submenu** in the editor context menu with all 4 commands listed above.
 - **Key binding: "Format Document" (Ctrl+Shift+F)** to use `Clean CSS: Format Document` command.
 - **Clean CSS output channel** to see more information about formatting. Such as some error and warning messages.
