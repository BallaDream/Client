import html2canvas from 'html2canvas';

/** 전체 페이지를 고해상도로 캡쳐해서 Blob으로 반환 */
export async function captureFullPage(): Promise<Blob> {
  const target = document.body; // 페이지 전체
  const scale = window.devicePixelRatio || 2;

  const canvas = await html2canvas(target, {
    scale,
    backgroundColor: '#ffffff', // 캡쳐 배경 흰색(투명 방지)
    useCORS: true, // 외부 이미지 허용(CORS 헤더 필요)
    scrollX: 0,
    scrollY: 0,
    // 스크롤 포함 전체 높이/넓이로 렌더
    windowWidth: document.documentElement.scrollWidth,
    windowHeight: document.documentElement.scrollHeight,
  });

  return new Promise((resolve) => canvas.toBlob((b) => resolve(b as Blob), 'image/png'));
}

/** 가능하면 시스템 공유(모바일), 아니면 PNG 다운로드 */
export async function shareOrDownload(blob: Blob, filename = 'balladream_full.png') {
  const file = new File([blob], filename, { type: 'image/png' });

  // Web Share Level 2 (파일 공유) 지원 브라우저/환경
  if ((navigator as any).canShare?.({ files: [file] })) {
    await (navigator as any).share({
      title: 'BallaDream',
      text: '내 AI 피부 분석 결과 전체 화면',
      files: [file],
    });
    return;
  }

  // 폴백: PNG 다운로드
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
