import { Switch, Route } from 'react-router-dom'
import ArtistAlbumsScreen from './screens/ArtistAlbumsScreen'
import ArtistListScreen from './screens/ArtistListScreen'
import LoginScreen from './screens/LoginScreen'
import SearchScreen from './screens/SearchScreen'
import Nav from './components/Nav'
import { appRoutes } from './utils/routes'
import { useAuthContext, AuthContext } from './hooks/use-auth'

const App = () => {
  const authContext = useAuthContext()

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <Nav />
        <Switch>
          <Route path={appRoutes.root} exact component={LoginScreen} />
          <Route path={appRoutes.searchPage} component={SearchScreen} />
          <Route path={appRoutes.artistsPage} component={ArtistListScreen} />
          <Route
            path={`${appRoutes.artistPath}/:artistId/${appRoutes.albums}`}
            component={ArtistAlbumsScreen}
          />
        </Switch>
      </AuthContext.Provider>
    </>
  )
}

export default App
