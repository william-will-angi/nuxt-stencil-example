import path from 'path';
import { renderToString } from 'component-library/hydrate'

function stencilModule() {
  this.addPlugin({
    src: path.resolve(__dirname, '../plugins/stencil-plugin.js'),
    fileName: 'stencil.js',
  });

  // @Hook: render:route
  this.nuxt.hook('render:route', async (url, page) => {
    const render = await renderToString(page.html, {
      url,
    });

    page.html = render.html;
  });
}

module.exports = stencilModule;