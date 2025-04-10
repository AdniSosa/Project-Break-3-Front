import { useContext } from "react";
import {UserLoggedContext} from '../contexts/UserLoggedContext'

const useLoggedUser = () => useContext(UserLoggedContext)

export default useLoggedUser;