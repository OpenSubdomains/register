<p align="center">
   <img alt="Domains" src="https://img.shields.io/github/directory-file-count/OpenSubdomains/register/domains?color=5c4eb&label=domains&style=for-the-badge">
   <img alt="Open Pull Requests" src="https://img.shields.io/github/issues-raw/OpenSubdomains/register?label=pull%20requests&style=for-the-badge">
   <img alt="Open Issues" src="https://img.shields.io/github/issues-pr-raw/OpenSubdomains/register?label=issues&style=for-the-badge">
</p>

<h1 align="center">OpenSubdomains</h1>

<p align="center"><strong>OpenSubdomains</strong> is a service that helps developers get clean and professional-looking domains for their personal websites.</p>
<p align="center"><strong>Inspired by</strong> these amazing services: <a href="https://github.com/is-a-dev">is-a.dev</a> and <a href="https://github.com/open-domains">Open Domains</a>.</p>

---

## 🚀 Register a Domain

Follow these steps to register your domain:
1. **Create your account at our service:**
- How?
  - Go to [this website](https://osd.rweb.site/).
  - Click **Login with GitHub** and follow the instructions to grant the required permissions.
  - Once authorized, you will gain access to your domains (subdomains), etc.

2. **Star this repository.**
3. **Fork this repository.**
4. **Add your subdomain to the `domains/` directory** in a new file named `<your-subdomain>.json`. Ensure your file follows this structure:
   ```json
   {
      "domain": "is-a.dev",
      "subdomain": "example",
      "owner": {
         "repo": "https://github.com/your-repo",
         "email": "your-email@example.com"
      },
      "record": {
         "CNAME": "your-github-pages-url"
      }
   }
5. **Create a pull request with your changes.**
6. **Wait for approval**
7. **When you got approved, go back to our [website](https://osd.rweb.site/)**
8. **Login and find your domain (subdomain)**
9. **Click validate button and watch your domain go live! 🎉**

## NOTICE
This service is still in maintence, so nothing will be accepted at this moment

## 📄 License
OpenSubdomains is licensed under the [GPL-3.0 license](https://github.com/OpenSubdomains/register/blob/main/LICENSE).

## 🆘 Issue
If you have any problems, feel free to [open an issue](https://github.com/OpenSubdomains/register/issues/new/choose).
