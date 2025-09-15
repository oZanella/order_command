-- CreateTable
CREATE TABLE "public"."Pedido" (
    "id" SERIAL NOT NULL,
    "pessoaId" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PedidosProdutos" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,

    CONSTRAINT "PedidosProdutos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pessoa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_PedidosProdutosToPessoa" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PedidosProdutosToPessoa_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "PedidosProdutos_pedidoId_produtoId_key" ON "public"."PedidosProdutos"("pedidoId", "produtoId");

-- CreateIndex
CREATE INDEX "_PedidosProdutosToPessoa_B_index" ON "public"."_PedidosProdutosToPessoa"("B");

-- AddForeignKey
ALTER TABLE "public"."Pedido" ADD CONSTRAINT "Pedido_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "public"."Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PedidosProdutos" ADD CONSTRAINT "PedidosProdutos_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PedidosProdutos" ADD CONSTRAINT "PedidosProdutos_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "public"."Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PedidosProdutosToPessoa" ADD CONSTRAINT "_PedidosProdutosToPessoa_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."PedidosProdutos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PedidosProdutosToPessoa" ADD CONSTRAINT "_PedidosProdutosToPessoa_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
