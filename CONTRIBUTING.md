*This file is still Work in Progress*

# Start development

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

# Pull Requests

**Before opening any pull request, check that `npm run build` completes without errors**

If you want to contribute to the project, please use *v1* or *dev* as the base branch, *v1* for app enhancements, *dev* is what is coming in the next version update *v2*.

Use *main* branch **ONLY** for critical bug fixes or if you have moderator approval.

Next, create the **Pull Request** to *v1* or *dev* branch. If it's a critical bug fix, use *main*.

## Branches

### *v1*

This branch is the main version 1 development branch, it's going to be deprecated once the version 2 will be released officially.

### *dev*
This branch is the main development branch, and it has the lowest priority branch under CI.

This branch should always build. Sometimes it can be necessary to break this rule. This is why it is **should** and not **must**.
 
### *onewing*
This branch is for testing the version 2 before being released officially.

This branch is the one used to make PR to *main*, so this branch **MUST** build.

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

# Community

Feel free to join the Discord community to talk about the project or just to chat. Collaborating is easier if we all talk directly.

[![Discord](/public/icons/discord-icon.svg)](https://discord.gg/mPgVbGPw)

---

Thanks for making this all possible!