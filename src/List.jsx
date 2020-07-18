import React, {useEffect, useState} from 'react';
import {getListApi} from "./api";

export const List = ({setViewMetaInfo}) => {

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListApi();
        setArticleList(response);
      } catch(e) {
        // 에러에러
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <hr/>
      <table>
        <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성일</th>
        </tr>
        </thead>
        <tbody>
        {articleList.map(({id, title, author, postDate}) => (
          <tr key={id} onClick={() => setViewMetaInfo({page: "VIEW", id})} style={{cursor: "pointer"}}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{postDate}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <hr/>
      <button type="button" onClick={() => setViewMetaInfo({page: "POST"})}>글쓰기</button>
    </>
  )
};