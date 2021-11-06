<h1 style="text-align: center;">
    <img src="https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/clean-css-vscode.png" alt="Clean CSS for VSCode" width="800px"/>
</h1>

**Notes:** The functionality of this extension depends entirely on [Clean CSS](https://github.com/jakubpawlowicz).

<div style="text-align: center;">

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/travis71i.clean-css-vscode?color=0066B8&style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=travis71i.clean-css-vscode)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/travis71i.clean-css-vscode?color=0066B8&style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=travis71i.clean-css-vscode)
[![Clean CSS version used](https://img.shields.io/github/package-json/dependency-version/travis71i/clean-css-vscode/clean-css?color=27AAE1&style=for-the-badge)](https://github.com/clean-css/clean-css/blob/master/History.md#522--2021-10-21)
[![GitHub license](https://img.shields.io/github/license/travis71i/clean-css-vscode?color=g&style=for-the-badge)](https://github.com/Travis71i/clean-css-vscode/blob/master/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/travis71i/clean-css-vscode?style=for-the-badge)](https://github.com/travis71i/clean-css-vscode/issues)

</div>

# What's new
**Clean CSS has been updated to [version 5.0](https://github.com/jakubpawlowicz/clean-css#whats-new-in-version-50)**.
You can see what has changed [here](https://github.com/jakubpawlowicz/clean-css/blob/master/History.md).

These changes affect the functionality of the extension, but will not affect how it is handled in VSCode. Except for :
>Changes default Internet Explorer compatibility from 10+ to >11, to revert the old default use { compatibility: 'ie10' } flag;

To see a list of all the changes in this extension see [CHANGELOG.md](CHANGELOG.md).

# Features
- Compress CSS files using Clean CSS optimizer.

![Before](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/css_1.png)
![After](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/css_2.png)

- Quickly format using different presets, in the editor context menu.

![Editor Context Menu](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/editor_context_menu.png)

- Use "Clean CSS: Format Document" command (Shift+Alt+F) to format using user settings.

![Settings UI](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/settings_ui.png)


# Extension Settings

## Debug Tool

### Show Output

`cleanCSS.debugTool.showOutput`: Display information about formatter usage on an output channel.

![Clean CSS: Debug Output Channel example](https://raw.githubusercontent.com/Travis71i/clean-css-vscode/master/images/debugOutputExample.png)

## Formatter Options

All options in this group go directly to the formatter. `cleanCSS.formatterOptions` object is an `options` object of Clean CSS.
    
See [Clean CSS: Options](https://github.com/jakubpawlowicz/clean-css#constructor-options) for more info about the `options` object.
