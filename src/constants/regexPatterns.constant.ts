export const WordRegex = {
    DATE_TIME:
        `(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2}(?:\\.\\d*)?)((-(\\d{2}):(\\d{2})|Z)?)`,
    LOG_LEVEL: '(?<=- )(.*?)(?= -)',
    LOG_MESSAGE: '{(.*?)}$',
}
