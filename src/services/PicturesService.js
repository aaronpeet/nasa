import { AppState } from "../AppState"
import { Picture } from "../models/Picture"
import { nasaApi } from "./AxiosService"

class PicturesService{

    async getPicture() {
        try {
            const res = await nasaApi.get('apod?api_key=ZQxsPaaqK5irlKo7wANOTPq0qOaS99mAoZAqpTgo&date')
            console.log(res.data)
            AppState.activePicture = new Picture(res.data)
            console.log('Getting picture from appstate', AppState.activePicture)
        } catch (error) {
            console.error(error)
        }
    }

}

export const picturesService = new PicturesService()