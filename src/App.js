import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Products } from './components';
import { ProductRequirements, HomePage, LoginPage, ProfilePage, Product, RegisterPage, EditPage, FileUpload } from './pages';

const App = () => {
    return (
        <div className=' font-roboto'>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route
                        path='/productrequire'
                        component={ProductRequirements}
                    />

                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />

                    <Route path='/products' component={Products} />

                    <Route path='/profile' component={ProfilePage} />
                    <Route path='/product' component={Product} />
                    <Route path='/editprofile' component={EditPage} />
                    <Route path='/fileupload' component={FileUpload} />
                </Switch>
            </Router>
            {/* <h1 className=" text-6.5xl">Simple Boilerplate React Context Hooks</h1>
      <TodoContainer /> */}
        </div>
    );
};

export default App;
