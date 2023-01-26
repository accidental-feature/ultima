*This file is still Work in Progress*
# Contributing
<img src="/public/images/cloud-idle.gif" alt="Logo" width="90" height="90">

[fork]: https://github.com/0hundred0/ultima/fork
[pr]: https://github.com/0hundred0/ultima/pulls

Hi there! I am thrilled that you'd like to contribute to this project. Your help is essential to making the app better.

---
## Walkthrough for Contributors
I am a sucker for a good PR (pull requests). But, if you're thinking of working on a large PR, I recommend opening up an issue first to talk about it! 

<br>

Before you start get started: 
- Check the [issues page](https://github.com/0hundred0/ultima/issues) to find open issues to work on
- Read [general contributions](https://github.com/0hundred0/ultima/blob/main/CONTRIBUTION.md) for overall guidelines
- Open a new issue if there is something new you want to implement before working on it
- Once forking run `npm install` to install the necessary packages

After that, you can start coding!

### Quick Start

### UI Updates
1. [Fork][fork] and clone the __main__ repository.
2. Install the dependencies: `npm install`.
3. Create a new branch: `git checkout -b feat-FEATURE-NAME`.
4. Work on your issue/feature
5. Before committing the changes run `npm build` to check for any errors
6. Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for writing commit messages
7. Push to your fork and [submit a pull request][pr] in the appropriate branch
8. Pat your self on the back and wait for your pull request to be reviewed for approval by a moderator.

<br>

Here is the workspace layout:

- `components` is where all the layout and ui files are.
- `pages` contains the different page routes and the api folder
- `public` is where you can find the icon and image files.
- `src` contains general utilities and library items. Think of it a place for miscellaneous items
- `styles` contains the global stylesheet with also includes the tailwind imports
- `.env.example` includes an **example** of what the supabase urls look like if the app was created
- `tsconfig.json` includes the tailwind custom styles and content pointers

All the other folder and files should be left as is unless discussed with a moderator

It is recommended that as you edit the files you have `npm run dev` running in the background.
Once done editing, if everything works appropriately try running `npm run build`.

---
### Opening Pull Requests

**Before opening any pull request, check that `npm run dev` completes without errors. The missing env variables will cause and error on build.**

Please use the following naming conventions for Pull Requests:
- *feat-FEATURENAME* for app enhancements
- *fix-BUGNAME* for bug fixes
- *addQuotes* for additional quotes

Next, create the **Pull Request** to the *main* branch.
---

## Branches
### *main*
This is the production branch.
**This should be used for PR** and always **MUST** build.
### [*migrate*](https://github.com/0hundred0/ultima/tree/migrate)
This branch is the quotes api example branch. If you are looking to add additional quotes please visit the migrate branch.

Once ready, if you need to implement the product.**Follow the rules below.**
---

## Additional PR Tips 

- Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Follow [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

**Work in Progress** pull requests are also welcome to get feedback early on, or if there is something blocked you. (just mark them as a draft)

---

## Join the Community

Feel free to join the Discord community to talk about the project or just to chat. Collaborating is easier if we all talk directly.

[![Discord](/public/icons/discord-icon.svg)](https://discord.gg/mPgVbGPw)

---

## Additional Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [About Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Conventional commits vscode extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- [Github issues and pull requests vscode extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

---

Thanks for being part of Ultima!