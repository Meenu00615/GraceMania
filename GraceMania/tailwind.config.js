module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontSize: {
          "10xl": "10rem", 
          "11xl": "12rem", 
          "12xl": "14rem", 
        },
      },
    },
    plugins: [],
  };