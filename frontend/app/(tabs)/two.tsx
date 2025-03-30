import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useUserStore, useWalletStore } from '@/store';
import { FontAwesome } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const { isAuthenticated } = useUserStore();
  const { balance } = useWalletStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {isAuthenticated ? (
        <>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
          </View>

          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={[styles.actionButton, styles.depositButton]}
              onPress={() =>
                useWalletStore.getState().addTransaction({
                  amount: 100,
                  type: 'deposit',
                  status: 'completed',
                  description: 'Quick deposit',
                })
              }
            >
              <FontAwesome name="plus" size={16} color="#fff" />
              <Text style={styles.actionButtonText}>Deposit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.withdrawButton]}
              disabled={balance === 0}
              onPress={() =>
                useWalletStore.getState().addTransaction({
                  amount: 50,
                  type: 'withdrawal',
                  status: 'completed',
                  description: 'Quick withdrawal',
                })
              }
            >
              <FontAwesome name="minus" size={16} color="#fff" />
              <Text style={styles.actionButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.notLoggedIn}>
          <FontAwesome name="user-circle" size={60} color="#ccc" />
          <Text style={styles.loginPrompt}>Please log in to view your balance</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  balanceContainer: {
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
  },
  depositButton: {
    backgroundColor: '#4CD964',
  },
  withdrawButton: {
    backgroundColor: '#FF3B30',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6,
  },
  notLoggedIn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  loginPrompt: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
});
