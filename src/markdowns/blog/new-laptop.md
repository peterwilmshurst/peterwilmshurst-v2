## New Laptop

Set myself up a new development machine, yup! Gave me an opportunity to look deeper into a few of my peers' setups, dotfiles and so forth. I decided on using the git bare repository method, thanks for the advice [DistroTube](https://www.youtube.com/watch?v=tBoLDpTWVOM "A better way to manage dot files").

*   All software installed via homebrew package manager allowing simple maintenance and portability
*   All global and local settings and configurations synced and maintained via a git bare repository (no symlinks!)
*   Aliases added for several use cases and managed via repo.
*   Optimal and elegant zsh (terminal) configuration including:
    *   Additional information via cmd line re: git repo, current branch, permissions, version number etc.
    *   Folder and file icons and formatting
    *   Syntax highlighting as you type – green = command exists, red = incorrect
    *   Automatically switch between versions of Node depending on project
*   Base vscode extensions (backed up and synced with repo)

If you're interested, check out the [repo here](https://github.com/peterwilmshurst/dotfiles "peter's dotfiles")