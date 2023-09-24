import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query','@umijs/plugins/dist/antd'],
  reactQuery: {},
  antd:{},
  routes: [
    { path: "/", component: "index" },
    { path: "/lottery", component: "Lottery" },
    { path: "/products", component: "products" },

  ],
  npmClient: 'pnpm',
});
