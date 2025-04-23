/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   // ページディレクトリ
    "./components/**/*.{js,ts,jsx,tsx}", // 必要に応じてコンポーネントディレクトリなど
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
