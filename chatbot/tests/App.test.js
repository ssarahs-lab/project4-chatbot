import {render, screen} from "@testing-library/react";
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './components/config.jsx';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import style from './style.css';

test('aboutPage Route displays with created by content', () => {
    render(<AboutPage />);
    const heading = screen.getByTestId('heading', {name: "created by Sarah So"});
    expect(heading).toBeInTheDocument();
  });
  
  test('Chatpage appears', () => {
    render (<Chatbot />);
    const text = screen.getByText('bot');
    expect(text).toBeInTheDocument();
  })