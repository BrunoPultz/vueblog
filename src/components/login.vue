<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Login</h2> 
      <form @submit.prevent="goToPosts">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="email" class="input-field">
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" class="input-field">
        </div>
        <button type="submit" class="login-button">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const goToPosts = () => {
      router.push('/posts'); 
    };

    return { email, password, goToPosts };
  }
};
</script>

<style scoped>
.login-container {
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4; /* Cor de fundo mais suave */
  
}

.login-card {
  background-color: #fff;
  padding: 40px; /* Mais espaçamento interno */
  border-radius: 10px; /* Bordas mais arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra mais sutil */
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333; /* Cor de texto mais escura */
}

.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.login-button {
  background-color: #007bff; /* Cor de fundo azul */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Tamanho de fonte maior */
  transition: background-color 0.3s ease; /* Efeito de transição suave */
}

.login-button:hover {
  background-color: #0056b3; /* Cor mais escura ao passar o mouse */
}
</style>
