import { IsString, IsNotEmpty, MinLength, MaxLength, IsIn } from 'class-validator';

export class CarroDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(7, { message: 'A placa deve ter no mínimo 7 caracteres' })
    @MaxLength(7, { message: 'A placa deve ter no máximo 7 caracteres' })
    placa: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'A cor deve ter no mínimo 3 caracteres' })
    @MaxLength(100, { message: 'A cor deve ter no máximo 100 caracteres' })
    cor: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'O modelo deve ter no mínimo 3 caracteres' })
    @MaxLength(100, { message: 'O modelo deve ter no máximo 100 caracteres' })
    modelo: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'A marca deve ter no mínimo 3 caracteres' })
    @MaxLength(100, { message: 'A marca deve ter no máximo 100 caracteres' })
    marca: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['gasolina', 'diesel', 'etanol', 'elétrico'], { message: 'O tipo de combustível deve ser gasolina, diesel, etanol ou elétrico' })
    tipoCombustivel: string;
    
    @IsNotEmpty({ message: 'O ano de fabricação não pode estar vazio' })
    anoFabricacao: number;

    @IsNotEmpty({ message: 'A quilometragem não pode estar vazia' })
    quilometragem: number;
}
