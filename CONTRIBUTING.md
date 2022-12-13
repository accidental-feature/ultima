*This file is still Work in Progress*
## Contributing

[fork]: https://github.com/0hundred0/ultima/fork
[pr]: https://github.com/0hundred0/ultima/pulls

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential to making the app better.

---
# Quick Start

We also love PRs (pull requests). If you're thinking of a large PR, we advise opening up an issue first to talk about it, though! Look at the links below if you're not sure how to open a PR.

1. [Fork][fork] and clone the repository.
2. Install the dependencies: `npm install`.
3. Create a new branch: `git checkout -b your-branch-name`.
4. Work on your issue/feature
5. Before committing the changes run `npm build` to check for any errors
6. Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for writing commit messages
7. Push to your fork and [submit a pull request][pr] in the appropriate branch
8. Pat your self on the back and wait for your pull request to be reviewed for approval by a moderator.

---
# Step-by-Step

Before you start making contributions: 
- Check the [issues page](https://github.com/0hundred0/ultima/issues) to find open issues to work on
- Read [general contributions](https://github.com/0hundred0/ultima/blob/main/CONTRIBUTION.md) for overall guidelines
- Open a new issue if there is something new you want to implement before working on it
- Once forking run `npm install` to install all the needed packages

After that, you can start coding. Here is the workspace layout

- `components` is where all the layout and ui files are.
- `public` is where you can find the icon and image files.
- `pages` contains the different page routes and the api folder
- `styles` contains the global stylesheet with also includes the tailwind imports
- `.env.example` includes an example of what the supabase urls look like
- `tsconfig.json` includes the tailwind custom styles and content pointers

All the other files should be left as is unless discussed with a moderator

It is recommended that as you edit the files you have `npm run dev` running in the background
Once done editing, if everything works appropriately try running `npm run build`.

## Pull Requests

**Before opening any pull request, check that `npm run build` completes without errors**

If you want to contribute to the project, please use *dev* as the base branch, *feat-FEATNAME* for app enhancements, *dev* is what is coming in the next version update i.e. *v2*.

Use *main* branch **ONLY** for critical bug fixes or if you have moderator approval.

Next, create the **Pull Request** to the *dev* branch. If it's a critical bug fix, use *main*.

---

## Branches
### *dev*
This branch is the main development branch

This branch should always build. Sometimes it can be necessary to break this rule. This is why it is **should** and not **must**.
 
### *onewing*
This branch is for testing the version 2 before being released officially.

This branch is the one used to make PR to *main*, so this branch **MUST** build.

### *migrate*
This branch is the quotes api example branch. If you are looking to add additional quotes please wait as *this process is a work in progress* 
### *main*
This is the production branch.

**This must be used for PR only for critical bug fixes** and always **MUST** build.

Changes to README.md or other markdown files are not priorities. So for these changes, use *dev* or *staging*, and they will be implemented in the next release.

### *every other branch*
You can create any branch you want to push & any kind of commits.

There are no rules in the CI for all the other branches.

Once ready, if you need to implement the product.**Follow the rules below.**

# Backward compatibility

Remember to keep the backward compatibility with previous versions. If a change breaks this rule **it must** be discussed.

You can mark them as obsolete old methods, but they **must** work too. **Deprecating is not breaking**.

---

# PR Tips

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Follow [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocked you. (just mark them as draft)

---

# Community

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