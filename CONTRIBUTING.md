[fork]: https://github.com/0hundred0/ultima/fork
[pr]: https://github.com/0hundred0/ultima/pulls

<h1 align='center'>Contributing to Ultima</h1>

<p align="center">
	<img src="/public/images/cloud-idle.gif" alt="Logo" width="90" height="90">	
</p>

<p align="center">
	Hi there! I am thrilled that you'd like to contribute to this project. Your help is essential to making the app better.
</p>

---

<h2 align='center'>Note to Potential Contributors</h2>

<p align='center'>
	I am a sucker for a good PR (pull requests). But, if you're thinking of working on a large PR, I recommend opening up an issue first to talk about it! 
</p>  

---

## Adding Quotes

1. [Fork][fork] and clone the __main__ repository.
2. Checkout to the __migrate branch__
3. Install the dependencies: `npm install`.
4. Create a new branch: `git checkout -B add-quotes-USERNAME` e.g. `git checkout -B add-quotes-0hundred0`
5. Delete the old quotes found in the [data/quotes.json](data/quotes.json)
6. Add your quotes to the __quotes.json__ following the schema found in the [template](data/template.json). __Only changes to the quotes.json will be added.__
7. Save your work.
8. Push to your fork and [submit a pull request][pr] in the __migrate branch__
9. Pat your self on the back and wait for your pull request to be reviewed for approval by a moderator.  

### Disclaimer

As much as I appreciate all the help, please try to add at least 10 quotes before submitting a pull request. And those who submit 20 or more will be added to the "contributors" section on the Ultima website.  

## Workspace Layout

- `data` is where the quotes.json which is used to send quotes to the database is stored. Also houses the quotes template.json.
- `images` contains the images/gifs used for the markdown files.
- `lib` is where you can find the prisma client is initialized and the database management functions.
- `prisma` is where the prisma schema and migration files are located. It is also where the .env file for the database can be found
- `prisma/.env.example` includes an __example__ of what the supabase urls look like if the app was created
- `src` is where the database server is connected and the data functions are ran to manage
- `tsconfig.json` includes the tailwind custom styles and content pointers

### The workspace layout is purely for informational purposes, please do not edit the files without moderator approval

---

## Branches

### [*main*](https://github.com/0hundred0/ultima)

This is the production branch.
__This should be used for PR__ and always __MUST__ build.  

### [*migrate*](https://github.com/0hundred0/ultima/tree/migrate)

This branch is the quotes api example branch. If you are looking to add additional quotes please visit the migrate branch.

---

## Join the Community

Feel free to join the Discord community to talk about the project or just to chat. Collaborating is easier if we all talk directly.

[Discord](https://discord.gg/mPgVbGPw)

---

## Additional Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [About Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Conventional commits vscode extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- [Github issues and pull requests vscode extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

---

Thank you to all Ultima-contributors!

### *This file is still Work in Progress*
