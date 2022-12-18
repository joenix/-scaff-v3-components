// Context for Vite
const context = import.meta.globEager(`./components/**/*.vue`);

// Catcher
function catcher(context, exp, callback) {
  // Foreach
  for (const key in context) {
    // Has Property
    if (!Object.prototype.hasOwnProperty.call(context, key)) {
      continue;
    }

    // Get Module
    const module = context[key].default;

    // Get Name
    const name = (module.name || key).replace(exp, '');

    // Set into Callback
    callback(module, name.replace(/\-([a-zA-Z])/g, ($0, $1) => $1.toUpperCase()).replace(/\d+$/, ''));
  }
}

// Export for Usage
export default {
  // For Usage
  install(Vue) {
    // Registy Components
    catcher(context, /\S+?\/|\.vue$/g, (component, name) => Vue.component(name, component));
  },
};
