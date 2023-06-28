const cartas = [
    {
        texto: "A",
        valor:11
    },
    {
        texto: "10",
        valor:10
    }
]

console.log(
    cartas.map((carta)=>{
        return carta.texto
    })
)