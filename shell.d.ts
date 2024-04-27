declare namespace Shell {
  export namespace Session {
    export interface Data {
      accessToken: string;
      refreshToken: string;
      expiresAt: number;
      refreshExpiresAt: number;
    }
  }

  export namespace Menu {
    export interface Item {
      label: string;
      path: string;
      icon?: string;
      subItems?: Item[];
    }
  }
}
