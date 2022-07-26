import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUnits1658841456905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"units",
                columns: [
                    {   
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {   
                        name: "description",
                        type: "varchar",
                    },
                    {   
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("units")
    }

}
