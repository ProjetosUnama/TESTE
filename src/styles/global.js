import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --cor-de-fundo: #ffffff;
    --cor-pimaria: #000000;
    --cor-secundaria: #34c771;
    --cor-hover: #4c3761;
    --cor--terciaria: #50c439;
    --cor-quartenaria: #58db9e;
}

body {
    background-color: var(--cor-de-fundo);
}

.menu ul {
    list-style-type: none;
    padding: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-image: url(../images/Brasão\ da\ Unama.png);
    background-repeat: no-repeat;
    background-position: 197px -30px;
    background-size: 120px;
}

ul {
    background-color: var(--cor-de-fundo);
}

.menu ul li {
    display: inline;
    position: relative;
}

.menu ul li a {
    text-decoration: none;
    color: black;
    display: inline-block;
    padding: 10px;
    transition: background 0.3s;
}

.menu ul ul {
    display: none;
    left: 0;
    position: absolute;
}

.menu ul li:hover ul {
    display: block;
}

.menu ul li:hover ul {
    background-color: var(--cor-de-fundo);
    background-image: none;
}

.menu ul ul {
    width: 200px;
    height: 420px;
}

.menu ul ul li a {
    display: block;
}

.menu ul li a:hover {
    background-color: var(--cor--terciaria);
}

.cp {
    left: 39%;
}

.bloco {
    background-image: url(../images/proto_chip-7732459_1920.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
}

.legenda {
    margin-left: 20px;
    width: 40%;
    color: #ffffff;
    padding-top: 70px;
}

.home ul {
    background-color: #34c771;
    list-style-type: none;
    padding: 1%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.home ul li {
    display: inline;
    padding: 0;
}

.home ul li a {
    text-decoration: none;
    color: #ffffff;
    display: inline-block;
    padding: 1px;
}

p {
    margin: 3%;
    padding: 1px;
}

h2 {
    color: #ffffff;
    text-align: justify;
}

.texto2 {
    background-color: #34c771;
    display: block;
}

h1 {
    margin-left: 450px;
    color: #ffffff;
}

.im1 {
    height: 200px;
    margin-left: 42px;
    margin-top: 10px;
    position: relative;
}

.im2 {
    height: 200px;
    margin-left: 150px;
    margin-top: 10px;
    position: absolute;
}

.im3 {
    height: 200px;
    margin-left: 920px;
    margin-top: -199px;
    margin-bottom: 25px;
}

.text1 {
    margin-left: 40px;
    list-style-type: none;
    padding-top: 0px;
}

.text2 {
    margin-left: 520px;
    list-style-type: none;
    padding-bottom: 10px;
    margin-top: -20px;
}

.text3 {
    margin-left: 980px;
    margin-top: -22px;
}

.botao {
    display: block;
}

.botao2 {
    background-color: #34c771;
    border: none;
    margin-left: 390px;
    padding: 20px;
    width: 500px;
    margin-top: 50px;
    font-size: 20px;
    color: #ffffff;
    font-size: 30px;
}

.botao2:hover {
    background-color: #4c3761;
}

.pc {
    background-color: #ffffff;
    display: block;
    border: none;
    margin-top: 8px;
    width: 170px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
    margin-left: 7px;
}

.rod_foot {
    background-color: #110e14;
    padding: 15px;
}

.rodape .card a {
    text-decoration: none;
    list-style-type: none;
    color: #ffffff;
}

.rodape .card2 a {
    text-decoration: none;
    list-style-type: none;
    color: #ffffff;
}

.rodape {
    display: flex;
    justify-content: space-around;
}

.brasao {
    width: 110px;
    margin-top: 10px;
}

.rod {
    font-size: 20px;
}

.foot {
    margin-top: 20px;
}

.rodape .card a {
    padding: 5px;
}`;


export default Global;