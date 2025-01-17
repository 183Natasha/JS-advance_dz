'use strict'

function userPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log('Доступ к геолокации предоставлен, координаты получены:');
                const latitudeUser = position.coords.latitude;
                const longitudeUser = position.coords.longitude;

                resolve(`Широта - ${latitudeUser} Долгота - ${longitudeUser}`)
            }
            ,

            error => {
                reject(new Error('Доступ к геолокации отклонён.'))
            }
        )
    }
    )
}


userPosition()
    .then((data) => console.log(data))
    .catch((error) => console.error(`Упс, произошла ошибка. Error: ${error.message}`))
    .finally(() => console.log('Программа работает'))
