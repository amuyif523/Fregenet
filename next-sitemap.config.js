/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://fregenet-ngo.org', // Placeholder, user should update deployment URL
    generateRobotsTxt: true,
    exclude: ['/style-guide'], // Exclude internal pages
    alternates: {
        languages: ['en', 'am'],
    },
    // Optional: transform function if needed for complex localized paths
}
