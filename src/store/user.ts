
import type { UserType } from '@/api/types';
import { defineStore } from 'pinia';
import userAPI from "@/api/user"
type UserState = {
    currentUser: UserType | null;
}
export const useUserStore = defineStore("user",
    {
        state: (): UserState => {
            return {
                currentUser: null,
            }
        },
        persist: true,
        actions: {
            async fetchCurrentUser() {
                this.currentUser = await userAPI.me()
            }
            
        }
    })

