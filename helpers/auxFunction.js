import { USER_BBDD } from "../bbdd.js";

const checkEmainAndPass = (email, pass) => {
    const user = USER_BBDD.find((user) => user.email === email )
    if (!user) throw new Error("401")

    if (user.pass !== pass) throw new Error("401");
    return user
}

export { checkEmainAndPass }