export default class Poster {
    constructor(url, nombre)
    {
        this.url = url;
        this.nombre = nombre;
    }

    getUrl() {
        return `${this.url}`;
    }
    getNombre() {
        return `${this.nombre}`;
    }
}