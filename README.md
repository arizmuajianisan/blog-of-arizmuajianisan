# Ariz Muajianisan Blog

This is the personal blog and portfolio of Ariz Muajianisan, built with [Astro](https://astro.build) and based on the [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## 🚀 Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages / Workers
- **Domain:** [arzlabserver.my.id](https://arzlabserver.my.id)

## 🛠️ Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Preview the build:**
    ```bash
    npm run preview
    ```

## 📦 Deployment

This project is configured to deploy to Cloudflare.

To deploy the latest build:

```bash
npm run deploy
```

This will run `wrangler deploy`, which uses the configuration in `wrangler.toml` to upload the `dist` folder to Cloudflare.