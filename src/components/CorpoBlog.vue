<script setup>
import img1 from '../assets/post1.webp'
</script>

<template>
    <div id="etec-blog"> 
        <section class="posts">
            <div class="container">
                <div class="row post-item">
                    <div class="col-11">
                        <img src="../assets/post1.webp" alt="Post 1">
                        <h2>MySQL no Google Cloud SQL</h2>
                        <p>
                            Este post é um é um guia passo a passo para você aprender a hospedar o seu banco de dados MySQL no Google Cloud SQL.
                            Obviamente você precisa de uma conta no Google e um cartão de crédito para ativar o faturamento. Se for a primeira 
                            vez o Google irá te dar $300 para experimentar qualquer serviço, assim você pode aprender, conhecer e até avaliar os preços cobrados.
                            Todos os serviços que você configura no GCloud ficam agrupados por projetos, então a primeira coisa a se fazer é criar ou selecionar um projeto.
                        </p>
                    </div>
                </div>
                <div class="row post-item">
                    <div class="col-11">
                        <img src="../assets/post2.webp" alt="Post 2">
                        <h2>Programação Funcional - Tudo o Que Você Precisa Saber! Artigo 1 de 10</h2>
                        <p>
                            Olá Pessoal nesta série vamos falar sobre um importante Paradigma de Programação, A Programação Funcional e como ela é 
                            aplicada no JavaScript. Preparamos uma Série de 10 artigos para abordar com exemplos o que é a Programação Funcional, Esse 
                            é o primeiro artigo. Quais são os conceitos que fazem parte desse Paradigma e como Programar em JavaScript utilizando a Programação 
                            Funcional? Veja a resposta nesta série completa.
                            Obs. ao Leitor: Por vezes caro leitor, você verá em nossos posts a sigla TL;DR quando ela estiver presente prepare-se, vêm texto longo por aí, 
                            assim o resumo do post será colocado no Parágrafo TL;DR algo como Too Long Didn't Read ou Texto Longo, Não Li.
                        </p>
                    </div>
                </div>
                <div class="row post-item">
                    <div class="col-11">
                        <img src="../assets/post3.webp" alt="Post 3">
                        <h2>Instalando e Configurando o PHP 7 e o Apache no Windows com Xampp</h2>
                        <p>
                            PHP 7 é a linguagem por trás dos maiores sites do mundo, entre eles, Facebook, Google, Wikipedia e muitos outros *. Preparamos um vídeo que faz 
                            parte do Curso Completo de PHP 7 da ETEC na Udemy para ensinar como instalar e configurar o PHP 7 e o Apache utilizando um facilitador para isso o XAMPP.
                            Existe uma diferença entre Linguagem de Programação e Servidor Web, neste vídeo abordamos a diferença entre essas tecnologias e o que é um instalador como o XAMPP.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <p class="text-center">Visite: <a href="https://youtube.com/etecleme">ETEC Leme</a></p>
        </footer>
    </div>
</template>

<style scoped>
.etec-blog{
    margin: auto;
}
a, a:hover {
    text-decoration: none;
    color: #000;
}

.navbar {
    display: flex;
    justify-content: center;
}

.navbar .logo {
    font-family: 'Open Sans Condensed';
    font-size: 25px;
}

.navbar img {
    display: block;
    width: 150px;
}

.navbar .login {
    position: absolute;
    right: 10px;
    padding: 5px;
    text-align: center;
}

.navbar .logout {
    padding: 5px;
}

.posts {
    margin-top: 50px;
}

.posts img {
    width: 100%;
}

.posts .post-item {
    border-bottom: 1px solid #F37520;
    padding: 20px 0;
}

.posts .post-item h2 {
    color: #F37520;
    cursor: pointer;
}

footer {
    margin-top: 30px;
}
</style>