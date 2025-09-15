import { Controller, Get, Query } from '@nestjs/common';

@Controller('produto')
export class ProdutoController {
    @Get()
    findAll(@Query() query) {
        // const produtos = await Prisma
        return 'Hello World'
    }

}

