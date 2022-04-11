class Cpf {
    
    static generate(){
        let cpfString;
        do {
            const cpfNumber = random(100000000, 999999999);
            cpfString = cpfNumber.toString();
            
        } while (Cpf.isSequence(cpfString))
        
        const firstDigit = Cpf.createDigit(cpfString);
        const secondDigit = Cpf.createDigit(cpfString + firstDigit); // o + concatena o first digit no fim da string
        return Cpf.format(cpfString + firstDigit + secondDigit);
    }


    static validate(cpf){ //checa a validade
        const cleanCpf = cpf.replace(/\D+/g, '');
        if(!Cpf.validateString(cleanCpf)) return false;

        const parcialCpf = cleanCpf.slice(0, -2);
        const firstDigit = Cpf.createDigit(parcialCpf);
        const secondDigit = Cpf.createDigit(parcialCpf + firstDigit); // o + concatena o first digit no fim da string

        const newCpf = parcialCpf + firstDigit + secondDigit;
        return (newCpf === cleanCpf);
    }


    static createDigit(parcialCpf) { //cria um digito
        parcialCpf = Array.from(parcialCpf);
    
        let multiplicator = parcialCpf.length + 2;
        
        const cpfMultiplicateArray = parcialCpf.map(number => {
            multiplicator--;
            return Number(number) * multiplicator;
        });
    
        const total = cpfMultiplicateArray.reduce((ac, value) => value + ac);
        let digit = 11 - (total % 11);
        if (digit > 9) digit = 0;
        return digit;
    }

    static validateString(cpf){ //checa se a string corresponde a um cpf
        if(!cpf || typeof cpf !== 'string') return false;
        if(cpf.length !== 11) return false;
        if (Cpf.isSequence(cpf)) return false;
        return true;
    }
    
    static isSequence(cpf){ //checa se o cpf é uma sequencia, ex: 222.222.222-22
        const sequence = cpf[0].repeat(cpf.length);
        return sequence === cpf;
    }

    static format(cpf){
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"); //$1, $2, ... -> referem-se a cada parenteses do regex
    }
}