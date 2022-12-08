console.log(1)

// Context for Vite
const context = import.meta.globEager(`./components/**/*.vue`);

// Export for Usage
export default {
  // For Usage
  install(Vue) {
    console.log(500);
    // Set Components
    const components = {};

    // Foreach Context
    for (const key in context) {
      if (!Object.prototype.hasOwnProperty.call(context, key)) {
        continue;
      }

      // Get Component
      const component = context[key].default;

      // Get Name
      const name = component.name || key.replace(/\S+?\/|\.vue$/g, '');

      console.log(name, component);

      // Set Components
      components[name] = component;

      // Install in Component
      Vue.component(name, component);
    }
  },
};
