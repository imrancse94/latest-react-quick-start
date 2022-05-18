import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes';
import AuthRoute from './AuthRoute';

function AppRoute() {

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route, index) => {
                        return (
                            <Route key={index} path={route.path}
                                element={<AuthRoute {...route} component={route.component ? route.component : null} />}
                            >
                                {
                                    route.children ?
                                        route.children.map((child, index) => {
                                            return (
                                                <Route key={index} path={child.path}
                                                    element={child.component}
                                                />
                                            )
                                        }) : ''
                                }
                            </Route>
                        )

                    })
                }
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoute;