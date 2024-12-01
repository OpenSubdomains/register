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
1. **Authorize the OAuth App:**
- Why?
  - Authorizing the OAuth App allows for seamless integration and ensures that you have the necessary permissions to fork the repository and create a pull request directly from your GitHub account. It simplifies      the process while maintaining security.
- How?
  - Go to the [GitHub OAuth App Authorization page]().
  - Click **Authorize Application** and follow the instructions to grant the required permissions.
  - Once authorized, the app will have access to fork the repository and create pull requests on your behalf.

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
6. **Wait for approval and watch your domain go live! 🎉**

## ℹ️ Domains
| Available Domains |
|:-:|
| [`*.is-a-dev`](https://is-a.dev) |

## ⚙️ Settings
| Setting                                                        | [`is-a.dev`](https://is-a.dev)  |
|---------------------------------------------------------------|--------------------------------|
| PSL                                                           | ✅                             |
| [DNSSEC][dnssec]                                               | ✅                             |
| Email                                                         | ✅                             |
| SSL/TLS*                                                      | [Full][ssl-full]               |
| Always Use HTTPS*                                             | ✅                             |
| HTTP Strict Transport Security (HSTS)                         | ✅                             |
| Minimum TLS Version*                                          | 1.2                            |
| Opportunistic Encryption, TLS 1.3*                            | ✅                             |
| WAF (Web Application Firewall)*                               | Medium Security Level          |
| Browser Integrity Check*                                       | ✅                             |

[dnssec]:https://developers.cloudflare.com/dns/additional-options/dnssec
[ssl-full]:https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full

---
## 🤝 Contribute
We're always looking for contributors! Whether it's improving the documentation or adding features, feel free to get involved.

## 📄 License
OpenSubdomains is licensed under the [GPL-3.0 license](https://github.com/OpenSubdomains/register/blob/main/LICENSE).

## 🆘 Issue
If you have any problems, feel free to [open an issue](https://github.com/OpenSubdomains/register/issues/new/choose).
