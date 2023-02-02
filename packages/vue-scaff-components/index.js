// Context for Vite
const context = import.meta.globEager(`./components/**/*.vue`);

console.log('?????', context);

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

    console.log('module:', module);

    // Get Name
    const name = (module.name || key).replace(exp, '');

    console.log('name:', name);

    // Set into Callback
    callback(module, name.replace(/\-([a-zA-Z])/g, ($0, $1) => $1.toUpperCase()).replace(/\d+$/, ''));
  }
}

// Export for Usage
export default {
  // For Usage
  install(app) {
    // Registy Components
    catcher(context, /\S+?\/|\.vue$/g, (component, name) => app.component(name, component));
  },
};
