// 主题程序的Store

import type { TokenRequest } from "@/api/types";
import { defineStore, type StoreDefinition } from "pinia";
import tokenAPI from "@/api/token";
import { useUserStore } from './user';
type AppState = {
  token: string;
};

export const useAppStore: StoreDefinition<string, AppState> = defineStore(
  "app",
  {
    state: () => {
      return {
        token: "",
      };
    },
    actions: {
      async login(loginForm: TokenRequest): Promise<void> {
        this.token = await tokenAPI.createToken(loginForm);
      },
      async logout(): Promise<void> {
        const userStore = useUserStore()
        this.token = "";
        userStore.$reset();
      }
    },
  }
);
