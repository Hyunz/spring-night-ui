import React, {useCallback, useEffect, useState} from 'react';
import {deleteApi, getDetailApi} from "./api";

export const View = ({setViewMetaInfo, id}) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDetailApi(id);
        setArticle(response);
      } catch (e) {
        // 에러에러
      }
    };
    fetchData();
  }, [id]);

  const deleteHandler = useCallback(async () => {
    if (window.confirm("레알 지울거에요?")) {
      try {
        await deleteApi(id);
        setViewMetaInfo({view: "LIST"});
      } catch(e) {
        // 에러에러
      }
    }
  }, [id, setViewMetaInfo]);

  const {title, content, author, postDate} = article;
  return (
    <>
      {Boolean(article.id) ? (
        <>
          <hr/>
          <h1>{title} <span style={{fontSize: 14}}>by {author}, {postDate}</span></h1>
          <p>{content}</p>
          <hr/>
          <button type="button" onClick={() => setViewMetaInfo({view: "LIST"})}>목록</button>&nbsp;
          <button type="button" onClick={() => setViewMetaInfo({view: "EDIT", id})}>수정</button>&nbsp;
          <button type="button" onClick={deleteHandler}>삭제</button>
        </>
      ) : (
        <button type="button" onClick={() => setViewMetaInfo({view: "LIST"})}>목록</button>
      )}
    </>
  )
};