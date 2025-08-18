import type { Plugin } from "vite";

const globalStatePlugin = (): Plugin => ({
  name: NAME,
  resolveId(id) {
    if (id === VIRTUAL_MODULE_ID) return RESOLVED_VIRTUAL_MODULE_ID;
  },
  configureServer(server) {
    server.middlewares.use((_req, _res, next) => {
      // TODO: Unoptimized
      const module = server.moduleGraph.getModuleById(
        RESOLVED_VIRTUAL_MODULE_ID,
      );
      if (module) server.moduleGraph.invalidateModule(module);
      next();
    });
  },
  load(id) {
    if (id !== RESOLVED_VIRTUAL_MODULE_ID) return;

    return /* js */ `
        export const ${VARIABLE_NAME} = (${init.toString()})();
      `;
  },
});

const init = () => {
  const defaultState: GlobalState = {
    index: -1,
  };

  const proxyHandler: ProxyHandler<GlobalState> = {
    get(target, prop, receiver) {
      if (prop === ("index" satisfies GlobalStateKeys)) {
        target.index += 1;
      }

      return Reflect.get(target, prop, receiver);
    },
  };

  return new Proxy(defaultState, proxyHandler);
};

// * Constants

const NAME = "global-state-plugin";
const VIRTUAL_MODULE_ID = "virtual:global-state";
const RESOLVED_VIRTUAL_MODULE_ID = "\0" + VIRTUAL_MODULE_ID;
const VARIABLE_NAME = "globalState";

// * Types

type GlobalStateKeys = keyof GlobalState;

// * Exports

export default globalStatePlugin;
