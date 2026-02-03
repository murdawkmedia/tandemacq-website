# Deployment Guide - Tandem Acquisition Group

This website is a static site built with Vite and React. To deploy it to GoDaddy (or any standard web host), follow these steps:

## 1. Build the Project

Run the build command to generate the production files.

```bash
npm run build
```

This will create a `dist/` folder in your project directory.

## 2. Prepare for Upload

The contents of the `dist/` folder are what you need to upload.

- **Do not** upload the `src/` folder or `node_modules/`.
- Only upload the *contents* inside `dist/`.

## 3. Upload to GoDaddy

1. Log in to your GoDaddy account and access the **cPanel** for your hosting.
2. Open **File Manager**.
3. Navigate to the `public_html` directory (or the specific folder for your domain).
4. **Upload** the files from your local `dist/` folder.
    - `index.html` must be in the root of `public_html`.
    - `assets/` folder should be uploaded as is.

## 4. Troubleshooting

- **Routing Issues:** If refreshing a page (like `/contact`) gives a 404 error, you need to configure a rewrite rule.
  - Create a `.htaccess` file in `public_html` with the following content:

    ```apache
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteCond %{REQUEST_FILENAME} !-l
      RewriteRule . /index.html [L]
    </IfModule>
    ```

## 5. Verification

Visit your domain (e.g., `tandemacq.com`) and ensure:

- Images load correctly.
- Navigation works (clicking Home/Contact).
- Layout looks good on mobile.
