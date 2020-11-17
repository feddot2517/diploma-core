
                import React from 'react';
                import { BrowserRouter } from 'react-router-dom';
                import { Route } from 'react-router-dom';
                
                import { Default } from './components/Default'
import { Kolya } from './components/Kolya'
                
                export const Router = () => {
                    return (
                        <BrowserRouter>
                        <Route exact path='/kolya' component={Kolya}/>
<Route exact path='/kolya' component={Kolya}/>
                        </BrowserRouter>
                    )
                }
                
            