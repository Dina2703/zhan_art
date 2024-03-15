/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile": "url('/public/mobile_hero_img_min.jpg')",
        "bg-desk": "url('/public/hero_pic3.jpg')",
      },
    },
    boxShadow: {
      customBoxShadow:
        " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      clay: "0 35px 68px 0 rgba(170,63,254,0.42), inset 0 -8px 16px 0 #D6A2FF",
      claymorphismDark:
        "0 35px 68px 0 rgba(170,63,254,0.42), inset 0 -8px 16px 0 #D6A2FF",
    },
  },
};
