import react, { createContext, useState } from 'react';
import { isAuthenticated } from '../services/Login';

const UserContext = createContext();

const initialUser = { id: 1, name: 'Miguel', favoriteMovies: [1,2]} //test
const initialUserTwo = isAuthenticated() ;

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUserTwo)

    const login = () => {
        setUser(initialUser);
    }

    const logout = () => {
        setUser(null);
    }    

    const dato = { user }

    return (
        <UserContext.Provider value={dato}>
            { children }
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext;