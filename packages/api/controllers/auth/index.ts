import { refreshAccessToken } from "./refreshAccessToken"
import { signIn } from "./signIn"
import { signUp } from "./signUp"

const AuthController = {
    signIn,
    signUp,
    refreshAccessToken
}

export default AuthController