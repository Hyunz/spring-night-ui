const RESOURCE_ENDPOINT = "http://localhost:8080/api/article";

/**
 *     [GET] http://localhost:8080/api/article          글 목록 가져오기
 *     [GET] http://localhost:8080/api/article/:id      글 상세 가져오기
 *    [POST] http://localhost:8080/api/article          글 작성하기
 *     [PUT] http://localhost:8080/api/article/:id      글 수정하기
 *  [DELETE] http://localhost:8080/api/article/:id      글 삭제하기
 */

export const getListApi = async () => {
  const response = await fetch(`${RESOURCE_ENDPOINT}`);
  return response.json();
};

export const getDetailApi = async (id) => {
  const response = await fetch(`${RESOURCE_ENDPOINT}/${id}`);
  return response.json();
};

export const postApi = async (formData) => {
  const response = await fetch(`${RESOURCE_ENDPOINT}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  return response.ok;
};

export const deleteApi  = async (id) => {
  const response = await fetch(`${RESOURCE_ENDPOINT}/${id}`, {
    method: "DELETE"
  });
  return response.ok;
};

export const updateApi = async (id, formData) => {
  const response = await fetch(`${RESOURCE_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  return response.ok;
};
