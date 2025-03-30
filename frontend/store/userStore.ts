import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"


export interface User {
  id: string
  username: string
  email: string
  profilePicture?: string
}


interface UserState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null

  // Actions
  login: (credentials: { email: string; password: string }) => Promise<void>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
  clearError: () => void
}

// Create the user store with persistence
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null })
        try {
          // This is just a mock implementation
          await new Promise((resolve) => setTimeout(resolve, 1000))

          // Mock successful login
          const mockUser: User = {
            id: "1",
            username: "johndoe",
            email: credentials.email,
            profilePicture: "https://via.placeholder.com/150",
          }

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Login failed",
            isLoading: false,
          })
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false, error: null })
      },

      updateProfile: (userData) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }))
      },

      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: "aurum-user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

