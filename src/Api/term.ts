import { ENDPOINT } from "./endpoint";
import { AXIOS_CLIENT } from "./fetcher";

export async function PostTerm<T>( body : T) {
    const { data } = await AXIOS_CLIENT.post(ENDPOINT.POST_TERM, JSON.stringify(body))
        return data
}