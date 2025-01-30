export const orgMenuList = [
  {
    path: '/',
    name: 'Home',
    fileName: 'HomeView',
  },
  {
    path: '/menu1',
    name: 'Menu 1',
    fileName: 'redirect',
    children: [
      {
        path: '/menu1/messages',
        name: 'messages',
        fileName: '/menu1/MessageSample',
      },
      {
        path: '/menu1/messages2',
        name: 'messages2',
        fileName: '/menu1/MessageSample2',
      },
    ],
  },
  {
    path: '/menu2',
    name: 'Menu 2',
    fileName: 'redirect',
    children: [
      {
        path: '/menu1/components',
        name: 'components',
        fileName: '/menu2/ComponentSample',
      },
    ],
  },
]
