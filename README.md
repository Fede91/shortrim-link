# shortrim-link

Welcome to `shortrim-link`, an open-source link shortener that lets you create short links effortlessly. Built with Next.js, this tool prioritizes privacy by tracking only redirects without storing any IP or personal user information. With its minimal setup requirements, you can deploy `shortrim-link` to Vercel and have your project up and running in no time.

## Features

- **Privacy-Focused**: Tracks only the redirects without collecting any personal data.
- **Next.js Framework**: Built on a popular React framework for server-rendered applications.
- **Vercel KV Database**: Utilizes Vercel's Key-Value store to manage short links efficiently.
- **Easy Deployment**: Set up and deploy with Vercel for a streamlined developer experience.
- **Dashboard Access**: Secure access to the dashboard using a Master password set via environment variables.

## Prerequisites

To use `shortrim-link`, you'll need the following:

- A [Vercel](https://vercel.com) account for deployment.
- [Node.js](https://nodejs.org/) and npm installed on your machine.
- Familiarity with Next.js and React basics is preferred.
- A Master password for dashboard access, set as an environment variable.

## Getting Started

These instructions will guide you through setting up your instance of `shortrim-link`.

### Installation

1. Fork and clone the repository:
   ```sh
   git clone https://github.com/Fede91/shortrim-link.git
   ```
2. Navigate to the project directory:
   ```sh
   cd shortrim-link
   ```
3. Install the required NPM packages:
   ```sh
   npm install
   ```
4. Start the local development server:
   ```sh
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser to see the application running.

### Configuration

Configure the project by setting up the necessary environment variables:

- `ADMIN_MASTER_PASSWORD`: A strong password to secure access to the dashboard.
- `NEXT_PUBLIC_JWT_SECRET_KEY`: JWT public key.
- `NEXT_PUBLIC_SHORT_LINK_URL`: Domain address.
- Vercel KV Database configurations according to Vercel's documentation.

Set these variables in a `.env.local` file for local development and in your Vercel project settings for production.

### Deployment

Deploy your `shortrim-link` application to Vercel with these steps:

1. Install Vercel CLI globally if you haven't already:
   ```sh
   npm install -g vercel
   ```
2. Link your local project to a Vercel project and deploy it:
   ```sh
   vercel
   ```
   Follow the prompts to complete the deployment process.

## Usage

Once deployed, navigate to your Vercel deployment URL. Access the dashboard using the Master password to start creating and managing your short links.

## Contributing

Contributions to `shortrim-link` are greatly appreciated. If you have ideas to improve the project, please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

`shortrim-link` is released under the MIT License. See the `LICENSE` file for more details.

## Contact

Please feel free to contact the maintainers for any questions or support:

- Fede91 - [@FeDesign_fd](https://twitter.com/FeDesign_fd)
- Project Link: [https://github.com/Fede91/shortrim-link](https://github.com/Fede91/shortrim-link)

## Acknowledgments

Use this space to show your gratitude to any project, individual, or resources that you found helpful during the creation of `shortrim-link`.

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Vercel KV Database Documentation](https://vercel.com/docs/concepts/functions/serverless-functions#environment-variables)

## Security

Your security is important. Remember to never commit your `ADMIN_MASTER_PASSWORD` or any sensitive data to your version control history. Always use environment variables for any credentials or secret keys.

## Additional Notes

- Make sure to comply with any legal requirements for URL shortening services in your jurisdiction.
- Regularly check dependencies for updates to ensure the security and reliability of your instance.
- If you intend to extend the functionality of `shortrim-link`, consider writing tests to maintain the stability of the application.

## Feedback

If you have any feedback or suggestions, please open an issue in the GitHub repository, and we'll do our best to incorporate useful features and improvements in future releases.

## Support

If you like `shortrim-link` and find it useful, please consider supporting the project by starring the repository or contributing to its development. Your support is what keeps the project growing!

Thank you for considering `shortrim-link` for your URL shortening needs. We hope you find it as useful and easy to use as we do. Happy shortening!
