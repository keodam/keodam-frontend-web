import { api } from './axiosInstance';  // 네가 말한 api 인스턴스 활용

// History 타입 정의 (프론트 기준)
export interface History {
  id: number;
  uuid: string;
  nickname: string;
  requestDate: string;
  detail: string;
  approver: string;
  approveDate: string;
}

// 히스토리 전체 조회
export const getHistoryList = async () => {
  const response = await api.get<History[]>('/history');
  return response.data;
};

// 히스토리 등록 (필요하다면) -> 아마 사용할 일 없을 거 같음
export const createHistory = async (newHistory: Omit<History, 'id'>) => {
  const response = await api.post('/history', newHistory);
  return response.data;
};

// 히스토리 삭제 (필요하다면) -> 아마 사용할 일 없을 거 같음
export const deleteHistory = async (id: number) => {
  const response = await api.delete(`/history/${id}`);
  return response.data;
};
