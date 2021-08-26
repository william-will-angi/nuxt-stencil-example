import Vue from 'vue'

Vue.config.ignoredElements = /my-component/

export default () => {
    if (process.client) {
      const { defineCustomElements, applyPolyfills } = require('component-library/loader');
  
      // Bind the custom elements to the window object
      applyPolyfills().then(() => {
        defineCustomElements(window);
      });
    }
  };