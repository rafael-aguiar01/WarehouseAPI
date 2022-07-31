import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1659274269678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "type_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "unit_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKTypeProduct",
                        referencedTableName: "types",
                        referencedColumnNames: ["id"],
                        columnNames: ["type_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUnitProduct",
                        referencedTableName: "units",
                        referencedColumnNames: ["id"],
                        columnNames: ["unit_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },                   
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
