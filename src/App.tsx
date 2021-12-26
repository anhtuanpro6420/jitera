import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.less';
import Home from 'pages/Home';
import Wrapper from 'components/Wrapper';

function App(): JSX.Element {
    const routes = (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='' component={Home} />
        </Switch>
    );
    return <Wrapper>{routes}</Wrapper>;
}

export default App;
