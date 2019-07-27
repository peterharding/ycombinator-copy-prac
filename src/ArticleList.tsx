import React from 'react';
import { Article } from './models/Article';

interface ArticleProps {
    articles: Article[];
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
