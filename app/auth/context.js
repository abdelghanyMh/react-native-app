import React, {useContext, useState} from 'react';

const AuthContext = React.createContext();

export default AuthContext;

// const AuthProvider = ({children}) => {
//   const [user, setUser] = useState();

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//       }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuthContext = () => {
//   return useContext(AuthContext);
// };

// export default {useAuthContext, AuthContext, AuthProvider};
