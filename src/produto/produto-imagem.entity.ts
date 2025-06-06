import { Column, Entity } from 'typeorm';

@Entity('produto_imagem')
export class ImagemProduto {
  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
}
