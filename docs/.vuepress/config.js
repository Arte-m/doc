module.exports = {
    title: 'Мои заметки',
    description: 'Мои заметки',

    themeConfig: {
        sidebar: [
            {
              title: 'Главная',   
              path: '/',      
              collapsable: false, 
              sidebarDepth: 2,    
              children: [
                'doc1',
                'doc2'
              ]
            }],
          nav: [
            { text: 'My GitHub', link: 'https://github.com/Arte-m' }
          ]
      }

    
  }