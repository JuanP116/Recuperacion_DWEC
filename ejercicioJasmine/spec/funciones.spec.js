
const DATOS=[
    {lado: 6.8, altura: 9, areaEsperada: 177.083},
    {lado: 7.1, altura: 9.4, areaEsperada: 193.092},
    {lado: 7.4, altura: 9.8, areaEsperada: 209.793},
];


describe('testeo del boletin 3', () => {
    //testeo de la funcion areaPiramide
    describe('testeo de la funcion areaPiramide', () => {
        it('Para un lado de 6.8 y altura 9 el area esperada deberia ser 177.083', () => {
            expect(areaPiramide(6.8, 9)).toBeCloseTo(177.083,3);
        });
    });

    DATOS.forEach((item)=>{
        it(`Para un lado de ${item.lado} y altura ${item.altura} y el area esperada es ${item.areaEsperada}`, () => {
            expect(areaPiramide(item.lado, item.altura)).toBeCloseTo(item.areaEsperada,3);
        });
    });


    //comprobamos que la funcion develve un numero
    it('la funcion areaPiramide() deberia devolver un numero', () => {
        expect(areaPiramide(6.5)).toBeInstanceOf(Number);
    });


});