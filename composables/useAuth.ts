interface AuthUser {
  id: string;
  role: "USER" | "ADMIN" | "SUPER_ADMIN";
  email?: string;
  isUser: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
}

interface AuthResponse {
  success: boolean;
  user: AuthUser;
}

export const useAuth = () => {
  const user = ref<AuthUser | null>(null);
  const isAuthenticated = ref(false);

  const checkAuth = async (): Promise<AuthUser | null> => {
    try {
      const response = await $fetch<AuthResponse>("/api/auth/role");
      user.value = response.user;
      isAuthenticated.value = true;
      return response.user;
    } catch (error) {
      user.value = null;
      isAuthenticated.value = false;
      return null;
    }
  };

  // Add userId getter
  const userId = computed(() => user.value?.id || null);

  const isUser = computed(() => user.value?.role === "USER");
  const isAdmin = computed(() => user.value?.role === "ADMIN");
  const isSuperAdmin = computed(() => user.value?.role === "SUPER_ADMIN");

  const isAtLeastAdmin = computed(
    () => user.value?.role === "ADMIN" || user.value?.role === "SUPER_ADMIN"
  );

  const hasRole = (role: "USER" | "ADMIN" | "SUPER_ADMIN") =>
    user.value?.role === role;

  return {
    user: readonly(user),
    userId,
    isAuthenticated: readonly(isAuthenticated),
    isUser,
    isAdmin,
    isSuperAdmin,
    isAtLeastAdmin,
    hasRole,
    checkAuth,
  };
};
