import { ENDPOINT } from "./endpoint";
import { AXIOS_CLIENT } from "./fetcher";

export async function PostPet<T>( body: T) {
    const { data } = await AXIOS_CLIENT.post(ENDPOINT.POST_PET, JSON.stringify(body))
        return data
}