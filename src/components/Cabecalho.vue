<script setup>
import { useRouter } from 'vue-router';

defineProps({
  titulo: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
});

const router = useRouter();

const logout = () => {
  
  localStorage.removeItem('user-token');
  
  
  router.push('/login');
};
</script>

<template>
    <nav>
        <div id="cab">
            <div id="div_logo">
                <span>
                    <img :src="logo">
                </span>
            </div>
            <div id="div_titulo">
                <span>{{ titulo }}</span>
            </div>
            <button @click="logout">Logout</button>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        background-color: white;
        color: black; 
        width: 80%;
        
        position: absolute;
        top: 0px;
    }
    #cab {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #div_logo {
        display: flex;
        align-items: center;
        margin-left: 150px;
    }
    button {
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
        background-color: #f0f0f0;
        border-radius: 4px;
    }
</style>
