import {useCallback, useMemo, useState} from "react";

export const usePageable = (initPageSize) => {
  const [size, setSize] = useState(initPageSize);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const isFirst = useMemo(() => page === 0, [page]);
  const isLast = useMemo(() => page + 1 === total, [page, total]);

  const goPrev = useCallback(() => setPage((page) => page - 1), [page, setPage]);
  const goNext = useCallback(() => setPage((page) => page + 1), [page, setPage]);

  return [
    page,
    size,
    total,
    setSize,
    setTotal,
    isFirst,
    isLast,
    goPrev,
    goNext
  ];
};