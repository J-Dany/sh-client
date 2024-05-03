const menu: Shell.Menu.Group[] = [
  {
    label: 'Servizi',
    items: [
      {
        label: 'Dashboard',
        path: '/',
        icon: 'dashboard',
      },
      {
        label: 'QR Code',
        path: '/qrcode',
        icon: 'qr_code',
      },
      {
        label: 'URL Shortener',
        path: '/url-shortener',
        icon: 'link',
        subItems: [
          {
            label: 'Short',
            path: '/url-shortener/short',
            icon: 'edit',
          },
        ],
      },
    ],
  },
  {
    label: 'Sistema',
    items: [
      {
        label: 'Impostazioni',
        path: '/settings',
        icon: 'settings',
      },
      {
        label: 'Informazioni',
        path: '/info',
        icon: 'info',
      },
    ],
  },
];

export default menu;
