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
          {
            label: 'Dominio custom',
            path: '/url-shortener/custom-domain',
            icon: 'domain',
            isPremium: true,
          },
        ],
      },
    ],
  },
  {
    label: 'Sistema',
    items: [
      {
        label: 'Diventa premium',
        path: '/premium',
        icon: 'star',
      },
      {
        label: 'Impostazioni',
        path: '/settings',
        icon: 'settings',
      },
    ],
  },
];

export default menu;
