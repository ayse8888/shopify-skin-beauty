## Project Explanied

- Projeyi React tabanlı olması sebebi ile Shopify Hydrogen ile kurdum
- Hydrogen ve Shopify CLI yükledim
- npm run dev ile açınız
- Hello World template seçerek projeyi sıfırdan oluşturdum
- İlk etapta bir routes klasörü içine index dosyası oluşturdum. (Ana Dosya)
- Daha sonra bir components klasörü içine dosyası oluşturdum header ve content için
- Tailwind ile çalıştığı için Tailwind config oluşturdum
- Prettier config oluşturdum
- UI daki kısımlar ( form, faq vs) componentlara ayrıldı
- Datalar için ayrı bir data klasörü oluşturdum
- Email gönderimi için Email.js paketini kullandım.
- İstenilen çalışmayı görüntülemek için widget ikonlarından @ işaretine basınız.



# Hydrogen template: Hello World

Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **minimal setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher

```bash
npm create @shopify/hydrogen@latest -- --template hello-world
```

Remember to update `.env` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```
