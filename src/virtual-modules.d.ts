interface GlobalState {
  index: number;
}

declare module "virtual:global-state" {
  export const globalState: GlobalState;
}
