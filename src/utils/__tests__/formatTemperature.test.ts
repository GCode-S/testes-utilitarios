import { formaTemperature } from "../formatTemperatura";
import { intergerNumber } from "../formaNumberInteger";

describe('formaTemperature', () => {

    it('deve formatar temperaturas positivas corretamente', () =>{
        expect(formaTemperature(23.7)).toBe('24°C');
    });

    it('deve formatar temperaturas negativas corretamente', () =>{
        expect(formaTemperature(-2.4)).toBe('-2°C');
    });

    it('deve formatar temperaturas iguais a 0 corretamente', () =>{
        expect(formaTemperature(0)).toBe('0°C');
    });
})


describe('TransformIntegerNumber', () =>{
    it('Deve retornar um numero inteiro positivo corretamente', () =>{
        expect(intergerNumber(5.8)).toBe(6);
    })

    it('Deve retornar um numero inteiro negativo', () =>{
        expect(intergerNumber(-5.2)).toBe(-5);
    })

    
})