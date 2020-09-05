import {QuestionItem} from "../types/state";
import axios from 'axios'
import {ActionPlayerRecord} from "../types/actions-types/records-actions";

enum responseCode {
    Failed=400
}
export default class MainService {
    addQuestion = async (question: QuestionItem) => {
        try {
            const res = await axios.post(`http://localhost:3000/questions`,question,{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.status === responseCode.Failed) {
                throw new Error('Something went wrong')
            }
        } catch (e) {
            throw e
        }
    }
    getQuestions = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/questions`,{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.status === responseCode.Failed) {
                throw new Error('Something went wrong')
            }
            return res.data
        } catch (e) {
            throw e
        }
    }
    addRecord = async (playerRecord: ActionPlayerRecord) => {
        try {
            const res = await axios.post(`http://localhost:3000/records`,playerRecord,{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.status === responseCode.Failed) {
                throw new Error('Something went wrong')
            }
        } catch (e) {
            throw e
        }
    }
}

