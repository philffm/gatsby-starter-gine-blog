module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/a7a92b74111d4228be142306a1501567?v=9766d0ef8bcf474c8103ec0e0106328e"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/492d864900cb4e13b9cdd607917296bf?v=a3c01c920f574afeab9e7ae58c5d8223"
            }
        }
    ],
}
