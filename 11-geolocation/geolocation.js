'use strict'

function userPosition() {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitudeUser = position.coords.latitude;
            const longitudeUser = position.coords.longitude;

            resolve(`Широта - ${latitudeUser} Долгота - ${longitudeUser}`)
        })
    })
}

userPosition()
    .then((data) => console.log(data))
    .catch((error) => console.error(`Упс, произошла ошибка. Error: ${error.message})`))
    .finally(() =>console.log('Пользователь разрешил доступ к геопозиции'))
