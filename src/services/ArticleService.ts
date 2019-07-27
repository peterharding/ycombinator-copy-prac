import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { Article } from '../models/Article';

export class ArticleService {
    public async getArticleIds(): Promise<AxiosResponse<number[]>> {
        return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    }

    public async getArticleList(ids: number[], limit: number): Promise<Article[]> {
        var results: Article[] = [];
        await Promise.all(ids.map(async (id, index) => {
            if (index > limit) { return }
            const resp = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            results.push(JSON.parse(resp.request.response));
        }));
        return results;
    }
}
