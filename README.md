# strapi-provider-email-console

## Resources

- [LICENSE](LICENSE)

## Links

- [Strapi website](https://strapi.io/)
- [Strapi documentation](https://docs.strapi.io)
- [Strapi community on Discord](https://discord.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Installation

```bash
# using yarn
yarn add MadAppGang/strapi-provider-email-console

# using npm
npm install MadAppGang/strapi-provider-email-console --save
```

### Example

**Path -** `./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'console',
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
  },
  // ...
});
```
