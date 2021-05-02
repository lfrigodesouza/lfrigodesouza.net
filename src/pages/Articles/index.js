import React, { useEffect, useState } from 'react';
import Divider from '../../components/Divider';
import Section from '../../components/Section';

export default function Articles() {
  const CONTENT_URL = 'https://lfrigodesouza-proxy.herokuapp.com/blog/content';
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    await fetch(CONTENT_URL)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.posts.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {!loading && (
        <Section>
          <Divider />
          <h1>Artigos</h1>
          {articles.map((article) => (
            <span>{article.title}</span>
          ))}
        </Section>
      )}
    </>
  );
}
