# MoneyTI 배포 가이드 (Vercel)

Next.js 프로젝트를 가장 쉽고 빠르게 배포하는 방법은 **Vercel**을 사용하는 것입니다.

## 1. 사전 준비
- GitHub 계정이 필요합니다.
- 현재 프로젝트 코드를 GitHub 저장소(Repository)에 업로드(Push)해야 합니다.

## 2. 배포 방법

1. **[Vercel](https://vercel.com/) 접속 및 로그인** (GitHub 계정 연동 추천)
2. **Add New Project** 클릭 -> **Import** 버튼 클릭
3. 방금 업로드한 **MoneyTI** 레포지토리의 `Import` 버튼 클릭
4. **Configure Project** 화면에서:
   - **Framework Preset**: `Next.js` (자동 감지됨)
   - **Environment Variables**:
     - `NEXT_PUBLIC_API_KEY`: `.env.local`에 있는 키 값(`e40c...`)을 복사해서 붙여넣기
5. **Deploy** 버튼 클릭

## 3. 배포 완료 확인
- 배포가 완료되면 불꽃놀이 화면이 나옵니다. 🎉
- 제공되는 URL(예: `moneyti.vercel.app`)을 클릭하여 접속합니다.
- `/test` 페이지와 `/result` 페이지에서 API 데이터가 잘 나오는지 확인합니다.

---

### 💡 주의사항
- **API Key**: 공공데이터포털의 API Key는 **Decoding Key**를 사용해야 합니다. 배포 후 데이터가 안 나온다면 `NEXT_PUBLIC_API_KEY` 환경 변수가 올바른지 확인해주세요.
- **http vs https**: 공공데이터포털 API가 `http`만 지원하는 경우, Vercel(`https`)에서 호출 시 "Mixed Content" 에러가 날 수 있습니다.
  - 다행히 MoneyTI는 **API Route(`api/etf/price`)**를 통해 서버에서 요청을 대신 보내므로(Proxy), 이 문제는 발생하지 않습니다. 안심하고 배포하세요!
