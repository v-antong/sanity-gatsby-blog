export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607eec35812e8f706ea6c287",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6dhzmxt9",
                  apiId: "2e39027c-c315-4687-aaaf-0380d71ffa3e",
                },
                {
                  buildHookId: "607eec356bc55150517cacd4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-o7gs6wnm",
                  apiId: "3e828859-9dab-4642-89e4-afa30a3b55d6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/v-antong/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-o7gs6wnm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
