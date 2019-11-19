
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import {BrowserRouter,Route,Router, Switch } from 'react-router-dom';
import {BrowserRouter,Route,Router, Switch } from 'react-router';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


const columns = [
  {
    title: 'Наименование книги',
    dataIndex: 'name',
    key: 'name'
    
  },
  {
    title: 'Авторы',
    dataIndex: 'author',
    key: 'author',
	render: text => <a>{text}</a>
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date'
  },
  
];

const data = [
  {
    key: '1',
    name: 'Этюд в багровых тонах',
    author: 'Артур К. Дойль',
    date: '1887'
  },
  {
    key: '2',
    name: 'Божественная комедия',
    author: 'Данте Алигьери',
    date: '1308—1321'
  },
  {
    key: '3',
    name: 'Над пропостью во ржи',
    author: 'Джером Сэлинджер',
    date: '1951'
  },
];

ReactDOM.render(<Table columns={columns} dataSource={data} />, 
                <BrowserRouter><App /></BrowserRouter>,  
				document.getElementById('container'));
registerServiceWorker();