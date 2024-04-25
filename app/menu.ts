const menu: Shell.Menu.Item[] = [
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
];

export default menu;
