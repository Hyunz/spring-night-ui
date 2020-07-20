import React, {useEffect, useState} from 'react';
import {getListApi} from "./api";
import {usePageable} from "./pageableHook";

export const List = ({setViewMetaInfo}) => {
  const pagePreset = [3, 5, 10, 20];
  const [page, pageSize, totalPageSize, setPageSize, setTotal, isFirstPage, isLastPage, prevPage, nextPage] = usePageable(5);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const fetchData = async (page, pageSize) => {
      try {
        const {list, total} = await getListApi(page, pageSize);
        setTotal(total);
        setArticleList(list);
      } catch (e) {
        // 에러에러
      }
    };
    fetchData(page, pageSize);
  }, [page, pageSize]);

  return (
    <>
      <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
        {pagePreset.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>&nbsp;
      ({page + 1}/{totalPageSize}) 페이지
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
          <tr key={id} onClick={() => setViewMetaInfo({view: "VIEW", id})} style={{cursor: "pointer"}}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{postDate}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <button disabled={isFirstPage} onClick={prevPage}>&lt;</button>&nbsp;
      <button disabled={isLastPage} onClick={nextPage}>&gt;</button>
      <hr/>
      <button type="button" onClick={() => setViewMetaInfo({view: "POST"})}>글쓰기</button>
    </>
  )
};