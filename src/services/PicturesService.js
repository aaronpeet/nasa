import { AppState } from "../AppState"
import { Picture } from "../models/Picture"
import { nasaApi } from "./AxiosService"
const apiKey = 'apod?api_key=ZQxsPaaqK5irlKo7wANOTPq0qOaS99mAoZAqpTgo'

class PicturesService{

    async getPicture() {
        try {
            const res = await nasaApi.get(apiKey)
            console.log(res.data)
            AppState.activePicture = new Picture(res.data)
            console.log('Getting picture from appstate', AppState.activePicture)
        } catch (error) {
            console.error(error)
        }
    }

    async changeActivePicture(query) {
        try {
            const res = await nasaApi.get(apiKey + '&date=' + query)
            console.log('youve changed the picture!')
            AppState.activePicture = new Picture(res.data)
        } catch (error) {
            console.error(error)
        }
    }

}

export const picturesService = new PicturesService()