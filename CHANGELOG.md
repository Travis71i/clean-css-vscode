# Change Log

All notable changes to the Clean CSS, extension for VSCode will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.0.1] - 2021-06-02
### Added
 - **"cleanCSS.formatterOptions.compatibility" option's value**:
Clean CSS v5.0 changed the default value of this option. Creating the `ie10` tag to use the old defaults.
### Changed
 - **Updating dependency:** clean-css v4.2.3 **->** clean-css v5.0.1

## [1.0.0] - 2021-01-01
### Added
 - **"Clean CSS: Format Document" command** to format the whole document using the `settings.json` settings
 - **"Clean CSS: Fast Compact" command** to compact the document into a single line, using default settings.
 - **"Clean CSS: Fast Beautify" Format** command to format the document in a nice way, using default settings.
 - **"Clean CSS: Fast Keep Breaks" Format** command to format the document in a compact but more readable way, using default settings.
 - **"Format Document (Clean CSS)" submenu** in the editor context menu with all 4 commands listed above.
 - **Key binding: "Format Document" (Shift+Alt+F)** to use `Clean CSS: Format Document` command.
 - **Clean CSS output channel** to see more information about formatting. Such as some error and warning messages.