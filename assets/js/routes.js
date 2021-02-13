var routes = [
  // Index page
  {
    path: '/',
    url: 'index.html',
    name: 'home'
  },
  {
    path: '/beranda/',
    url: 'pages/beranda.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
