<script setup>
import { defineProps } from 'vue';

defineProps({
  titulo: {
    type: String,
    required: true
  },
  txt: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  }
});
</script>

<template>
    <div class = "corpo">
        <div id="cab">
            
            <div class="div_logo">
                <img :src="post" alt="Logo" style="max-width: 100%;">
            </div>
            
            <div class="content_block" style="width: 100%;">
                <div id="div_titulo">
                    <span>{{ titulo }}</span>
                </div>
                <div id="div_txt">
                    <span>{{ txt.length > 200 ? txt.substring(0, 200) + '...' : txt }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#cab {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: white;
    width: 100%;
    border-radius: 5px;
}

.div_logo {
    width: 100%; 
    display: flex;
    justify-content: center;
     
}

.content_block {
    width: 100%; 
    text-align: center;
    
}

#div_titulo, #div_txt {
    width: 100%; 
}

#div_titulo {
    color: red;
    font-size: larger;
    margin-bottom: 10px; 
}

#div_txt {
    text-align: justify; 
}


</style>
