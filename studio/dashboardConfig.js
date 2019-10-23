export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db08f0287b0f4017e093b7e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sfmg8o48',
                  apiId: 'a826b5ab-d4f1-40fc-a56a-3c7633bf8740'
                },
                {
                  buildHookId: '5db08f02b3ef620187f5c84d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5hrdogcf',
                  apiId: 'f05b02e1-4a81-4ad4-854d-2555fe854ae2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinmaclachlan/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5hrdogcf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
