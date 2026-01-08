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

interface ProjectCheckResponse {
  hasProject: boolean;
  projectId: string | null;
}

export const useAuth = () => {
  const user = ref<AuthUser | null>(null);
  const isAuthenticated = ref(false);
  const hasProject = ref(false);
  const projectId = ref<string | null>(null);

  const checkAuth = async (): Promise<AuthUser | null> => {
    try {
      const response = await $fetch<AuthResponse>("/api/auth/role");
      user.value = response.user;
      isAuthenticated.value = true;

      // console.log("user", user.value);
      // console.log("isAuthenticated", isAuthenticated.value);
      
      const projectCheck = await $fetch<ProjectCheckResponse>(
        "/api/auth/check-project"
      );
      hasProject.value = projectCheck.hasProject;
      projectId.value = projectCheck.projectId;

      // console.log("hasProject", hasProject.value);
      // console.log("projectId", projectId.value);

      return response.user;
    } catch (error) {
      user.value = null;
      isAuthenticated.value = false;
      hasProject.value = false;
      projectId.value = null;
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
    hasProject: readonly(hasProject),
    projectId: readonly(projectId),

    hasRole,
    checkAuth,
  };
};
