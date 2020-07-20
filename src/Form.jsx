import React, {useEffect, useMemo, useState} from 'react';
import {getDetailApi, postApi, updateApi} from "./api";

export const Form = ({setViewMetaInfo, id}) => {

  const [formData, setFormData] = useState({title: "", content: ""});
  const isEdit = useMemo(() => Boolean(id), [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {title, content} = await getDetailApi(id);
        setFormData({title, content});
      } catch (e) {
        // 에러에러
      }
    };
    if (isEdit) fetchData();
  }, [id, isEdit]);

  const fieldChangeHandler = (fieldName) => (event) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formData.title) {
      try {
        isEdit
          ? await updateApi(id, formData)
          : await postApi(formData);

        setViewMetaInfo(isEdit
          ? {view: "VIEW", id}
          : {view: "LIST"}
        );
      } catch(e) {
        // 에러에러
      }
    } else {
      alert("제목이 없어용!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {id}
      <button onClick={() => setViewMetaInfo({view: "LIST"})}>목록</button>
      <hr/>
      <ul>
        <li>제목 <input type="text" value={formData.title} onChange={fieldChangeHandler("title")}/></li>
        <li>내용 <textarea value={formData.content} onChange={fieldChangeHandler("content")}/></li>
      </ul>
      <hr/>
      <button type="submit">{isEdit ? "수정" : "등록"}</button>
    </form>
  )
};