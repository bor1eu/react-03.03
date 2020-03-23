import React, { Component } from 'react';
import ChatContainer from './containers/ChatContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChatList } from './components/ChatList/ChatList'
import { initStore } from './store'
import { Provider } from 'react-redux'
import { initChats } from './store/chatActions'
// StaticRouter
// MemoryRouter
// HashRouter www.test.com/#about
// BrowserRouter www.test.com/index

const store = initStore();
store.dispatch(initChats());


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>It's index page</Route>
                    <Route path="/chats">
                        <ChatList />
                        <Switch>
                            <Route path="/chats" exact component={ChatContainer} />
                            <Route path="/chats/:id" exact component={ChatContainer} />
                        </Switch>
                    </Route>
                    <Route path="/about">It's about page</Route>
                    <Route path="/contacts">It's contacts page</Route>
                    <Route path="/">It's 404 page. Not found.</Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}