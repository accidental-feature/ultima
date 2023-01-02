<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/0hundred0/ultima">
    <img src="/images/ultima_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Ultima.rest</h3>

  <p align="center">
    <samp>A free restful API serving dank game quotes</samp>
    <br />
    <a href="https://ultima.rest/"><strong>Check out the api »</strong></a>
    <br />
    <br />
    <a href="https://github.com/0hundred0/ultima-rest/discussions/1">Game request</a>
    ·
    <a href="https://github.com/0hundred0/ultima-rest/issues">Report Bugs</a>
    ·
    <a href="https://github.com/0hundred0/ultima-rest/issues">Request Additional Features</a>
  </p>
</p>

<br/>

### Techstack

- [supabase](https://supabase.com/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [prisma](https://www.prisma.io/)

> The frontend of the api is hosted on Vercel and the api is on Supabase.
> <br/>
### About

I started Ultima my last project in 2022 because I one of my favorite aspects of video games is the iconic things that various characters say. So, I wanted to find an API to contribute to with some of my favorite quotes, and as far as I could tell, there weren't any. Hence, Ultima.rest was created.

<br/>

### Support

Consider showing some support if you use the api in your projects.

<a href="https://www.buymeacoffee.com/0hundred0">
	<img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" height="35px"/>
</a>

<br/>

<!-- CONTRIBUTING -->

### Contributing

- For new game requests please [add comments here](https://github.com/0hundred0/ultima-rest/discussions/1).
- And for any bug or feature requests, [Submit a issue here](https://github.com/ultima-rest/ultima-rest/issues).

Also please see the [open issues](https://github.com/0hundred0/ultima-rest/issues) for a list of proposed features before submitting one.

Want to help build Ultima? Join the [Discord](https://discord.gg/Qs7qJY3z) to get started.

#### Adding New Quotes
- The quote schema is as follows: 
```
quote: 'string' // The quote. We suggest no more than two sentences.
character: 'string', // Character name as it appears in game
title: 'string', // Game title without special symbols e.g. Crisis Final Fantasy VII
esrb: 'string', // E, E10, T, M, A, or RP
release: 'number'  // Year of Release
```
- Copy the data [template](./data/template.json) to paste into the [quotes.json](./data/quotes.json) making as many copies as needed.
- Once you've added your quotes and before you submit a push request make sure the template is not altered.
- After your additions are reviewed a member of the team will add your profile to the [Ultima.rest](https://ultima.rest) website.
<br/>

<!-- LICENSE -->

### Copyright

Copyright © 2023 [K. Richmond](https://0hundred.dev)

### Shout Outs
Thank you to all the contributors and users of Ultima!
<br/>
Thank you [Anime-chan](https://anime-chan.vercel.app) for the inspiration! Check them out if you have a chance!
