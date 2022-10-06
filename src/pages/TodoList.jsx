import React, { useState } from 'react';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import Form from '../components/form/Form';
import List from '../components/list/List';

const TodoList = () => {
    const [value, setValue] = useState([
        {
          title: '리액트 어려워요 ㅠㅠ',
          content: '뭘하면 될까요',
          isDone: false,
        },
        {
          title: '맥주 마시기',
          content: '너무 마시고 싶어요',
          isDone: false,
        }
    ]);

    return(
        <Layout>
            <Header />
            <Form value = {value} setValue = {setValue} />
            <List value = {value} setValue = {setValue} />
        </Layout>
    )
}

export default TodoList;