/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '834px',
      pc: '1194px'
    },
    extend: {
      backgroundImage: {
        'form-pattern': "url('/src/assets/background.jpg')"
      },
      fontFamily: {
        eudoxus: ['eudoxus sans'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        ChadBlue0: '#32ABF2',
        ChadBlue30: '#96CAF7',
        DarkBlue20: '#134267',
        DarkBlue60: '#5D7FA3',
        LabelLightPrimary: '#000000',
        MDDarkBlue80: '#93A8C1',
        MDDarkBlue95: '#C9D3E0',
        MDShade0: '#030E16',
        MDShade10: '#132534',
        MDShade30: '#364C66',
        MDShade50: '#6B7B93',
        MDShade60: '#8694A8',
        MDShade80: '#C3CAD5',
        MDShade100: '#F8F9FC',
        Shade0: '#17191C',
        Shade20: '#464A53',
        Shade30: '#5E636E',
        Shade40: '#4F637D',
        Shade41: '#757C8A',
        Shade50: '#9196A1',
        Shade60: '#ACB0B9',
        Shade70: '#C8CBD0',
        Shade71: '#27282B',
        Shade80: '#E3E5E8',
        Shade90: '#F0F1F3',
        Shade95: '#F6F6F7',
        Shade99: '#F9F9FA',
        Shade100: '#FFFFFF',
        Success10: '#65BD47',
        Success20: '#F3FCF4',
        Unlinked1: '#123245',
        Unlinked2: '#FFFFFF30',
        Unlinked4: '#4285F4',
        Unlinked5: '#34A853',
        Unlinked6: '#618BAF',
        Unlinked7: '#FBBC04',
        Unlinked8: '#EA4335',
        Unlinked9: '#5383EC',
        Unlinked12: '#Linear',
        Unlinked15: '#9AA0A6',
        Unlinked16: '#D4D4D4',
        Unlinked19: '#EB5A55',
        Unlinked20: '#79292A',
        Unlinked21: '#20496C',
        Unlinked31: '#CCCCCC',
        Unlinked32: '#E8EAED',
        Unlinked33: '#202124',
        Unlinked38: '#34056F',
        Unlinked39: '#F9F9F9',
        Unlinked75: '#80858A'
      }
    }
  },
  plugins: []
}
