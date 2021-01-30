<h1 style="text-align: center;">
    <img src="https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/clean-css-vscode-v1.png" alt="Clean CSS for VSCode" width="800px"/>
</h1>

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/travis71i.clean-css-vscode)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/travis71i.clean-css-vscode)
![David](https://david-dm.org/Travis71i/clean-css-vscode.svg)
![LICENSE](https://img.shields.io/github/license/Travis71i/clean-css-vscode)

CSS file optimizer. Using [Clean CSS](https://github.com/jakubpawlowicz/clean-css) and adapting it to work as an extension of VSCode. 

**Note:** The functionality of this extension depends entirely on Clean CSS. Thanks to [jakubpawlowicz](https://github.com/jakubpawlowicz) for creating and managing it!

# Features
- Compress CSS files using Clean CSS optimizer.

![Before //dev](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/dev/images/css_1.png)
![After //dev](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/deb/images/css_2.png)

- Quickly format using different presets, in the editor context menu.

![Editor Context Menu //dev](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/dev/images/editor_context_menu.png)

- Use "Clean CSS: Format Document" command (Shift+Alt+F) to format using user settings.

![Settings UI //dev](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/dev/images/settings_ui.png)

# Extension Settings

## Debug Tool

### Show Output

`cleanCSS.debugTool.showOutput`: Display information about formatter usage on an output channel.

![Clean CSS: Debug Output Channel example](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/debugOutputExample.png)

## Formatter Options

All options in this group go directly to the formatter. `cleanCSS.formatterOptions` object is an `options` object of Clean CSS.
    
See [Clean CSS: Options](https://github.com/jakubpawlowicz/clean-css#constructor-options) for more info about the `options` object.

# Release Notes
See [CHANGELOG.md](CHANGELOG.md) for more info.

## 1.0.0

### Added
 - **"Clean CSS: Format Document" command** to format the whole document using the `settings.json` settings
 - **"Clean CSS: Fast Compact" command** to compact the document into a single line, using default settings.
 - **"Clean CSS: Fast Beautify" Format** command to format the document in a nice way, using default settings.
 - **"Clean CSS: Fast Keep Breaks" Format** command to format the document in a compact but more readable way, using default settings.
 - **"Format Document (Clean CSS)" submenu** in the editor context menu with all 4 commands listed above.
 - **Key binding: "Format Document" (Shift+Alt+F)** to use `Clean CSS: Format Document` command.
 - **Clean CSS output channel** to see more information about formatting. Such as some error and warning messages.
