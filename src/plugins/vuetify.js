import { createApp } from 'vue'
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#C6F227',
        'primary-darken-1': '#82F263',
        secondary: '#056CF2',
        'secondary-darken-1': '#4B53F2',
        error: '#B00020',
        info: '#2BD9C7',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
