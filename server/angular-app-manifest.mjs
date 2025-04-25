
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/woof-adopt/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 727, hash: '4a846462023a1f5c305be097695abd2fe21e3378f6abd6832b32741e04cc7637', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'dfaac9fc64ecf81fd86400ba650f0bd2e0967206d87b6a2132713de1ab71a331', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PP4BLNOV.css': {size: 598, hash: '5ib/GM1duNQ', text: () => import('./assets-chunks/styles-PP4BLNOV_css.mjs').then(m => m.default)}
  },
};
