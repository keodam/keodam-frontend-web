import React, { useState, useEffect, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import styles from '../../Admin/user/UserTable.module.less';  
import Search from '../../../components/Admin/Search';
import TableNavigation from '../../../components/Admin/TableNavigation';
import { getHistoryList, History } from '../../../axios/history'

// 더미 데이터 (백엔드 없을 때 대비용)
const dummyData: History[] = [
  { id: 1, uuid: '#P0001', nickname: '사용자1', requestDate: '25.01.01 12:00', detail: '프로필사진 변경', approver: 'leader', approveDate: '25.01.01 12:00' },
  { id: 2, uuid: '#P0002', nickname: '사용자2', requestDate: '25.01.02 13:00', detail: '닉네임 변경', approver: 'leader', approveDate: '25.01.02 13:00' },
  { id: 3, uuid: '#P0003', nickname: '사용자3', requestDate: '25.01.03 14:00', detail: '프로필사진 변경', approver: 'leader', approveDate: '25.01.03 14:00' },
  { id: 4, uuid: '#P0004', nickname: '사용자4', requestDate: '25.01.04 15:00', detail: '프로필사진 변경', approver: 'leader', approveDate: '25.01.04 15:00' },
  { id: 5, uuid: '#P0005', nickname: '사용자5', requestDate: '25.01.05 16:00', detail: '닉네임 변경', approver: 'leader', approveDate: '25.01.05 16:00' },
  { id: 6, uuid: '#P0006', nickname: '사용자6', requestDate: '25.01.06 17:00', detail: '프로필사진 변경', approver: 'leader', approveDate: '25.01.06 17:00' },
  { id: 7, uuid: '#P0007', nickname: '사용자7', requestDate: '25.01.07 18:00', detail: '프로필사진 변경', approver: 'leader', approveDate: '25.01.07 18:00' },
  { id: 8, uuid: '#P0008', nickname: '사용자8', requestDate: '25.01.08 19:00', detail: '닉네임 변경', approver: 'leader', approveDate: '25.01.08 19:00' },
  { id: 9, uuid: '#P0009', nickname: '사용자9', requestDate: '25.01.09 20:00', detail: '프로필사진 변경', approver: 'leader', approveDate: '25.01.09 20:00' },
  { id: 10, uuid: '#P0010', nickname: '사용자10', requestDate: '25.01.10 21:00', detail: '프로필사진 변경', approver: 'leader', approveDate: '25.01.10 21:00' },
];

const columnHelper = createColumnHelper<History>();

const columns = [
  columnHelper.accessor('id', { header: 'id' }),
  columnHelper.accessor('uuid', { header: 'uuid' }),
  columnHelper.accessor('nickname', { header: '닉네임' }),
  columnHelper.accessor('requestDate', { header: '요청날짜' }),
  columnHelper.accessor('detail', { header: '처리내역' }),
  columnHelper.accessor('approver', { header: '승인자' }),
  columnHelper.accessor('approveDate', { header: '승인날짜' }),
];

const HistoryTable = () => {
  const [historyData, setHistoryData] = useState<History[]>(dummyData);  // 데이터 상태
  const [globalFilter, setGlobalFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // ✅ 페이지 로드 시 백엔드에서 데이터 가져오기
  useEffect(() => {
    //데이터 불러오는 함수 준비
    const fetchData = async () => {
      try {
        const data = await getHistoryList();//서버로부터 데이터 get요청
        setHistoryData(data);//받아온 데이터로 상태 업데이트
      } catch (error) {
        console.error('히스토리 조회 실패, 더미데이터 사용', error);
      }
    };

    fetchData(); //위에서 정의한 함수 실행: 데이터 불러오는 함수 실행
  }, []);

  // ✅ 검색 필터 적용
  const filteredData = useMemo(() => {
    if (!globalFilter) return historyData;
    return historyData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(globalFilter.toLowerCase())
      )
    );
  }, [historyData, globalFilter]);

  // ✅ 최신순 정렬 (id 기준 내림차순)
  const sortedData = useMemo(() => {
    const copied = [...filteredData];
    copied.sort((a, b) => b.id - a.id);
    return copied;
  }, [filteredData]);

  // ✅ 현재 페이지에 맞는 데이터만 추출
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const table = useReactTable({
    data: currentData,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span>총 {filteredData.length}건</span>
        <Search globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      </div>

      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === 'asc'
                    ? ' 🔼'
                    : header.column.getIsSorted() === 'desc'
                    ? ' 🔽'
                    : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <TableNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default HistoryTable;
