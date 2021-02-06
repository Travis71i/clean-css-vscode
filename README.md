<h1 style="text-align: center;">
    <img src="https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/clean-css-vscode-v1.png" alt="Clean CSS for VSCode" width="800px"/>
</h1>

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/travis71i.clean-css-vscode)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/travis71i.clean-css-vscode)
![David](https://david-dm.org/Travis71i/clean-css-vscode.svg)
![LICENSE](https://img.shields.io/github/license/Travis71i/clean-css-vscode)

**Notes:** The functionality of this extension depends entirely on Clean CSS. Thanks to [jakubpawlowicz](https://github.com/jakubpawlowicz) for creating and managing it!

# What's new
**Clean CSS has been updated to [version 5.0](https://github.com/jakubpawlowicz/clean-css#whats-new-in-version-50)**.
You can see what has changed [here](https://github.com/jakubpawlowicz/clean-css/blob/master/History.md).

These changes affect the functionality of the extension, but will not affect how it is handled in VSCode. Except for :
>Changes default Internet Explorer compatibility from 10+ to >11, to revert the old default use { compatibility: 'ie10' } flag;

To see a list of all the changes in this extension see [CHANGELOG.md](CHANGELOG.md).

# Features
- Compress CSS files using Clean CSS optimizer.

![Before //dev](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/dev/images/css_1.png)
![After //dev](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/dev/images/css_2.png)

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

# Current Version Changes

