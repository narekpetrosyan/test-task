import {$api} from "../index";
import {API_ENDPOINTS} from "../../constants/api-endpoints";

const {RANDOM} = API_ENDPOINTS

export class JokeService {
    static getRandomJoke = () => {
        return $api.get(RANDOM)
    }
}
