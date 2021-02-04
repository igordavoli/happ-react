import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrphanages1611629845621 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'lat',
          type: 'decimal',
          scale: 20,
          precision: 2
        },
        {
          name: 'lon',
          type: 'decimal',
          scale: 20,
          precision: 2
        },
        {
          name: "name",
          type: "varchar"
        },
        {
          name: 'about',
          type: 'text'
       }, 
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar',
          default: false
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false

        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
