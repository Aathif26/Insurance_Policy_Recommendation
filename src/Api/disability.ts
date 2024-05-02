import { ENDPOINT } from "./endpoint";
import { AXIOS_CLIENT } from "./fetcher";

export async function PostDisability<T>(body: T) {
    const { data } = await AXIOS_CLIENT.post(ENDPOINT.POST_DIASBILITY, JSON.stringify(body))
    return data
}