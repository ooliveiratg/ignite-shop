import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body:{
        backgroundColor: '$gray900',
        color: '$gray100',
        '--webkit-font-smoothing': 'antialiased',
    },

    'body, input, button, textarea': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,

    }
})