import React, { Component } from 'react';
import { Article } from './models/Article';
import { ArticleService } from './services/ArticleService';

interface ArticleProps {
    articles: Article[];
}

interface ArticleState {
    articleIds: number[];
    articleData: Article[];
}

export class ArticleListComp extends Component<ArticleProps, ArticleState> {

    constructor(props: ArticleProps) {
        super(props);
        this.state = {
            articleIds: [],
            articleData: []
        }
    }

    async componentDidMount() {
        const articleService = new ArticleService();
        const axiosResponse = await articleService.getArticleIds();
        const articleIds: number[] = [];
        axiosResponse.data.map((respData) => {
            articleIds.push(respData);
        })
        const articleData = await articleService.getArticleList(articleIds, 20);
        this.setState({
            articleIds: articleIds,
            articleData: articleData
        });
    }

    render() {
        return (
            <div>
                 <div>{this.state.articleIds}</div>
                 <ul>
                    {this.state.articleData.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
        );
    }

}

export const ArticleList: React.SFC<ArticleProps> = (articleProps) => {

    articleProps.articles.sort((a1, a2) => {
        return a2.rank - a1.rank;
    })
    const listItems = articleProps.articles.map((article) => {
        return (
            <li>
                <span>{article.name}</span>
                <a href={article.url}>{article.url}</a>
            </li>
        )
    });
    return (
        <ul>
            {listItems}
        </ul>
    )
};
