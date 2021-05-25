<template>
  <v-row class="pa-4" justify="space-between">
    <v-col cols="5">
      <v-treeview
        v-model="tree"
        :active.sync="active"
        :open="initiallyOpen"
        :items="items"
        activatable
        item-key="name"
        open-on-click
      >
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col class="d-flex text-center">
      <div
        v-if="!active"
        class="title grey--text text--lighten-1 font-weight-light"
        style="align-self: center"
      >
        Select a User
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    initiallyOpen: ['public'],
    active: [],
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-code-json',
      md: 'mdi-language-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel',
    },
    tree: [],
    items: [
      {
        name: '.git',
      },
      {
        name: 'node_modules',
      },
      {
        name: 'public',
        children: [
          {
            name: 'static',
            children: [
              {
                name: 'logo.png',
                file: 'png',
              },
            ],
          },
          {
            name: 'favicon.ico',
            file: 'png',
          },
          {
            name: 'index.html',
            file: 'html',
          },
        ],
      },
      {
        name: '.gitignore',
        file: 'txt',
      },
      {
        name: 'babel.config.js',
        file: 'js',
      },
      {
        name: 'package.json',
        file: 'json',
      },
      {
        name: 'README.md',
        file: 'md',
      },
      {
        name: 'vue.config.js',
        file: 'js',
      },
      {
        name: 'yarn.lock',
        file: 'txt',
      },
    ],
  }),
}
</script>
