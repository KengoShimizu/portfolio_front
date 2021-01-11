export const CalcOld = () => {
  // Dateインスタンスに変換
  const birthDate = new Date(1995, 11 - 1, 14);

  // 文字列に分解
  const y2 = birthDate.getFullYear().toString().padStart(4, '0');
  const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
  const d2 = birthDate.getDate().toString().padStart(2, '0');

  // 今日の日付
  const today = new Date();
  const y1 = today.getFullYear().toString().padStart(4, '0');
  const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
  const d1 = today.getDate().toString().padStart(2, '0');

  // 引き算
  return Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);
}

export const QsToNumber = (page: string) => {
  let return_val = 1;
  if (page == 'skills') return_val = 2;
  else if (page == 'works') return_val = 3;
  else if (page == 'contact') return_val = 4;
  return return_val;
}