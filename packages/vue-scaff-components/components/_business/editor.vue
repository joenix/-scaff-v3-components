<template>
  <editor :init="option" />
</template>

<script>
export default {
  name: 'bs-editor',

  data() {
    const { info } = this.$message;

    const time = new Date().toDateString();

    return {
      option: {
        menubar: false,
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | time',

        setup(editor) {
          editor.ui.registry.addButton('time', {
            icon: 'insert-time',
            text: 'TIME',
            onSetup(api) {
              console.log(time);
            },
            onAction(api) {
              info(time);
            },
          });
        },

        skin: 'oxide-dark',
        content_css: 'dark',
      },
    };
  },
};
</script>
