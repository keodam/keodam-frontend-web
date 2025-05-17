// UserTable.tsx
import React, { useState, useMemo } from 'react';
import {
  useReactTable,           // 테이블 인스턴스를 생성하는 메인 훅
  getCoreRowModel,         // 기본 row 렌더링 로직
  getFilteredRowModel,     // 필터링 기능을 위한 row 모델
  getSortedRowModel,       // 정렬 기능을 위한 row 모델
  flexRender,              // 셀이나 헤더를 실제 JSX로 렌더링
  createColumnHelper,      // 타입 기반 컬럼 정의를 도와주는 도구
} from '@tanstack/react-table';
import styles from './UserTable.module.less'; // module.less 스타일 불러오기

// 사용자 정보 타입 정의
interface User {
  uuid: string;
  name: string;
  userId: string;
  nickname: string;
  role: string;
  phone: string;
}

// 예시 데이터 (실제 환경에선 API로 가져올 수 있음)
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
    "nickname": "코어",
    "role": "멘토",
    "phone": "010 - 6666 - 6666"
  },
  {
    "uuid": "#P0007",
    "name": "최다연",
    "userId": "ekdus@naver.com",
    "nickname": "빠른02",
    "role": "멘토 / 멘티",
    "phone": "010 - 7777 - 7777"
  },
  {
    "uuid": "#P0008",
    "name": "권지후",
    "userId": "dlthf@naver.com",
    "nickname": "팀시크",
    "role": "멘티",
    "phone": "010 - 8888 - 8888"
  },
  {
    "uuid": "#P0009",
    "name": "이슬",
    "userId": "wlgn@naver.com",
    "nickname": "기획군",
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

// 컬럼 생성 도우미
const columnHelper = createColumnHelper<User>();

// 테이블 컬럼 정의
const columns = [
  columnHelper.accessor('uuid', { header: 'uuid' }),
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('userId', { header: '사용자 id' }),
  columnHelper.accessor('nickname', { header: '닉네임' }),
  columnHelper.accessor('role', { header: '역할 (멘티 / 멘토)' }),
  columnHelper.accessor('phone', { header: '전화번호' }),
];

// 테이블 컴포넌트
const UserTable = () => {
  const [globalFilter, setGlobalFilter] = useState(''); // 검색어 상태

  // 검색어로 데이터 필터링
  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(globalFilter.toLowerCase())
      )
    );
  }, [globalFilter]);

  // TanStack Table 훅으로 테이블 인스턴스 생성
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
    

      {/* 상단 바: 총 건수 및 검색 입력 */}
      <div className={styles.topBar}>
        <span>총 {data.length}건</span>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* 테이블 렌더링 */}
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {/* 헤더 텍스트 렌더링 */}
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {/* 정렬 아이콘 표시 */}
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
                  {/* 셀 내용 렌더링 */}
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