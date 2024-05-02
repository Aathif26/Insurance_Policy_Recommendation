import { ENDPOINT } from "./endpoint";
import { AXIOS_CLIENT } from "./fetcher";

export async function PostAutomobile<T>( body: T) {
    const { data } = await AXIOS_CLIENT.post(ENDPOINT.POST_AUTOMOBILE, JSON.stringify(body))
    return data
}