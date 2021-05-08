const routes = [
  {
    path: '/',
    exact: true,
    Component: () => <></>
  },
  {
    key: 'About',
    path: '/about',
    exact: true,
    Component: '/about'
  },
  {
    key: 'Portfolio',
    path: '/portfolio',
    exact: true,
    Component: '/portfolio'
  },
  {
    key: 'Commission',
    path: '/commission',
    exact: true,
    Component: '/commission'
  },
  {
    key: '',
    path: '/artwork',
    exact: true,
    Component: '/artwork'
  },
  {
    key: '',
    path: '/donate',
    exact: true,
    Component: '/donate'
  }
];

export default routes;
