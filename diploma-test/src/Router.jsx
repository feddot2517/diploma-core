
                import React from 'react';
                import { BrowserRouter } from 'react-router-dom';
                import { Route } from 'react-router-dom';
                
                import { Default } from './components/Default'
import { Qwe } from './components/Qwe'
                
                export const Router = () => {
                    return (
                        <BrowserRouter>
                        <Route exact path='/q' component={Qwe}/>
<Route exact path='/q' component={Qwe}/>
                        </BrowserRouter>
                    )
                }
                
            