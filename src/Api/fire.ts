import { ENDPOINT } from "./endpoint";
import { AXIOS_CLIENT } from "./fetcher";

export async function PostFire<T>( body: T) {
    const { data } = await AXIOS_CLIENT.post(ENDPOINT.POST_FIRE, JSON.stringify(body))
    return data
}