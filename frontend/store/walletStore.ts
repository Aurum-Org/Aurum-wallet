import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Define the Transaction interface
export interface Transaction {
  id: string
  amount: number
  type: "deposit" | "withdrawal" | "transfer"
  recipient?: string
  sender?: string
  timestamp: number
  status: "pending" | "completed" | "failed"
  description?: string
}

// Define the WalletStore state interface
interface WalletState {
  balance: number
  transactions: Transaction[]
  isLoading: boolean
  error: string | null

  // Actions
  addTransaction: (transaction: Omit<Transaction, "id" | "timestamp">) => void
  updateBalance: (amount: number) => void
  fetchTransactions: () => Promise<void>
  clearError: () => void
}

// Create the wallet store with persistence
export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      balance: 0,
      transactions: [],
      isLoading: false,
      error: null,

      addTransaction: (transactionData) => {
        const newTransaction: Transaction = {
          id: Date.now().toString(),
          timestamp: Date.now(),
          ...transactionData,
        }

        set((state) => {
          // Update balance based on transaction type
          let newBalance = state.balance
          if (transactionData.type === "deposit") {
            newBalance += transactionData.amount
          } else if (transactionData.type === "withdrawal" || transactionData.type === "transfer") {
            newBalance -= transactionData.amount
            if(newBalance < 0) {
              newBalance += transactionData.amount
              return {
                transactions: [newTransaction, ...state.transactions],
                balance: newBalance,
                error: "Insufficient funds",
              }
            }
          }

          return {
            transactions: [newTransaction, ...state.transactions],
            balance: newBalance,
          }
        })
      },

      updateBalance: (amount) => {
        set((state) => ({
          balance: state.balance + amount,
        }))
      },

      fetchTransactions: async () => {
        set({ isLoading: true, error: null })
        try {
          // This is just a mock implementation
          await new Promise((resolve) => setTimeout(resolve, 1000))

          // Mock transaction data
          const mockTransactions: Transaction[] = [
            {
              id: "1",
              amount: 500,
              type: "deposit",
              timestamp: Date.now() - 86400000, // 1 day ago
              status: "completed",
              description: "Salary deposit",
            },
            {
              id: "2",
              amount: 50,
              type: "withdrawal",
              timestamp: Date.now() - 43200000, // 12 hours ago
              status: "completed",
              description: "ATM withdrawal",
            },
          ]

          set({
            transactions: mockTransactions,
            balance: 450, // Mock balance
            isLoading: false,
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Failed to fetch transactions",
            isLoading: false,
          })
        }
      },

      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: "aurum-wallet-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

