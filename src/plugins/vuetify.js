import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const clt = {
    dark: false,
    colors: {
        background: '#0b1923',
        surface: '#0b1923',
        primary: '#1fd660',
        'primary-darken-1': '#1a9f49',
        secondary: '#1fd660',
        'secondary-darken-1': '#1a9f49',
        error: '#B00020',
        info: '#B00020',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default createVuetify({
    theme: {
        defaultTheme: 'clt',
        themes: {
            clt,
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
