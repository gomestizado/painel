'use client';

import React, { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import './loginScreen.scss';

export default function LoginScreen() {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form className="formUp">
                    <h1>Criar uma conta</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FaGooglePlusG /></a>
                        <a href="#" className="icon"><FaFacebookF /></a>
                        <a href="#" className="icon"><FaGithub /></a>
                        <a href="#" className="icon"><FaLinkedinIn /></a>
                    </div>
                    <span>ou use seu e-mail para registro</span>
                    <input className="input" type="text" placeholder="Name"/>
                    <input className="input" type="email" placeholder="Email"/>
                    <input className="input" type="password" placeholder="Password"/>
                    <button>Cadastre-se</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form className="formIn">
                    <h1>Entrar</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FaGooglePlusG /></a>
                        <a href="#" className="icon"><FaFacebookF /></a>
                        <a href="#" className="icon"><FaGithub /></a>
                        <a href="#" className="icon"><FaLinkedinIn /></a>
                    </div>
                    <span>ou use sua senha de e-mail</span>
                    <input className="input" type="email" placeholder="Email"/>
                    <input className="input" type="password" placeholder="Password"/>
                    <a href="#">Esqueceu sua senha?</a>
                    <button>Entrar</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bem vindo de volta!</h1>
                        <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                        <button className="hidden" id="login">Entrar</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Olá amigo!</h1>
                        <p>Cadastre-se com seus dados pessoais para usar todos os recursos do site</p>
                        <button className="hidden" id="register">Cadastre-se</button>
                    </div>
                </div>
            </div>
        </div>
    );
}