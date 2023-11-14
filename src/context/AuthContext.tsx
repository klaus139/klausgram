import { getCurrentUser } from '@/lib/appwrite/api';
import { IContextType, IUser } from '@/types';
import React,{createContext, useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const INITIAL_USER = {
    id: '',
    name: '',
    email: '',
    username:'',
    imageUrl: '',
    bio: '',
    

};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser:() => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children} : { children: React.ReactNode }) => {
    const navigate = useNavigate()

    const [user, setUser] = useState<IUser>(INITIAL_USER);
    const [ isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const checkAuthUser = async() => {
        try{
            const currentAccount = await getCurrentUser()

            if(currentAccount){
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    email: currentAccount.email,
                    username: currentAccount.name,
                    imageUrl: currentAccount.imageUrl[0],
                    bio: currentAccount.bio,
                })

                setIsAuthenticated(true)

                return true;
            }
            return false;

        }catch(error){
            console.log(error)
            return false;
        } finally {
            setIsLoading(false)
        }


    };

    useEffect(()=> {
        // localStorage.getItem('cookieFallball') === null
        if(
            localStorage.getItem('cookieFallback') === '[]' 
            
            
        ) navigate('/sign-in')
        checkAuthUser();

    },[navigate]);

    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext)