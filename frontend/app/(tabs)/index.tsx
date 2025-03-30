'use client';

import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useUserStore, useWalletStore } from '@/store';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen() {
  const { user, isAuthenticated, login, logout } = useUserStore();
  const { balance } = useWalletStore();

  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login({ email: 'demo@aurumwallet.com', password: 'password123' });
    }
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileCard}>
            <View style={styles.profileHeader}>
              <View style={styles.avatarPlaceholder}>
                <FontAwesome name="user" size={40} color="#FFD700" />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.username}>{user?.username}</Text>
                <Text style={styles.email}>{user?.email}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.title}>Dashboard</Text>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.notLoggedIn}>
          <FontAwesome name="user-circle" size={60} color="#ccc" />
          <Text style={styles.loginPrompt}>Please log in to view your profile</Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.authButton, isAuthenticated ? styles.logoutButton : styles.loginButton]}
        onPress={handleAuth}
      >
        <Text style={styles.authButtonText}>{isAuthenticated ? 'Logout' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
  },
  balanceContainer: {
    marginVertical: 20,
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
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
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
  authButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#FFD700',
  },
  logoutButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
  },
});
