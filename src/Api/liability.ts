import { ENDPOINT } from "./endpoint";
import { AXIOS_CLIENT } from "./fetcher";

export async function PostLiability<T>( body : T) {
    const { data } = await AXIOS_CLIENT.post(ENDPOINT.POST_LIABILITY, JSON.stringify(body))
    return data
}