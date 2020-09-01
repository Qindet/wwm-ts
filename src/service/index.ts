import {QuestionItem} from "../types/state";
import axios from 'axios'
enum responseCode {
    Failed=400
}
export default class MainService {
    addQuestion = async (question: QuestionItem) => {
        try {
            const res = await axios.post('http://localhost:3000/questions',question,{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            console.log(res)
            if (res.status === responseCode.Failed) {
                throw new Error('Something went wrong')
            }
        } catch (e) {
            throw e
        }

    }
}

