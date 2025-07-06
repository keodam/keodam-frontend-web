import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import styles from './UserTable.module.less';
import Search from '../../../components/Admin/Search';

interface User {
  uuid: string;
  name: string;
  userId: string;
  nickname: string;
  role: string;
  phone: string;
}
// 하드코딩해서 넣어둔 내용
const data: User[] = [
  {
    uuid: '#P0001',
    name: '김지원',
    userId: 'wldnjs@naver.com',
    nickname: '디자이너',
    role: '멘토',
    phone: '010 - 2222 - 2222',
  },
  {
    uuid: '#P0002',
    name: '임승현',
    userId: 'tmdgus@naver.com',
    nickname: '백엔드',
    role: '멘토 / 멘티',
    phone: '010 - 2222 - 2222',
  },
  {
    uuid: '#P0003',
    name: '윤준석',
    userId: 'wnstjr@naver.com',
    nickname: '리더',
    role: '멘토 / 멘티',
    phone: '010 - 3333 - 3333',
  },
  {
    uuid: "#P0004",
    name: "남궁혜민",
    userId: "gpaLs@naver.com",
    nickname: "커담5분컷",
    role: "멘토 / 멘티",
    phone: "010 - 4444 - 4444"
  },
  {
    "uuid": "#P0005",
    "name": "송하은",
    "userId": "gkdms@naver.com",
    "nickname": "빠른 02",
    "role": "멘토",
    "phone": "010 - 5555 - 5555"
  },
  {
    "uuid": "#P0006",
    "name": "최인석",
    "userId": "dlstjr@naver.com",
    "nickname": "딥시크",
    "role": "멘토",
    "phone": "010 - 6666 - 6666"
  },
  {
    "uuid": "#P0007",
    "name": "최다연",
    "userId": "ekdus@naver.com",
    "nickname": "커담 5분컷",
    "role": "멘토 / 멘티",
    "phone": "010 - 7777 - 7777"
  },
  {
    "uuid": "#P0008",
    "name": "권지후",
    "userId": "dlthf@naver.com",
    "nickname": "피피티는 나한테",
    "role": "멘티",
    "phone": "010 - 8888 - 8888"
  },
  {
    "uuid": "#P0009",
    "name": "이슬",
    "userId": "wlgn@naver.com",
    "nickname": "기획굳",
    "role": "멘티",
    "phone": "010 - 9999 - 9999"
  },
  {
    "uuid": "#P0010",
    "name": "조정현",
    "userId": "wjdgus@naver.com",
    "nickname": "웹",
    "role": "멘티",
    "phone": "010 - 0000 - 0000"
  }
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor('uuid', { header: 'uuid' }),
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('userId', { header: '사용자 id' }),
  columnHelper.accessor('nickname', { header: '닉네임' }),
  columnHelper.accessor('role', { header: '역할 (멘티 / 멘토)' }),
  columnHelper.accessor('phone', { header: '전화번호' }),
];

const UserTable = () => {
  const [globalFilter, setGlobalFilter] = useState('');

  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(globalFilter.toLowerCase())
      )
    );
  }, [globalFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span>총 {data.length}건</span>
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
    </div>
  );
};

export default UserTable;
