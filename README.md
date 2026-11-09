# Minjae Cho — Research Website

A responsive, English-language researcher homepage built with plain HTML, CSS, JavaScript, and SVG. It is ready for GitHub Pages: no package installation, build command, framework, or API key is required.

## Preview locally

Open a terminal in this folder and run:

```sh
python3 -m http.server 8000
```

Visit [http://localhost:8000](http://localhost:8000). Press `Ctrl+C` in the terminal to stop the server.

## Edit the website

| File | What to edit |
| --- | --- |
| `index.html` | Name, affiliation, research descriptions, project links, contact details, and page metadata |
| `assets/styles.css` | Colors, typography, spacing, and responsive layouts |
| `assets/site.js` | Small interface behaviors |
| `assets/*.svg` | Vector illustrations and icons |
| `.nojekyll` | Keep this empty file so GitHub Pages serves the static files directly |

The website uses relative asset paths, so it can also run under a repository subdirectory. Review the research wording and contact information in `index.html` before publishing. The introduction describes research interests and ongoing work; add publication entries only when their details and links are ready.

## Publish with GitHub Pages

1. In the `MinjaeCho-phy` account, create a repository named **`minjaecho-phy.github.io`**. GitHub's current documentation specifies lowercase letters for the user-site repository name. Choose **Public** if using GitHub Free.
2. Put the **contents of this folder** in the repository's root on the `main` branch. `index.html`, `assets/`, and `.nojekyll` must be at the top level, rather than inside another `minjae-cho-site` folder. Include the hidden `.nojekyll` file when copying.
3. Open the repository's **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select **main** and **/(root)**, then click **Save**.
5. After deployment completes, open [https://minjaecho-phy.github.io/](https://minjaecho-phy.github.io/). Updates can take up to 10 minutes to appear. If needed, inspect the repository's **Actions** tab for the Pages deployment status.

Future commits to `main` publish updates automatically with this configuration.

Official references: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
