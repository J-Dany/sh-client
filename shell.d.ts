declare namespace Shell {
  export namespace Menu {
    export interface Item {
      label: string;
      path: string;
      icon?: string;
      subItems?: Item[];
    }
  }
}
