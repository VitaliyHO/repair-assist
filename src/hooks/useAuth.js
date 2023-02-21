import { useSelector } from "react-redux"
import { selectIsLoading, selectIsLoggedIn, selectIsRefreshing, selectToken, selectUser} from "../redux/auth/selectors"

export const useAuth = () => {
    return{
        isLoggedIn: useSelector(selectIsLoggedIn),
        isLoading: useSelector(selectIsLoading),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
        token: useSelector(selectToken),
    }
}