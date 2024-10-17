/** @type {import('tailwindcss').Config} */

// tailwindcss 2.0 以上版本需要添加这个配置
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //添加字体 @serif: 衬线字体 @sans: 无衬线字体
      serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};

