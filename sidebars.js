/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  english: [
    'en/intro',
     {
       type: 'category',
       label: 'Get Started',
       link: {
         type: 'generated-index',
         slug: '/en/get-started'
       },
       collapsed: true,
       items: [
	   {
             type: 'doc',
             id: 'en/quick-start',
           },
	   {
             type: 'doc',
             id: 'en/tutorial',
           },
           {
             type: 'category',
             label: 'Example Datasets',
             link: {
               type: 'generated-index',
               slug: '/en/getting-started/example-datasets'
             },
             collapsed: true,
             items: [
               {
                 type: 'autogenerated',
                 dirName: 'en/getting-started/example-datasets',
               },
             ]
           },
           {
             type: 'doc',
             id: 'en/install',
           },
       ]
      },
     {
       type: 'category',
       label: 'Connect a Client',
          link: {
            type: 'generated-index',
            slug: '/en/connect-a-client',
          },
       collapsed: true,
       items: [
           {
             type: 'doc',
             id: 'en/getting-started/playground',
           },
        {
          type: 'category',
          label: 'SQL Clients',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/sql-clients',
          },
          items: [
            {
             type: 'link',
             label: "DataGrip",
             href: 'https://www.jetbrains.com/help/datagrip/clickhouse.html',
            },
            {
             type: 'autogenerated',
             dirName: 'en/integrations/sql-clients',
            },
	  ],
	},
        {
          type: 'category',
          label: 'Language Clients',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/language-clients',
          },
          items: [
            {
             type: 'link',
             label: "GO",
             href: 'https://github.com/clickhouse/clickHouse-go#readme',
            },
            {
             type: 'link',
             label: "Python",
             href: 'https://github.com/clickhouse/clickhouse-connect#readme',
            },
            {
             type: 'autogenerated',
             dirName: 'en/integrations/language-clients',
            },
	  ],
	},
       ]
     },
        {
          type: 'category',
          label: 'Ingest',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/data-ingestion',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/data-ingestion',
            },
	  ],
	},
        {
          type: 'category',
          label: 'Visualize',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/data-visualization',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/data-visualization',
            },
	  ],
	},
         {
          type: 'category',
          label: 'Analyze',
          link: {
            type: 'generated-index',
            slug: '/en/analyze'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
             type: 'doc',
             id: 'en/interfaces/formats',
           },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index',
          },
          items: [
            {
             type: 'autogenerated',
            dirName: 'en/guides/developer',
            },
	  ],
	},
        {
          type: 'category',
          label: 'SQL Reference',
          link: {
            type: 'generated-index',
            slug: '/en/sql-reference',
          },
          items: [
            {
             type: 'autogenerated',
            dirName: 'en/sql-reference',
            },
	  ],
	},
         {
          type: 'category',
          label: 'Engines',
          link: {
            type: 'generated-index',
            slug: 'en/engines'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/engines',
           }
          ]  
         },
          ]  
         },
        {
          type: 'category',
          label: 'Migrate',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/migration',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/migration',
            },
          ]
        },
    {
      type: 'category',
      label: 'Manage',
          link: {
            type: 'generated-index',
            slug: '/en/manage',
          },
      collapsed: true,
      items: [
           {
             type: 'doc',
             id: 'en/manage/update',
           },
           {
             type: 'doc',
             id: 'en/manage/backups',
           },
         {
          type: 'category',
          label: 'Replication',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
             type: 'doc',
             id: 'en/operations/clickhouse-keeper',
           },
           {
            type: 'autogenerated',
            dirName: 'en/guides/sre/keeper',
           },
           {
             type: 'doc',
             id: 'en/operations/ssl-zookeeper',
           },
          ]  
         },
         {
          type: 'category',
          label: 'Users',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/guides/sre/user-management',
           },
           {
             type: 'doc',
             id: 'en/operations/quotas',
           },
          ]  
         },
         {
          type: 'category',
          label: 'Security',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
             type: 'doc',
             id: 'en/manage/security/ip-access-list',
           },
           {
             type: 'doc',
             id: 'en/operations/named-collections',
           },
	  ]
	 },
         {
          type: 'category',
          label: 'Performance',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
             type: 'doc',
             id: 'en/operations/optimizing-performance/sampling-query-profiler',
           },
           {
             type: 'doc',
             id: 'en/operations/opentelemetry',
           },
           {
             type: 'doc',
             id: 'en/operations/monitoring',
           },
           {
             type: 'doc',
             id: 'en/operations/performance-test',
           },
           {
             type: 'doc',
             id: 'en/operations/caches',
           },
           {
            type: 'autogenerated',
            dirName: 'en/guides/improving-query-performance',
           },
           {
             type: 'doc',
             id: 'en/operations/tips',
           },
          ]  
         },
           {
             type: 'doc',
             id: 'en/operations/storing-data',
           },
           {
             type: 'doc',
             id: 'en/operations/configuration-files',
           },
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Interfaces',
          link: {
            type: 'generated-index',
            slug: 'en/interfaces'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/interfaces',
           }
          ]  
         },
         {
          type: 'category',
          label: 'Development',
          link: {
            type: 'generated-index',
            slug: 'en/development'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/development',
           },
           {
             type: 'category',
             label: 'Native Protocol',
             link: {
               type: 'generated-index',
               slug: 'en/native-protocol'
             },
             collapsed: true,
             collapsible: true,
             items: [
               {
                 type: 'autogenerated',
                 dirName: 'en/native-protocol',
               }
             ]
           },
          ]  
         },

         
       ]
     },
     {
       type: 'category',
       label: 'FAQ',
       link: {
         type: 'generated-index',
         slug: '/en/faq',
       },
       collapsed: true,
       items: [
           {
             type: 'doc',
             id: 'en/operations/troubleshooting',
           },
         {
          type: 'autogenerated',
          dirName: 'en/faq',
         }
       ]
      },
      {
        type: 'category',
        label: "What's New",
        link: {
          type: 'generated-index',
          slug: '/en/whats-new',
        },
        collapsed: true,
        items: [
          {
           type: 'autogenerated',
           dirName: 'en/whats-new',
          }
        ]
       },
       {
        type: 'category',
        label: 'About Us',
        link: {
          type: 'generated-index',
          slug: '/en/about-us',
        },
        collapsed: true,
        items: [
          {
           type: 'autogenerated',
           dirName: 'en/about-us',
          }
        ]
       },
      ], 
   russia: [
     {
       type: 'autogenerated',
       dirName: 'ru',
      },
    ],
    chinese: [
      {
        type: 'autogenerated',
        dirName: 'zh',
       },
     ],
 };

module.exports = sidebars;
