/** @type {import('tailwindcss').Config} */
module.exports = { // npx tailwindcss init -p를 통해 tailwind의 config 파일을 생성할 수 있다.
  content: [ // tailwind를 사용한 곳을 이곳에 명시한다. tailwind에게 tailwind를 사용한 곳을 알려줄테니 가서 찾으라고 말해주는 것.
    "./pages/**/*.{js,jsx,ts,tsx}", // pages의 모든 폴더(**)의 모든 파일(*)이면서 해당하는 확장자(ex js, jsx, ts, tsx)
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "media", // class
  plugins: [],
}
