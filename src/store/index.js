import VuexPersistence from 'vuex-persist'
import { createStore, createLogger } from "vuex";
import { todos } from "./modules/todo.state";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const debug = process.env.NODE_ENV !== "production";

const plugins = [
  vuexLocal.plugin
]

export default createStore({
  modules: {
    todos,
  },
  plugins: debug !== "production"
    ? [...plugins, createLogger()]
    : plugins
});
