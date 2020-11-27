/* Declarar una función que permita crear el registro de un video de YouTube,
especificando la siguiente información: Título, enlace, canal, duración,
visualizaciones, likes, dislikes, si tiene subtítulo y si es HD. */

function videosYT(p_Titulo, p_enlace, P_canal, p_duracion, p_views, p_likes, p_dislikes, p_subtitulo, p_HD) {
    return {
        Titulo: p_Titulo,
        enlace: p_enlace,
        canal: P_canal,
        duracion: p_duracion,
        views: p_views,
        likes: p_likes,
        dislikes: p_dislikes,
        subtitulo: p_subtitulo,
        HD: p_HD
    }
}
/*Ej6: Crear una función que recibe una colección de registros de cinco videos de YouTube
(generados a partir de la función antes creada). Retornar el registro del video con
mas likes */
let ListaYT = [];
ListaYT.push(videosYT('Protect The Land', 'https://www.youtube.com/watch?v=6pzn8I8Vu40&ab_channel=SystemOfADown-Topic', 
                        'System Of A Down', 5.07, 922890, 
                        33122, 1716, false, true));
ListaYT.push(videosYT('System Of A Down - Aerials (Official Video)', 'https://www.youtube.com/watch?v=L-iepu3EtyE&ab_channel=systemofadownVEVO', 
                        'System Of A Down', 4.03, 288823407, 
                        1300000, 42729, false, false));
ListaYT.push(videosYT('505', 'https://www.youtube.com/watch?v=qU9mHegkTc4&ab_channel=ArcticMonkeys-Topic', 
                        'Official Arctic Monkeys', 4.13, 29518253, 
                        348038, 7063, false, true));
ListaYT.push(videosYT('Arctic Monkeys - Do I Wanna Know? (Official Video)', 'https://www.youtube.com/watch?v=bpOSxM0rNPM&ab_channel=OfficialArcticMonkeys', 
                        'Official Arctic Monkeys', 4.25, 1078145534, 
                        5700000, 173774, true, true));
ListaYT.push(videosYT('Red Hot Chili Peppers - Dark Necessities [OFFICIAL VIDEO]', 'https://www.youtube.com/watch?v=Q0oIoR9mLwc&ab_channel=RedHotChiliPeppers', 
                        'Red Hot Chili Peppers', 5.03, 295894453, 
                        1500000, 55627, false, true));

function moreLikes(ListaYT) {
    let max = ListaYT[0]['likes'];
    let pos = 0;
    for (let i = 0; i < ListaYT.length; i++) {
        console.log(`Valor max = ${max} -- Valor a evaluar = ${ListaYT[i]['likes']}`);
        if (ListaYT[i]['likes'] > max) {
            max = ListaYT[i]['likes'];
            pos = i;
        }
    }
    return ListaYT[pos];
}
console.log(moreLikes(ListaYT));