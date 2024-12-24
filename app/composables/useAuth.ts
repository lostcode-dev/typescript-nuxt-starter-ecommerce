type UseAuthReturnType = {
  name: Ref<string>;
  email: Ref<string>;
  password: Ref<string>;
  isAuthenticated: ReturnType<typeof computed>;
  user: ReturnType<typeof computed>;
  signUp: () => Promise<any>;
  signInWithPassword: () => Promise<any>;
  signOut: () => Promise<void>;
  updateUser: (new_password: string) => Promise<any>;
  updateEmail: (email: string) => Promise<any>;
  resetPasswordForEmail: (email: string) => Promise<any>;
  getSession: () => Promise<any>;
  getUser: () => Promise<any>;
  refreshSession: () => Promise<any>;
  deleteUser: (id: string) => Promise<any>;
  inviteUserByEmail: (email: string, options?: object) => Promise<any>;
  redirectIfAuthenticated: () => void;
};

export default function useAuth(): UseAuthReturnType {
  const client = useSupabaseClient();

  const name = ref<string>("");
  const email = ref<string>("");
  const password = ref<string>("");

  const successMessage = ref<string>("");
  const errorMessage = ref<string>("");

  async function signUp() {
    try {
      const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
        options: { data: { name: name.value } },
      });
      if (error) throw error;

      successMessage.value = "Verifique seu e-mail para confirmação";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao registrar: ${error.message}`;
      return {};
    }
  }

  async function signInWithPassword() {
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;

      successMessage.value = "Login realizado com sucesso";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao fazer login: ${error.message}`;
      return {};
    }
  }

  async function signOut() {
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;

      successMessage.value = "Logout realizado com sucesso";
    } catch (error: any) {
      errorMessage.value = `Erro ao fazer logout: ${error.message}`;
    }
  }

  async function updateUser(new_password: string) {
    try {
      const { data, error } = await client.auth.updateUser({
        password: new_password,
      });
      if (error) throw error;

      successMessage.value = "Senha atualizada com sucesso";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao atualizar a senha: ${error.message}`;
      return {};
    }
  }

  async function updateEmail(email: string) {
    try {
      const { data, error } = await client.auth.updateUser({
        email: email,
      });
      if (error) throw error;

      successMessage.value = "Email atualizado com sucesso";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao atualizar o email: ${error.message}`;
      return {};
    }
  }

  async function resetPasswordForEmail(email: string) {
    try {
      const { data, error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: "https://example.com/update-password",
      });
      if (error) throw error;

      successMessage.value = "E-mail de redefinição de senha enviado";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao redefinir a senha: ${error.message}`;
      return {};
    }
  }

  async function getSession() {
    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      successMessage.value = "Sessão recuperada com sucesso";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao obter a sessão: ${error.message}`;
      return {};
    }
  }

  async function refreshSession() {
    try {
      const { data, error } = await client.auth.refreshSession();
      if (error) throw error;
      successMessage.value = "Sessão atualizada com sucesso";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao atualizar a sessão: ${error.message}`;
      return {};
    }
  }

  async function deleteUser(id: string) {
    try {
      const { data, error } = await client.auth.admin.deleteUser(id);
      if (error) throw error;
      successMessage.value = "Usuário deletado com sucesso";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao deletar usuário: ${error.message}`;
      return {};
    }
  }

  async function getUser() {
    try {
      const {
        data: { user },
        error,
      } = await client.auth.getUser();
      if (error) throw error;

      successMessage.value = "Usuário recuperado com sucesso";
      return user;
    } catch (error: any) {
      errorMessage.value = `Erro ao obter usuário: ${error.message}`;
      return {};
    }
  }

  async function inviteUserByEmail(email: string, options = {}) {
    try {
      const { data, error } = await client.auth.admin.inviteUserByEmail(
        email,
        options
      );
      if (error) throw error;
      successMessage.value = "Usuário convidado com sucesso";
      return data;
    } catch (error: any) {
      errorMessage.value = `Erro ao convidar usuário: ${error.message}`;
      return {};
    }
  }

  const user = computed(() => {
    let supabaseUser = useSupabaseUser()
    return supabaseUser.value;
  });

  const isAuthenticated = computed(() => {
    return !!user.value;
  });

  function redirectIfAuthenticated() {
    if (isAuthenticated.value) navigateTo("/app");
  }

  return {
    name,
    email,
    password,
    user,
    isAuthenticated,
    signUp,
    signInWithPassword,
    signOut,
    updateUser,
    resetPasswordForEmail,
    getSession,
    getUser,
    refreshSession,
    deleteUser,
    inviteUserByEmail,
    redirectIfAuthenticated,
    updateEmail
  };
}
